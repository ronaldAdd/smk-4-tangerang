import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Jalankan Chromium
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
      ],
    });

    const page = await browser.newPage();

    await page.goto("https://google.com", {
      waitUntil: "domcontentloaded",
    });

    const title = await page.title();

    // await browser.close();

    res.status(200).json({
      success: true,
      title,
      message: "Puppeteer berhasil dijalankan dari Next.js API Route",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
