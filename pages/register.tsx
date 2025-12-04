import Head from 'next/head'
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

      Cookies.set('token', token, { expires: 1 })

      await setDoc(doc(db, 'users_demo', user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date().toISOString(),
        role: 'user',
      })

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
        <title>Daftar - SMK Negeri 4 Tangerang</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 px-4 font-[Outfit]">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/20 text-white">

          <h1 className="text-3xl font-extrabold mb-2 text-yellow-400 text-center">
            Buat Akun SMK 4 Tangerang
          </h1>
          <p className="text-center text-gray-200 mb-8 text-sm tracking-wide">
            Daftar untuk melanjutkan
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Nama lengkap kamu"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
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
              <label htmlFor="password" className="block mb-2 font-semibold">Kata Sandi</label>
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
                className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="********"
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm font-semibold">{error}</p>
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
              {loading ? 'Sedang mendaftar...' : 'Daftar'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-300">
            Sudah punya akun?{' '}
            <Link href="/signin" className="text-yellow-300 hover:underline">
              Masuk di sini
            </Link>
          </p>

        </div>
      </main>
    </>
  )
}
