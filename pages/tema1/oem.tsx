// Converted Next.js page from uploaded HTML
// Original HTML file: /mnt/data/10-OEM  Private Label.html

import Head from "next/head";
import Navbar from "../../components/NavbarTema2";
import Link from "next/link";
import Footer from "../../components/FooterTema2";

export default function OEMPrivateLabelPage() {
  return (
    <>
      <Head>
        <title>OEM / Private Label – FNB Tech</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />

      </Head>

      <Navbar />

        {/* HERO */}
        <section className="relative bg-gray-100 pt-20 sm:pt-28 md:pt-40 pb-16 sm:pb-24 md:pb-32 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200')] bg-cover bg-center opacity-25"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#000000] leading-tight break-words">
                OEM / Private Label Coffee
            </h1>

            <p className="mt-5 text-gray-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
                Build your own coffee brand with our professional OEM services: sourcing, roasting, packaging design, and ready-to-sell production.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                href="#form"
                className="px-8 py-3 bg-[#006E29] text-white font-semibold rounded-xl shadow hover:bg-[#006E29]/90 transition"
                >
                Start Your Brand
                </a>
                <a href="#" className="text-[#006E29] underline font-semibold">
                Download Catalogue
                </a>
            </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
            <img
                src="https://i.ebayimg.com/images/g/1GQAAOSwtfdoMEme/s-l1200.png"
                alt="Private Label Coffee Packaging"
                className="rounded-2xl shadow-xl w-52 sm:w-64 md:w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
            </div>
        </div>
        </section>


      {/* WHY OEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#000000]">Why OEM With FNB Tech?</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-xl text-[#000000] mb-3">Premium Sourcing</h3>
              <p className="text-gray-600">Specialty-grade beans dari origin terbaik Indonesia.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-xl text-[#000000] mb-3">Custom Roasting</h3>
              <p className="text-gray-600">Light, medium, dark — semua disesuaikan untuk brand Anda.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-xl text-[#000000] mb-3">Flexible MOQ</h3>
              <p className="text-gray-600">Mulai dari 50–100 bags untuk brand baru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OEM PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#000000]">OEM Process</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[1,2,3,4,5,6].map((step) => (
              <div key={step} className="bg-white p-8 rounded-2xl shadow text-left">
                <h3 className="text-xl font-bold text-[#000000]">{step}. {[
                    'Brand Consultation',
                    'Choose Origin & Blend',
                    'Sampling & Cupping',
                    'Packaging Design',
                    'Production & QC',
                    'Shipping'
                ][step-1]}</h3>
                <p className="mt-3 text-gray-600">{
                  [
                    'Discuss your needs, market positioning, and brand concept.',
                    'Choose single-origin beans or an exclusive blend.',
                    'You try the samples until you find the perfect profile.',
                    'Our design team will create packaging that fits your brand.',
                    'Production process with strict quality control.',
                    'Local and international shipping available.'
                  ][step-1]
                }</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
<section className="py-16 sm:py-20 text-center bg-[#006E29] text-white px-6">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
    Build Your Brand from Zero
  </h2>

  <p className="mt-4 text-white/90 max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
    We help you with sourcing, roasting, branding, all the way to market-ready production.
  </p>

  <a
    href="#form"
    className="mt-8 inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#006E29] font-bold rounded-xl shadow hover:opacity-90 transition transform hover:scale-105"
  >
    Consult Now
  </a>
</section>


      {/* FORM */}
      <section id="form" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#000000] mb-12">OEM Inquiry Form</h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input className="border p-3 rounded placeholder-gray-500" placeholder="Nama Bisnis" />
            <input className="border p-3 rounded placeholder-gray-500" placeholder="Email" />
            <input className="border p-3 rounded placeholder-gray-500" placeholder="Phone" />
            <input className="border p-3 rounded placeholder-gray-500" placeholder="Estimasi Jumlah" />

            <select className="border p-3 rounded md:col-span-2 text-gray-500">
              <option className="text-gray-500">Pilih Produk</option>
              <option className="text-gray-500">Roasted Coffee</option>
              <option className="text-gray-500">Green Beans</option>
              <option className="text-gray-500">Drip Coffee</option>
            </select>

            <textarea className="border p-3 rounded md:col-span-2 placeholder-gray-500" rows={5} placeholder="Catatan tambahan..."></textarea>

            <button className="bg-[#006E29] text-white py-3 rounded md:col-span-2 font-semibold hover:bg-[#006E29]/90">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}