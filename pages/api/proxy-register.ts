import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://antrean.logammulia.com/register", {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const text = await response.text();

    res.status(200).json({
      ok: true,
      status: response.status,
      body: text,
    });
  } catch (error: any) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
}
