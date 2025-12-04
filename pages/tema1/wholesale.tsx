// Converted Next.js page from uploaded HTML
// Original HTML file: /mnt/data/9-Wholesale Green Coffee.html

import Head from "next/head";
import Navbar from "../../components/NavbarTema2";
import Link from "next/link";
import Footer from "../../components/FooterTema2";

export default function WholesaleGreenCoffeePage() {
  return (
    <>
      <Head>
        <title>Wholesale Green Coffee - FNB Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />

      </Head>

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-32 relative bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200')] bg-cover bg-center opacity-25"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#000000] leading-tight">
            Wholesale Green Coffee Beans
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Premium Arabica & Robusta beans sourced directly from Indonesian farmers,
            processed with international export standards.
          </p>

          <button className="mt-8 px-10 py-4 bg-[#006E29] text-white font-bold rounded-xl shadow hover:bg-[#006E29]/90">
            Request Price List
          </button>
        </div>
      </section>

      {/* ORIGIN SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#000000]">Sourced From the Finest Regions</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We work with farmers from Indonesia’s finest coffee regions to ensure premium quality in every batch.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Aceh Gayo</li>
              <li>✔ Toraja</li>
              <li>✔ Java Preanger</li>
              <li>✔ Bali Kintamani</li>
              <li>✔ Flores Bajawa</li>
            </ul>
          </div>
          <img src="https://fnb.coffee/wp-content/uploads/2024/12/Indonesia-Coffee-Production.webp" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* VARIETIES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-[#000000]">Varieties & Processing</h3>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
              <h4 className="text-xl font-semibold text-[#000000] mb-3">Arabica</h4>
              <p className="text-gray-600">Gayo, Toraja, Kintamani, Preanger, Flores</p>
              <p className="mt-3 text-sm text-gray-500">Washed / Natural / Honey</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
              <h4 className="text-xl font-semibold text-[#000000] mb-3">Robusta</h4>
              <p className="text-gray-600">Lampung, Temanggung, East Java</p>
              <p className="mt-3 text-sm text-gray-500">Washed / Natural</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
              <h4 className="text-xl font-semibold text-[#000000] mb-3">Special Process</h4>
              <p className="text-gray-600">Anaerobic, Honey Black, Wine Fermentation</p>
              <p className="mt-3 text-sm text-gray-500">Competition-grade lots</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-[#000000]">Quality Standards</h3>
          <p className="mt-4 text-gray-600">Each batch follows international export requirements.</p>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#000000]">Moisture</h4>
              <p className="text-sm text-gray-600 mt-2">11% ± 1%</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#000000]">Defects</h4>
              <p className="text-sm text-gray-600 mt-2">SNI / Export Grade</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#000000]">Screen Size</h4>
              <p className="text-sm text-gray-600 mt-2">16–18 Premium</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="text-lg font-semibold text-[#000000]">Traceability</h4>
              <p className="text-sm text-gray-600 mt-2">Farm → Processing → Export</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-[#000000]">Farm-to-Export Workflow</h3>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl text-left transition">
              <h4 className="text-xl font-bold text-[#000000]">1. Farm Collection</h4>
              <p className="mt-3 text-gray-600">Harvested directly from the finest farmers through strict selection.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl text-left transition">
              <h4 className="text-xl font-bold text-[#000000]">2. Processing</h4>
              <p className="mt-3 text-gray-600">Washed, natural, honey, dan special fermentation.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl text-left transition">
              <h4 className="text-xl font-bold text-[#000000]">3. Export Logistics</h4>
              <p className="mt-3 text-gray-600">Complete containers, shipping, and export documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-[#000000]">Packaging Options</h3>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="bg-gray-50 p-8 rounded-2xl shadow text-left">
              <h4 className="text-xl font-semibold text-[#000000]">60–69 kg Jute Bag</h4>
              <p className="text-gray-600 mt-2">Packaging standar internasional.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow text-left">
              <h4 className="text-xl font-semibold text-[#000000]">Vacuum Pack</h4>
              <p className="text-gray-600 mt-2">Untuk premium & competition-grade beans.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow text-left">
              <h4 className="text-xl font-semibold text-[#000000]">OEM Packaging</h4>
              <p className="text-gray-600 mt-2">Private label & brand custom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-[#ffffff] text-white">
        <h3 className="text-4xl text-black font-bold">Request Wholesale Price List</h3>
        <p className="mt-4 text-black text-lg">
          Available from 60 kg up to 20ft/40ft containers.
        </p>

        <button className="mt-8 px-10 py-4 bg-[#006E29] text-[#ffffff] font-bold rounded-xl shadow hover:bg-gray-100">
          Contact Sales
        </button>
      </section>

      <Footer />
    </>
  );
}