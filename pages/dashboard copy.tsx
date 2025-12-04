// dashboard.tsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard — SMK Negeri 4 Tangerang</title>
        <meta
          name="description"
          content="Portal dashboard siswa & guru SMK Negeri 4 Tangerang. Informasi akademik, nilai, jadwal, presensi, kegiatan, dan layanan digital lainnya."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      {/* HERO */}
      <header className="relative pt-40 pb-32 bg-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />

        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Dashboard SMK Negeri 4 Tangerang
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Akses cepat untuk informasi akademik, kegiatan sekolah, dan layanan digital dalam satu portal terpadu.
          </p>

          <button className="mt-10 px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition">
            Masuk ke Portal
          </button>
        </div>
      </header>

      {/* ABOUT DASHBOARD */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-blue-700">Tentang Dashboard Sekolah</h2>
          <p className="mt-6 text-gray-700 text-lg">
            Dashboard ini dirancang untuk memudahkan siswa dan guru mengakses seluruh informasi penting secara cepat dan efisien.
          </p>
          <p className="mt-4 text-gray-600">
            Mulai dari absensi, jadwal pelajaran, nilai semester, hingga pengumuman terbaru — semuanya tersedia dalam satu tempat.
          </p>
        </div>
      </section>

      {/* FITUR DASHBOARD */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <h3 className="text-center text-4xl font-bold text-blue-700">Fitur Utama Dashboard</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-700">Jadwal Pelajaran</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Lihat jadwal harian dan mingguan secara real-time sesuai kelas & jurusan kamu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-700">Nilai & Rapor</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Akses nilai tugas, ulangan, UTS, UAS, hingga rapor digital.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-700">Presensi</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Pantau kehadiran siswa secara otomatis dan aman.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-700">Pengumuman</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Informasi terbaru seperti agenda sekolah, event, dan ujian bisa dilihat cepat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-700">E-Learning</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Akses materi pembelajaran dan tugas dari guru masing-masing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-blue-700">Profile Siswa</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Kelola data pribadi, nomor induk siswa (NIS), kelas, dan jurusan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APP SECTION (MIRIP FISHERY APP) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold text-blue-700">Aplikasi SMK 4 Digital</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Semua fitur tersedia dalam aplikasi digital yang mudah digunakan oleh siswa, guru, dan orang tua.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-lg font-bold text-blue-700">E-Absensi</h4>
              <p className="mt-2 text-gray-600">
                Sistem absensi real-time yang terintegrasi dengan kelas dan wali kelas.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-lg font-bold text-blue-700">E-Library</h4>
              <p className="mt-2 text-gray-600">
                Akses buku digital, modul, dan referensi belajar kapan saja.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-lg font-bold text-blue-700">E-PPDB</h4>
              <p className="mt-2 text-gray-600">
                Pendaftaran siswa baru mudah dan dapat dilakukan secara online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE (MIRIP SMART FEEDER) */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-700">Dashboard Modern & Terintegrasi</h3>
            <p className="mt-4 text-gray-700">
              Dirancang untuk mempercepat pengelolaan data sekolah, dashboard ini memberikan pengalaman belajar digital yang lebih mudah dan efisien.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* SOLUTIONS — INFO SEKOLAH */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h3 className="text-4xl font-bold text-blue-700">Solusi Digital untuk Sekolah Modern</h3>

          <div className="space-y-6 text-gray-700">
            <p>
              SMK Negeri 4 Tangerang terus berinovasi dengan mendigitalisasi sistem akademik agar proses administrasi menjadi lebih cepat dan transparan.
            </p>

            <p>
              Dengan dukungan teknologi dan sistem informasi yang terintegrasi, seluruh proses belajar mengajar dapat dilakukan dengan lebih efisien.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-yellow-400 text-center px-6"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
          Ayo Bergabung Menjadi Bagian Dari SMK Negeri 4 Tangerang
        </h3>

        <button className="mt-8 px-6 sm:px-10 py-4 bg-blue-900 text-white text-sm sm:text-base font-bold rounded-xl hover:bg-blue-800 transition">
          Hubungi Kami
        </button>
      </section>

      <Footer />
    </>
  );
}
