'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userRef = useRef(null);
  const router = useRouter();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faqs' },
    { name: 'Blog', href: '/blogs' },
  ];

  const cartCount = 3;

  // CEK LOGIN
  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  // KLIK DI LUAR MENU USER
  useEffect(() => {
    function handleClickOutside(e) {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // LOGOUT
  const handleLogout = async () => {
    await signOut(auth);
    Cookies.remove('token');
    setIsLoggedIn(false);
    router.push('/signin');
  };

  // CART ICON
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

        {/* ICON AREA */}
        <div className="flex items-center space-x-6 ml-6">

          {/* CART */}
          <CartIcon />

          {/* USER MENU DESKTOP */}
          {isLoggedIn ? (
            <div ref={userRef} className="relative hidden md:block">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center bg-yellow-400 text-[#0f172a] px-3 py-1.5 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                <img
                  src="https://i.pravatar.cc/32"
                  className="w-8 h-8 rounded-full mr-2"
                />
                User ▼
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow">
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 hover:bg-yellow-400 hover:text-[#0f172a]"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="block px-4 py-2 hover:bg-yellow-400 hover:text-[#0f172a]"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-yellow-400 hover:text-[#0f172a]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/signin"
              className="hidden md:block text-white hover:text-yellow-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 1118.88 17.804M12 12a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </Link>
          )}

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] bg-opacity-95 px-6 pb-4 space-y-4">

          {menuItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-white font-medium hover:text-yellow-400"
            >
              {name}
            </Link>
          ))}

          {/* USER MENU MOBILE */}
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard/profile"
                className="block text-yellow-400 font-semibold py-2 text-center border border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-[#0f172a]"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="block w-full text-yellow-400 font-semibold border border-yellow-400 rounded-md text-center py-2 hover:bg-yellow-400 hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="block text-yellow-400 font-semibold border border-yellow-400 rounded-md text-center py-2 hover:bg-yellow-400 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Masuk
              </Link>

              <Link
                href="/register"
                className="block bg-yellow-400 text-black font-semibold rounded-md text-center py-2 hover:bg-yellow-300"
                onClick={() => setMenuOpen(false)}
              >
                Daftar
              </Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
}
