import Head from 'next/head'
// import Navbar from '../components/Navbar'
import { useState } from 'react'
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementasi logika reset password di sini
    alert(`Link reset password telah dikirim ke: ${email}`)
  }

  return (
    <>
      <Head>
        <title>Lupa Password - InfinityAI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <Navbar /> */}

      <main className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen flex items-center justify-center px-4 font-[Outfit] text-white">
        <div className="max-w-md w-full bg-white/10 rounded-xl p-10 shadow-lg border border-white/20">
          <h1 className="text-3xl font-extrabold mb-6 text-yellow-400 text-center">Lupa Kata Sandi</h1>
          <p className="text-center text-gray-300 mb-6">
            Masukkan email kamu, kami akan kirimkan link untuk mereset kata sandi.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-[#0f172a] font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Kirim Link Reset
            </button>
          </form>

          <p className="mt-6 text-center text-gray-300">
            Sudah ingat kata sandi?{' '}
            <Link href="/signin" className="text-yellow-400 hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
