import Head from 'next/head'
// import Navbar from '../components/Navbar'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Link from 'next/link'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const token = await user.getIdToken()

      // Simpan token ke cookie (berlaku 1 hari)
      Cookies.set('token', token, { expires: 1 })

      router.push('/dashboard')
    } catch {
      // Hapus (err) untuk menghindari error eslint
      setError('Email atau password salah.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Masuk - InfinityAI</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />
      </Head>

      {/* <Navbar /> */}

      <main className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen flex items-center justify-center px-4 font-[Outfit] text-white">
        <div className="max-w-md w-full bg-white/10 rounded-xl p-10 shadow-lg border border-white/20">
          <h1 className="text-3xl font-extrabold mb-6 text-yellow-400 text-center">
            Masuk ke InfinityAI
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Alamat Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="nama@contoh.com"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 font-semibold">
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="********"
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-semibold">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold py-3 rounded-lg transition ${
                loading
                  ? 'bg-yellow-300 cursor-not-allowed text-gray-700'
                  : 'bg-yellow-400 hover:bg-yellow-500 text-[#0f172a]'
              }`}
            >
              {loading ? 'Sedang masuk...' : 'Masuk'}
            </button>
          </form>

          <div className="mt-4 flex justify-between text-gray-300 text-sm">
            <Link href="/forgot-password" className="text-yellow-400 hover:underline">
              Lupa kata sandi?
            </Link>
            <p>
              Belum punya akun?{' '}
              <Link href="/register" className="text-yellow-400 hover:underline">
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
