// pages/api/proxy-register.ts
import type { NextApiRequest, NextApiResponse } from "next";

type ProxyResponse = {
  ok: boolean;
  status: number;
  title?: string | null;
  headers?: Record<string, string>;
  body?: any;
  error?: string;
};

const TARGET = "https://antrean.logammulia.com/register";

// ==============================
// Helper: Extract <title>
// ==============================
function extractTitle(html: string): string | null {
  const match = html.match(/<title>(.*?)<\/title>/i);
  return match ? match[1] : null;
}

// ==============================
// Helper: Filter incoming headers
// ==============================
function filterRequestHeaders(input: Record<string, any>) {
  const out: Record<string, string> = {};
  const deny = new Set([
    "host",
    "connection",
    "content-length",
    "accept-encoding",
  ]);

  for (const [k, v] of Object.entries(input)) {
    if (!v) continue;
    const key = k.toLowerCase();
    if (deny.has(key)) continue;

    out[key] = Array.isArray(v) ? v.join(",") : v;
  }

  out["user-agent"] = out["user-agent"] || "Nextjs-Proxy/1.0";

  return out;
}

// ==============================
// Helper: Filter outgoing headers
// ==============================
function filterResponseHeaders(h: Headers) {
  const obj: Record<string, string> = {};
  h.forEach((value, key) => {
    if (["transfer-encoding", "connection"].includes(key)) return;
    obj[key] = value;
  });
  return obj;
}

// ==============================
// Helper: Serialize Request Body
// ==============================
function serializeBody(req: NextApiRequest): BodyInit | undefined {
  // If body is already a string → OK
  if (typeof req.body === "string") {
    return req.body;
  }

  // If body is Buffer → convert to Uint8Array (fetch accepts this)
  if (Buffer.isBuffer(req.body)) {
    return new Uint8Array(req.body);
  }

  // If body is an object → JSON.stringify
  if (typeof req.body === "object" && req.body !== null) {
    return JSON.stringify(req.body);
  }

  return undefined;
}


// ==============================
// MAIN HANDLER
// ==============================
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProxyResponse>,
) {
  try {
    const method = req.method ?? "GET";

    const fetchOptions: RequestInit = {
      method,
      headers: filterRequestHeaders(req.headers as any),
      body:
        method === "GET" || method === "HEAD"
          ? undefined
          : serializeBody(req),
      redirect: "follow",
    };

    const upstream = await fetch(TARGET, fetchOptions);

    const contentType = upstream.headers.get("content-type") || "";
    let body: any;

    if (contentType.includes("application/json")) {
      body = await upstream.json();
    } else {
      body = await upstream.text();
    }

    // Extract title
    const title =
      typeof body === "string" ? extractTitle(body) : null;

    res.status(200).json({
      ok: upstream.ok,
      status: upstream.status,
      title,
      headers: filterResponseHeaders(upstream.headers),
      body,
    });
  } catch (err: any) {
    res.status(500).json({
      ok: false,
      status: 500,
      error: err.message || "Internal error",
    });
  }
}
