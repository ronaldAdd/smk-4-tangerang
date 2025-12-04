'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Cek status login saat komponen mount
  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove('token');
      setIsLoggedIn(false);
      router.push('/signin');
    } catch (error) {
      console.error('Logout gagal:', error);
    }
  };

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Fitur', href: '/features' },
    { name: 'Harga', href: '/pricing' },
    { name: 'Paket', href: '/plans' },
    { name: 'FAQ', href: '/faqs' },
    { name: 'Blog', href: '/blogs' },
  ];

  return (
    <nav className="w-full sticky top-0 bg-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          InfinityAI
        </Link>

        <ul className="hidden md:flex space-x-8 text-white font-medium tracking-wide">
          {menuItems.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="hover:text-yellow-400 transition">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center bg-yellow-400 text-[#0f172a] px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                <img
                  src="https://i.pravatar.cc/32"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                User ▼
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1e293b] border border-gray-700 rounded-md shadow-lg z-50">
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-400 hover:text-[#0f172a]"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                    <Link
                        href="/dashboard/settings"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-400 hover:text-[#0f172a]"
                        onClick={() => setUserMenuOpen(false)}
                    >
                        Settings
                    </Link>
                  
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-400 hover:text-[#0f172a]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/signin" className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition font-semibold">
                Masuk
              </Link>
              <Link href="/register" className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-300 transition font-semibold">
                Daftar
              </Link>
            </>
          )}
        </div>

        {/* Toggle mobile menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

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
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard/profile"
                className="block text-yellow-400 font-semibold rounded-md text-center py-2 hover:bg-yellow-400 hover:text-[#0f172a] transition"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="block w-full text-yellow-400 font-semibold border border-yellow-400 rounded-md text-center py-2 hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </nav>
  );
}
