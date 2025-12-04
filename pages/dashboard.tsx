import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- SIDEBAR ---
function Sidebar() {
  return (
    <aside className="bg-white shadow-lg w-64 h-full fixed left-0 top-0 pt-20 p-5 hidden md:block z-40">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Menu Admin</h2>
      <nav className="flex flex-col gap-3 text-gray-700">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📊 Dashboard
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          🧑‍🎓 Data Siswa
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📚 Jadwal
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📝 Presensi
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📢 Pengumuman
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          ⚙️ Pengaturan
        </button>
      </nav>
    </aside>
  );
}

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard — SMK Negeri 4 Tangerang</title>
        <meta
          name="description"
          content="Portal dashboard siswa & guru SMK Negeri 4 Tangerang. Informasi akademik, nilai, jadwal, presensi, kegiatan, dan layanan digital."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Sidebar />

      <div className="md:pl-64"> {/* SHIFT CONTENT KETIKA SIDEBAR MUNCUL */}

        {/* HERO */}
        <header className="relative pt-36 pb-24 bg-blue-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />

          <div className="relative max-w-6xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Dashboard SMK Negeri 4 Tangerang
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Sistem Informasi Akademik Terintegrasi — Cepat, Modern, dan Mudah Digunakan.
            </p>
          </div>
        </header>

        {/* GRID CARDS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
              Menu Dashboard
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Jadwal Pelajaran", icon: "📘" },
                { title: "Nilai & Rapor", icon: "📊" },
                { title: "Presensi", icon: "📝" },
                { title: "Pengumuman", icon: "📢" },
                { title: "E-Learning", icon: "💻" },
                { title: "Profile Siswa", icon: "🧑" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer border border-gray-100"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-blue-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">Klik untuk membuka</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-800">Informasi Sekolah</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Dashboard ini memudahkan siswa, guru, dan orang tua mengakses data akademik
                seperti jadwal pelajaran, nilai, absensi, serta informasi terbaru dari sekolah.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-yellow-400 text-center px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
            Tetap Terhubung Dengan Informasi Terbaru SMK Negeri 4 Tangerang
          </h3>
          <button className="mt-6 px-8 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition">
            Lihat Pengumuman
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
}