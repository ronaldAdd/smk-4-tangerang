import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { customer, note, items } = req.body;

    if (!customer?.name || !customer?.wa) {
      return res.status(400).json({ message: "Nama dan WhatsApp wajib diisi" });
    }

    // Generate nomor order otomatis
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const d = String(today.getDate()).padStart(2, "0");

    const prefix = `ORD-${y}${m}${d}`;

    // Ambil nomor terakhir hari ini
    const [rows]: any = await db.query(
      "SELECT order_number FROM orders WHERE order_number LIKE ? ORDER BY id DESC LIMIT 1",
      [`${prefix}%`]
    );

    let nextNumber = 1;

    if (rows.length > 0) {
      const lastNum = parseInt(rows[0].order_number.split("-")[2]);
      nextNumber = lastNum + 1;
    }

    const orderNumber = `${prefix}-${String(nextNumber).padStart(4, "0")}`;

    // Simpan pesanan
    const result = await db.query(
      "INSERT INTO orders (order_number, name, email, wa, note, items) VALUES (?, ?, ?, ?, ?, ?)",
      [
        orderNumber,
        customer.name,
        customer.email || "",
        customer.wa,
        note || "",
        JSON.stringify(items || []),
      ]
    );

    return res.status(200).json({
      message: "Pesanan berhasil disimpan",
      orderId: (result as any)[0].insertId,
      orderNumber,
    });

  } catch (error) {
    console.error("ERROR SAVE ORDER:", error);
    return res.status(500).json({ message: "Server error", error });
  }
}
