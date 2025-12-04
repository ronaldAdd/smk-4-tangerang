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
    { name: 'Jurusan', href: '/jurusan' },
    { name: 'Prestasi', href: '/prestasi' },
    { name: 'Blog', href: '/blogs' }
  ];

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    Cookies.remove('token');
    setIsLoggedIn(false);
    router.push('/signin');
  };

  return (
    <nav className="w-full sticky top-0 bg-blue-800/90 backdrop-blur-md shadow-lg z-50 font-[Outfit]">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />

      <div className="w-full flex items-center py-4 px-6 md:px-12">

        <Link href="/" className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          SMK 4 TANGERANG
        </Link>

        <div className="flex-1"></div>

        <ul className="hidden md:flex space-x-8 text-white font-medium tracking-wide">
          {menuItems.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="hover:text-yellow-300 transition">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6 ml-6">

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

                  {/* DASHBOARD MENU (NEW) */}
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-yellow-400 hover:text-[#0f172a]"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>

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
            <Link href="/signin" className="hidden md:block text-white hover:text-yellow-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 1118.88 17.804M12 12a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </Link>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-900/95 px-6 pb-4 space-y-4">

          {menuItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-white font-medium hover:text-yellow-300"
            >
              {name}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              {/* DASHBOARD MOBILE (NEW) */}
              <Link
                href="/dashboard"
                className="block text-yellow-300 font-semibold py-2 text-center border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-[#0f172a]"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/profile"
                className="block text-yellow-300 font-semibold py-2 text-center border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-[#0f172a]"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="block w-full text-yellow-300 font-semibold border border-yellow-300 rounded-md text-center py-2 hover:bg-yellow-300 hover:text-[#0f172a]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="block text-yellow-300 font-semibold border border-yellow-300 rounded-md text-center py-2 hover:bg-yellow-300 hover:text-[#0f172a]"
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
