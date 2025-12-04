import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      alert(`Link reset password telah dikirim ke: ${email}`)
      setLoading(false)
    }, 1200)
  }

  return (
    <>
      <Head>
        <title>Lupa Password - SMK Negeri 4 Tangerang</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 px-4 font-[Outfit]">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/20 text-white">

          <h1 className="text-3xl font-extrabold mb-2 text-yellow-400 text-center">
            Reset Kata Sandi
          </h1>
          <p className="text-center text-gray-200 mb-8 text-sm tracking-wide">
            Masukkan email untuk menerima link reset password
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

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold py-3 rounded-lg transition ${
                loading
                  ? 'bg-yellow-300 cursor-not-allowed text-gray-700'
                  : 'bg-yellow-400 hover:bg-yellow-500 text-[#0f172a]'
              }`}
            >
              {loading ? 'Mengirim...' : 'Kirim Link Reset'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-300 text-sm">
            Sudah ingat kata sandi?{' '}
            <Link href="/signin" className="text-yellow-300 hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
