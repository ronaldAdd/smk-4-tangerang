'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faqs' },
    { name: 'Blog', href: '/blogs' },
  ];

  const cartCount = 3;

  const CartIcon = () => (
    <div className="relative">
      <Link href="/cart" className="text-white hover:text-yellow-400 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l3-7H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9"
          />
        </svg>
      </Link>

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#0f172a] text-xs font-bold rounded-full px-1.5 py-0.5">
          {cartCount}
        </span>
      )}
    </div>
  );

  return (
    <nav className="w-full sticky top-0 bg-[#006E29] bg-opacity-90 backdrop-blur-md shadow-md z-50">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ===== LEFT AREA ===== */}
        <div className="flex items-center gap-4">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-yellow-400 flex-shrink-0">
            FNBTECH
          </Link>

          {/* KATEGORI + SEARCH (DESKTOP) */}
          <div className="hidden md:flex items-center gap-3 ml-4">

            {/* BUTTON KATEGORI */}
            <button className="flex items-center gap-2 bg-white text-gray-700 border rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition">
              <div className="grid grid-cols-2 gap-0.5">
                <span className="w-2 h-2 bg-gray-600"></span>
                <span className="w-2 h-2 bg-gray-600"></span>
                <span className="w-2 h-2 bg-gray-600"></span>
                <span className="w-2 h-2 bg-gray-600"></span>
              </div>
              Kategori
            </button>

            {/* SEARCH BAR */}
            <div className="w-72">
              <div className="flex items-center bg-white rounded-lg px-4 py-2">
                <svg
                  className="w-5 h-5 text-gray-500 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m-2.65 1.85a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari produk..."
                  className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ===== RIGHT AREA ===== */}
        <div className="flex items-center gap-6">

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex space-x-6 text-white font-medium tracking-wide bg-[#005020] px-6 py-2 rounded-full">
            {menuItems.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="hover:text-yellow-400 transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <CartIcon />

          {/* USER ICON */}
          <Link
            href="/account"
            className="hidden md:block text-white hover:text-yellow-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1118.88 17.804M12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </Link>

          {/* HAMBURGER - POSISI FIX */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] bg-opacity-95 px-6 pb-4 space-y-4">

          {/* SEARCH MOBILE */}
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full rounded-md px-4 py-2 outline-none"
          />

          {menuItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block text-white font-medium hover:text-yellow-400"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}
