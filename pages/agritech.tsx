// Converted Next.js page from uploaded HTML
// Original HTML file path: /mnt/data/6-FNB AGRITECH PAGE.html

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AgritechPage() {
  return (
    <>
      <Head>
        <title>FNB Agritech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />

      </Head>

      {/* If you have a shared Navbar component, it will be used; otherwise the HTML navbar is included below */}
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-32 relative bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#006E29] leading-tight">
            FNB Agritech Innovation
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Smart farming, supply chain automation, and AI quality control to support sustainable agriculture.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#006E29] text-white font-semibold rounded-xl shadow hover:opacity-95">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* ABOUT AGRITECH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#006E29]">Agritech for the Future</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Teknologi modern untuk meningkatkan produktivitas, efisiensi, dan keberlanjutan pertanian melalui smart farming, distribusi otomatis, dan integrasi data.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Smart farming & IoT sensors</li>
              <li>✔ Realtime supply chain tracking</li>
              <li>✔ AI-based quality prediction</li>
              <li>✔ Sustainable production systems</li>
            </ul>
          </div>

          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-[#006E29]">Our Solutions</h3>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-[#006E29] mb-3">Smart Farming</h4>
              <p className="text-gray-600">IoT sensors, irrigation automation & crop monitoring tools.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-[#006E29] mb-3">AI Quality Control</h4>
              <p className="text-gray-600">AI-based grading for beans, fruits, and raw materials.</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-[#006E29] mb-3">Supply Chain</h4>
              <p className="text-gray-600">Realtime logistics, traceability & blockchain verification.</p>
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
              <p className="text-sm text-gray-600 mt-2">Moisture, temperature, soil health</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">AI & Machine Learning</h4>
              <p className="text-sm text-gray-600 mt-2">Crop prediction, quality grading</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">Blockchain</h4>
              <p className="text-sm text-gray-600 mt-2">Traceability & verification</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#006E29]">Data Cloud</h4>
              <p className="text-sm text-gray-600 mt-2">Centralized realtime data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
    <section className="py-24 text-center bg-[#ffffff] text-[#006E29]">
    <h3 className="text-4xl font-bold">Accelerate Your Agritech Transformation</h3>
    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Connecting farmers, producers, and F&B businesses in one smart ecosystem.
    </p>
    <button className="mt-8 px-10 py-4 bg-[#006E29] text-white font-bold rounded-xl shadow hover:opacity-95">
        Contact Us
    </button>
    </section>

      <Footer />
    </>
  );
}
