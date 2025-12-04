// pages/api/order-status.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db"; // pastikan file lib/db.ts sudah ada dan benar

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { order_number } = req.query;

  if (!order_number || typeof order_number !== "string") {
    return res.status(400).json({ message: "Nomor order wajib diisi" });
  }

  try {
    const [rows]: any = await db.query(
      "SELECT * FROM orders WHERE order_number = ? LIMIT 1",
      [order_number]
    );

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    const order = rows[0];

    // Pastikan items dalam bentuk array JS
    try {
      order.items = JSON.parse(order.items || "[]");
    } catch (e) {
      order.items = [];
    }

    // Kembalikan kolom penting
    return res.status(200).json({
      order: {
        id: order.id,
        order_number: order.order_number,
        invoice_number: order.invoice_number,
        status: order.status,
        virtual_account: order.virtual_account,
        name: order.name,
        email: order.email,
        wa: order.wa,
        note: order.note,
        items: order.items,
        created_at: order.created_at,
      },
    });
  } catch (err) {
    console.error("ERROR order-status:", err);
    return res.status(500).json({ message: "Server error", error: String(err) });
  }
}
