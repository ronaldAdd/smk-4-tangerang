// /pages/api/fetch-captchas.ts
import type { NextApiRequest, NextApiResponse } from "next";

interface CaptchaItem {
  id: number;
  name: string;
  url: string;
  captcha?: string;
  error?: string;
  time?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { urls } = req.body;

  if (!Array.isArray(urls)) {
    return res.status(400).json({ error: "Body harus berisi array 'urls'." });
  }

  const results: CaptchaItem[] = [];

  for (let i = 0; i < urls.length; i++) {
    const { name, url } = urls[i];
    const startTime = Date.now();
    try {
      const response = await fetch(url);
      const text = await response.text();

      results.push({
        id: i + 1,
        name,
        url,
        captcha: text.slice(0, 50) + "...", // contoh potongan isi
        time: new Date().toLocaleTimeString(),
      });
    } catch (error: any) {
      results.push({
        id: i + 1,
        name,
        url,
        error: error.message || "Gagal fetch",
        time: new Date().toLocaleTimeString(),
      });
    }
  }

  res.status(200).json(results);
}
