import Link from "next/link";

export default function Custom404() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white font-[Outfit] px-6">

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Code + Text */}
      <h1 className="text-7xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-lg">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Halaman Tidak Ditemukan
      </h2>

      <p className="mt-3 text-gray-300 text-center max-w-md leading-relaxed">
        Maaf, halaman yang kamu cari tidak tersedia atau mungkin telah dipindahkan.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        Kembali ke Beranda
      </Link>

      {/* Decorative element */}
      <div className="mt-12 opacity-30">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          className="animate-pulse"
        >
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="4" />
          <path
            d="M70 120 L130 80"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M130 120 L70 80"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
