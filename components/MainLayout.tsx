import { useState, useRef, useEffect, ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'  // <-- import Head di sini
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import Cookies from 'js-cookie'
import { AiOutlineRobot } from 'react-icons/ai'

interface MainLayoutProps {
  title?: string
  children: ReactNode
}

export default function MainLayout({ title = 'Dashboard', children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      Cookies.remove('token')
      router.push('/signin')
    } catch (error) {
      console.error('Logout gagal:', error)
    }
  }

  const pathSegments = router.pathname.split('/').filter(Boolean)

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Profile', href: '/dashboard/profile', icon: '👤' },
    // { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
    // { name: 'Data Cleansing ', href: '/dashboard/upload-excel', icon: '⚙️' },
    // { name: 'Image Generator', href: '/dashboard/image-generator', icon: '🖼️' },
    // { name: 'Describe Image', href: '/dashboard/describe', icon: '🔍' },
    // { name: 'Plans', href: '/dashboard/plans', icon: '📋' },
    { name: 'Logout', href: '#', icon: '🚪', onClick: handleLogout },
  ]

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex h-screen bg-[#0f172a] font-[Poppins] text-white">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#1e293b] border-r border-gray-700 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static md:flex-shrink-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-center h-16 border-b border-gray-700 space-x-2">
            <AiOutlineRobot className="text-yellow-400 w-6 h-6" />
            <h1 className="text-yellow-400 text-2xl font-bold">InfinityAI</h1>
          </div>

          <nav className="mt-10 px-6 space-y-2">
            {navItems.map(({ name, href, icon, onClick }) => (
              <a
                key={name}
                href={href}
                onClick={e => {
                  if (onClick) {
                    e.preventDefault()
                    onClick()
                  }
                }}
                className="flex items-center px-4 py-3 rounded-md hover:bg-yellow-400 hover:text-[#0f172a] transition cursor-pointer"
              >
                <span className="mr-3 text-lg">{icon}</span>
                <span className="font-semibold">{name}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Navbar */}
          <header className="flex items-center justify-between h-16 bg-[#1e293b] border-b border-gray-700 px-4 md:px-6">
            <button
              className="text-yellow-400 md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <h2 className="text-yellow-400 text-xl font-bold">{title}</h2>

            <div className="flex items-center space-x-4">
              {/* Ikon AI di navbar */}
              <AiOutlineRobot className="text-yellow-400 w-6 h-6" title="Powered by AI" />

              {/* User Menu */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="bg-yellow-400 text-[#0f172a] px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center"
                  aria-haspopup="true"
                  aria-expanded={userMenuOpen}
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
                        setUserMenuOpen(false)
                        handleLogout()
                      }}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-400 hover:text-[#0f172a]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Breadcrumb + Children */}
          <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-400 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:underline text-yellow-400">Home</Link>
              {pathSegments.map((segment, index) => {
                const href = '/' + pathSegments.slice(0, index + 1).join('/')
                const label = segment.charAt(0).toUpperCase() + segment.slice(1)
                return (
                  <span key={href} className="flex items-center space-x-2">
                    <span className="mx-1">/</span>
                    <Link href={href} className="hover:underline text-yellow-400">
                      {label}
                    </Link>
                  </span>
                )
              })}
            </nav>

            {children}
          </main>
        </div>
      </div>
    </>
  )
}
