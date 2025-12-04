'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Fitur', href: '/features' },
    { name: 'Harga', href: '/pricing' },
    { name: 'FAQ', href: '/faqs' },
    { name: 'Blog', href: '/blogs' },
  ];

  const cartCount = 3;

  // CART ICON COMPONENT
  const CartIcon = () => (
    <div className="relative">
      <Link href="/cart" className="text-white hover:text-yellow-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l3-7H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9" />
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
      <div className="w-full flex items-center py-4 px-6 md:px-12">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          FNBTECH
        </Link>

        {/* SPACER */}
        <div className="flex-1"></div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-white font-medium tracking-wide">
          {menuItems.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="hover:text-yellow-400 transition">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE ICON CLUSTER (DESKTOP + MOBILE) */}
        <div className="flex items-center space-x-6 ml-6">

          {/* CART (always visible) */}
          <CartIcon />

          {/* USER (desktop only) */}
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

          {/* HAMBURGER (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN (NO CART HERE) */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] bg-opacity-95 px-6 pb-4 space-y-4">
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

          <Link
            href="/account"
            className="block text-white font-medium hover:text-yellow-400 flex items-center gap-2 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            👤 Akun Saya
          </Link>

          <Link
            href="/signin"
            className="block text-yellow-400 font-semibold border border-yellow-400 rounded-md text-center py-2 hover:bg-yellow-400 hover:text-gray-900 transition"
            onClick={() => setMenuOpen(false)}
          >
            Masuk
          </Link>

          <Link
            href="/register"
            className="block bg-yellow-400 text-gray-900 font-semibold rounded-md text-center py-2 hover:bg-yellow-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Daftar
          </Link>
        </div>
      )}

    </nav>
  );
}
