import Head from 'next/head'
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
      Cookies.set('token', token, { expires: 1 })

      router.push('/dashboard')
    } catch {
      setError('Email atau password salah.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Login - SMK Negeri 4 Tangerang</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 px-4 font-[Outfit]">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/20 text-white">
          
          <h1 className="text-3xl font-extrabold mb-2 text-yellow-400 text-center">
            SMK NEGERI 4 TANGERANG
          </h1>
          <p className="text-center text-gray-200 mb-8 text-sm tracking-wide">
            Silakan masuk untuk melanjutkan
          </p>

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
                className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="********"
                disabled={loading}
              />
            </div>

            {error && <p className="text-red-400 text-sm font-semibold">{error}</p>}

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

          <div className="mt-5 flex justify-between text-gray-300 text-sm">
            <Link href="/forgot-password" className="text-yellow-300 hover:underline">
              Lupa kata sandi?
            </Link>

            <p>
              Belum punya akun?{' '}
              <Link href="/register" className="text-yellow-300 hover:underline">
                Daftar di sini
              </Link>
            </p>
          </div>

        </div>
      </main>
    </>
  )
}
