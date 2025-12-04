// Converted Next.js page from uploaded HTML
// Original HTML file: /mnt/data/8-Farm.html

import Head from "next/head";
import Navbar from "../../components/NavbarTema2";
import Link from "next/link";
import Footer from "../../components/FooterTema2";

export default function FarmPage() {
  return (
    <>
      <Head>
        <title>FNB Farm</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      </Head>

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-32 relative bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200')] bg-cover bg-center opacity-25"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#006E29] leading-tight">
            Smart & Sustainable Farming Ecosystem
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Modern technology designed to increase farming efficiency through IoT, smart nutrition, and automated monitoring systems.
          </p>

          <button className="mt-8 px-8 py-3 bg-[#006E29] text-white font-semibold rounded-xl shadow hover:bg-[#006E29]/90">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* ABOUT FARM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-3xl font-bold text-[#006E29]">Transforming Farm & Livestock Industry</h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              FNB Farm delivers an integrated technology solution for cattle, goat, poultry, and other modern livestock operations. With IoT sensors, automated nutrition management, and AI-driven analysis, productivity can be significantly improved.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ IoT livestock monitoring (temperature, movement, growth)</li>
              <li>✔ Smart feeding & nutrition optimization</li>
              <li>✔ AI-based health prediction</li>
              <li>✔ Biosecurity & farm hygiene tracking</li>
            </ul>
          </div>

          <img
            src="https://media.licdn.com/dms/image/v2/C5612AQEpl_p33gX5ig/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1653326753811?e=2147483647&v=beta&t=bAubCcNf1lEndHXsOOIxY-pZN_exaD3Ol-oeaIREfq4"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-bold text-[#006E29]">Livestock Solutions</h3>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
              <h4 className="text-xl font-semibold text-[#006E29] mb-3">Smart Cage Monitoring</h4>
              <p className="text-gray-600">Real-time sensors for detecting temperature, humidity, and overall livestock housing conditions.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
              <h4 className="text-xl font-semibold text-[#006E29] mb-3">Automated Feeding System</h4>
              <p className="text-gray-600">Automated feeding with nutrition tailored to livestock needs.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
              <h4 className="text-xl font-semibold text-[#006E29] mb-3">Livestock Health AI</h4>
              <p className="text-gray-600">AI analysis based on feeding patterns and livestock behavior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <img
            src="https://paxandbeneficia.com/cdn/shop/articles/ripe-coffee-beans-young-man-working.webp?v=1693506755"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold text-[#006E29]">Smart Nutrition & Feed</h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The smart nutrition system ensures each animal receives the best feed composition for optimal growth, long-term health, and cost efficiency.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Nutrient optimization</li>
              <li>✔ Live feed consumption tracking</li>
              <li>✔ Growth cycle automation</li>
              <li>✔ Predictive feed cost planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BIOSECURITY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-bold text-[#006E29]">Biosecurity & Farm Hygiene</h3>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div className="bg-white p-8 rounded-2xl shadow text-left">
              <h4 className="text-lg font-semibold text-[#006E29]">Disease Prevention</h4>
              <p className="text-gray-600 mt-2">Deteksi potensi penyakit lebih dini dengan monitoring otomatis.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-left">
              <h4 className="text-lg font-semibold text-[#006E29]">Waste & Hygiene Tracking</h4>
              <p className="text-gray-600 mt-2">Kebersihan kandang dipantau via sensor & alert otomatis.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow text-left">
              <h4 className="text-lg font-semibold text-[#006E29]">Farm Entry Control</h4>
              <p className="text-gray-600 mt-2">Akses peternakan dikontrol untuk menjaga standar biosecurity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-[#006E29]">Technology Stack</h3>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">IoT Sensors</h4>
              <p className="text-sm text-gray-600 mt-2">Realtime livestock monitoring</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">AI Engine</h4>
              <p className="text-sm text-gray-600 mt-2">Predictive health & growth</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">Smart Automation</h4>
              <p className="text-sm text-gray-600 mt-2">Feeding & environment control</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">Cloud Dashboard</h4>
              <p className="text-sm text-gray-600 mt-2">Farm analytics</p>
            </div>
          </div>
        </div>
      </section>

    {/* CTA */}
    <section className="py-24 text-center bg-white text-black px-6">
    <h3 className="text-3xl md:text-4xl font-bold leading-snug">
        Upgrade Your Farm Management
    </h3>

    <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
        Nutrition, health, and automated monitoring — all managed in one platform.
    </p>

    <button className="mt-8 px-8 md:px-10 py-4 bg-black text-white font-bold rounded-xl shadow hover:bg-gray-800 transition transform hover:scale-105">
        Get Started
    </button>
    </section>

      <Footer />
    </>
  );
}