import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16 font-[Outfit] mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* School Info */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            SMK NEGERI 4 TANGERANG
          </h4>

          <p className="text-gray-300 text-sm leading-relaxed">
            Jl. Veteran No. 1A, Kota Tangerang
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Banten - Indonesia
          </p>

          <div className="mt-4 text-gray-300 text-sm leading-relaxed">
            <p>(021) - XXXX XXXX</p>
            <p className="mt-2 font-medium">Jam Operasional</p>
            <p>07.00 - 15.00 WIB</p>
          </div>
        </div>

        {/* Jurusan / Program */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            Program Keahlian
          </h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#">Rekayasa Perangkat Lunak (RPL)</Link></li>
            <li><Link href="#">Teknik Komputer & Jaringan (TKJ)</Link></li>
            <li><Link href="#">Desain Komunikasi Visual (DKV)</Link></li>
            <li><Link href="#">Akuntansi & Keuangan</Link></li>
            <li><Link href="#">Otomatisasi Tata Kelola Perkantoran</Link></li>
          </ul>
        </div>

        {/* Informasi Sekolah */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            Informasi
          </h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#">Profil Sekolah</Link></li>
            <li><Link href="#">Visi & Misi</Link></li>
            <li><Link href="#">Prestasi Siswa</Link></li>
            <li><Link href="#">Kegiatan Sekolah</Link></li>
            <li><Link href="#">PPDB</Link></li>
            <li><Link href="#">Kontak</Link></li>
          </ul>
        </div>

        {/* Newsletter / Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            Tetap Terhubung
          </h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Dapatkan informasi terbaru mengenai kegiatan & pengumuman sekolah.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none"
            />

            <button className="w-full sm:w-auto px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </form>

          <div className="flex items-center gap-4 mt-4 text-gray-300">
            <Link href="#" className="hover:text-yellow-400">Instagram</Link>
            <Link href="#" className="hover:text-yellow-400">Facebook</Link>
            <Link href="#" className="hover:text-yellow-400">YouTube</Link>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="text-center text-gray-400 text-sm mt-12 px-6">
        © 2025 SMK NEGERI 4 TANGERANG. All rights reserved.
      </div>
    </footer>
  );
}
