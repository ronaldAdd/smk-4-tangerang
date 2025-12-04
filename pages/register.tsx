import Head from 'next/head'
// import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import Cookies from 'js-cookie'
import Link from 'next/link'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Kata sandi dan konfirmasi harus sama!')
      return
    }

    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const token = await user.getIdToken()

      // Simpan token ke cookie (1 hari)
      Cookies.set('token', token, { expires: 1 })

      // Simpan data user ke Firestore (collection: users_demo)
      await setDoc(doc(db, 'users_demo', user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date().toISOString(),
        role: 'user', // default role
      })

      // Redirect ke dashboard
      router.replace('/dashboard')
    } catch (err: unknown) {
      const errorCode = (err as { code?: string }).code
      const errorMap: { [key: string]: string } = {
        'auth/email-already-in-use': 'Email sudah digunakan.',
        'auth/invalid-email': 'Format email tidak valid.',
        'auth/weak-password': 'Password terlalu lemah (minimal 6 karakter).',
      }
      setError(errorMap[errorCode ?? ''] || 'Terjadi kesalahan saat registrasi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Daftar - InfinityAI</title>
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
            Buat Akun Baru
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Nama lengkap kamu"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
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

            <div>
              <label htmlFor="confirmPassword" className="block mb-2 font-semibold">
                Konfirmasi Kata Sandi
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? 'Sedang daftar...' : 'Daftar'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-300">
            Sudah punya akun?{' '}
            <Link href="/signin" className="text-yellow-400 hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
