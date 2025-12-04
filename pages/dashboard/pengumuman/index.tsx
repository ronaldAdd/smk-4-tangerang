import Head from "next/head";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";

// --- SIDEBAR ---
function Sidebar() {
  return (
    <aside className="bg-white shadow-lg w-64 h-full fixed left-0 top-0 pt-20 p-5 hidden md:block z-40">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Menu Admin</h2>
      <nav className="flex flex-col gap-3 text-gray-700">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📊 Dashboard
        </Link>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          🧑‍🎓 Data Siswa
        </button>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📚 Jadwal
        </button>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          📝 Presensi
        </button>

        {/* HALAMAN INI */}
        <Link
          href="/dashboard/pengumuman"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 bg-gray-100"
        >
          📢 Pengumuman
        </Link>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          ⚙️ Pengaturan
        </button>
      </nav>
    </aside>
  );
}

export default function PengumumanPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadDummy() {
      const res = await fetch("/dummy-pengumuman.json");
      const json = await res.json();
      setData(json);
    }
    loadDummy();
  }, []);

  return (
    <>
      <Head>
        <title>Pengumuman — SMK Negeri 4 Tangerang</title>
      </Head>

      <Navbar />
      <Sidebar />

      <div className="md:pl-64">
        {/* HERO */}
        <header className="relative pt-36 pb-20 bg-blue-900 text-center text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />

          <div className="relative max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
              Pengumuman Terbaru
            </h1>
            <p className="mt-4 text-gray-200 text-lg">
              Informasi resmi dari sekolah untuk siswa, guru dan orang tua.
            </p>
          </div>
        </header>

        {/* LIST PENGUMUMAN */}
        <main className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid gap-6">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-blue-800">
                  {item.judul}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.tanggal}</p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {item.isi}
                </p>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
