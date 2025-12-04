"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full">

      {/* TOP BAR */}
      <div className="bg-[#6f8650] text-white text-xs px-6 py-2 flex justify-between items-center">
        <div className="flex gap-6">
          <span>Garansi 2 Tahun</span>
          <span>Gratis Ongkir*</span>
          <span>Produk Original</span>
        </div>
        <div>Download Otten App</div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">

          {/* LOGO */}
          <Image
            src="/aranoz_files/logo-otten-coffee.png"
            alt="Otten"
            width={120}
            height={40}
            className="h-10 w-auto"
          />

          {/* KATEGORI BUTTON */}
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm text-gray-700">
            <div className="grid grid-cols-2 gap-0.5">
              <span className="w-2 h-2 bg-gray-600"></span>
              <span className="w-2 h-2 bg-gray-600"></span>
              <span className="w-2 h-2 bg-gray-600"></span>
              <span className="w-2 h-2 bg-gray-600"></span>
            </div>
            Kategori
          </button>

          {/* SEARCH BAR */}
          <div className="flex-1">
            <div className="flex bg-gray-100 rounded-xl px-4 py-2 items-center gap-2">
            {/* ICON SEARCH */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m-2.65 1.85a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                />
            </svg>

            <input
                className="bg-transparent w-full outline-none text-sm text-gray-700 placeholder-gray-500"
                placeholder="Cari kopi, alat kopi..."
            />
            </div>
          </div>

          {/* RIGHT ITEMS */}
          <div className="flex items-center gap-6 text-sm">

            {/* Tipe Transaksi */}
            <div>
              <div className="font-semibold text-gray-700">Tipe Transaksi</div>
              <div className="text-xs text-gray-500">Pengiriman atau Ambil di Toko</div>
            </div>

            {/* KERANJANG */}
            <button className="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293A1 1 0 0 0 6.618 17H17m0 0a2 2 0 1 1-2 2m2-2a2 2 0 1 1 2 2M9 17a2 2 0 1 1-2 2"
                />
            </svg>

            {/* BADGE JUMLAH */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                3
            </span>
            </button>


            {/* Login */}
            <a className="text-gray-700 cursor-pointer">Masuk</a>

            {/* Daftar */}
            <button className="bg-[#6f8650] text-white px-5 py-2 rounded-full">
              Daftar
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
