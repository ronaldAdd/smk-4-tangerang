// pages/api/stock.ts
// ✅ Next.js API route - ambil data saham dari Google Finance

import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

type StockData = {
  name: string | null;
  ticker: string | null;
  price: string | null;
  prevClose: string | null;
  dayRange: string | null;
  yearRange: string | null;
  marketCap: string | null;
  avgVolume: string | null;
  peRatio: string | null;
  dividendYield: string | null;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StockData>,
) {
  const { ticker = "BBRI" } = req.query;
  const url = `https://www.google.com/finance/quote/${ticker}-IDR`;

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // nama & harga utama
    const name = $("div.zzDege").first().text().trim() || null;
    const price = $("div.YMlKec.fxKbKc").first().text().trim() || null;

    let tickerText =
      $("div.PdOqHc").first().text().trim() ||
      $("div.e1AOyf").first().text().trim() ||
      null;
    if (tickerText) tickerText = tickerText.replace(/^Home/, "").trim();

    // field label:value
    const fields: Record<string, string> = {};
    $("div.gyFHrc").each((_, el) => {
      const label = $(el).find("div.mfs7Fc").text().trim();
      const value = $(el).find("div.P6K39c").text().trim();
      if (label && value) fields[label] = value;
    });

    const data: StockData = {
      name,
      ticker: tickerText,
      price,
      prevClose: fields["Previous close"] || null,
      dayRange: fields["Day range"] || null,
      yearRange: fields["Year range"] || null,
      marketCap: fields["Market cap"] || null,
      avgVolume: fields["Avg Volume"] || null,
      peRatio: fields["P/E ratio"] || null,
      dividendYield: fields["Dividend yield"] || null,
    };

    res.status(200).json(data);
  } catch (err: any) {
    console.error("❌ Scrape error:", err.message);
    res.status(500).json({
      name: null,
      ticker: null,
      price: null,
      prevClose: null,
      dayRange: null,
      yearRange: null,
      marketCap: null,
      avgVolume: null,
      peRatio: null,
      dividendYield: null,
      error: err.message,
    });
  }
}
