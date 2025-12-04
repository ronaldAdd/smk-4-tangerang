import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function KopiLuwak() {
  return (
    <>
      <Head>
        <title>Kopi Luwak – FNB TECH</title>
        <meta name="description" content="Premium Wild Kopi Luwak Coffee" />
      </Head>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative w-full h-[420px] md:h-[600px] font-[Outfit] bg-[#0d1c15]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/aranoz_files/luwakbanner.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c15]/95 via-[#0d1c15]/60 to-transparent" />

        <div className="relative z-10 h-full flex items-center px-10 md:px-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-yellow-300 text-sm tracking-widest font-semibold uppercase">
              RARE & SPECIALTY COFFEE
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              What is <span className="text-yellow-400">Kopi Luwak</span>?
            </h1>

            <p className="text-gray-200 max-w-xl">
              Kopi Luwak is one of the rarest coffees in the world—naturally processed
              by wild Asian Palm Civets, producing a smooth, low-acidity, aromatic cup.
            </p>

            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-yellow-400 text-[#0f172a] rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Shop Premium Kopi Luwak
            </Link>
          </div>
        </div>
      </section>

      

      {/* ============================= */}
      {/* ARTICLE SECTION */}
      {/* ============================= */}
<section className="w-full py-20 font-[Outfit] bg-white text-black">
  <div className="max-w-4xl mx-auto px-8 md:px-4 space-y-8">

    <h2 className="text-3xl font-bold text-black tracking-wide">
      Kopi Luwak: The Coffee & The Legend
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Kopi Luwak is produced when wild civets consume ripe coffee cherries. 
      During digestion, natural enzymes break down the proteins responsible 
      for bitterness—resulting in a uniquely smooth and rich flavor profile.
    </p>

    <h3 className="text-2xl font-semibold text-[#006E29] mt-6">
      The Natural Process
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Civets instinctively select only the ripest cherries, making the 
      resulting coffee naturally high quality. After the civet excretes 
      the beans, farmers carefully collect, wash, sun-dry, and roast them.
    </p>

    <img
      src="/aranoz_files/bijikopiluwak.png"
      className="rounded-xl shadow-lg w-full my-6"
    />

    <h3 className="text-2xl font-semibold text-[#006E29]">
      Tasting Notes
    </h3>
    <ul className="list-disc ml-6 text-gray-700 space-y-1">
      <li>Low acidity, smooth body</li>
      <li>Aromatic chocolate & caramel notes</li>
      <li>Clean earthy finish</li>
    </ul>

    <h3 className="text-2xl font-semibold text-[#006E29]">
      Only Ethical, Wild-Sourced Coffee
    </h3>
    <p className="text-gray-700 leading-relaxed">
      We strictly support ethical wild-sourced Kopi Luwak. No cages. 
      No forced feeding. Only sustainable, traceable harvests.
    </p>

  </div>
</section>

      {/* ============================= */}
      {/* TESTIMONIAL */}
      {/* ============================= */}
      <section className="py-20 bg-[#006E29] text-white font-[Outfit]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://fnb.tech/wp-content/uploads/2025/09/Carlos-Fernandez.webp"
            className="w-full md:w-1/3 rounded-xl shadow-lg"
          />

          <div className="md:w-2/3">
            <p className="text-yellow-300 text-sm font-semibold mb-2">TESTIMONIAL</p>

            <blockquote className="text-xl italic leading-relaxed">
              “FnB Tech’s Kopi Luwak was a game-changer on my restaurant’s premium menu.
              The complexity and smoothness impressed all my guests.”
            </blockquote>

            <p className="mt-4 font-semibold">— Carlos Fernandez, Chef & Restaurateur</p>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-16 text-center text-black font-[Outfit]">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience True Luxury Coffee?</h3>

        <Link
          href="/products"
          className="px-8 py-4 bg-yellow-400 text-[#0f172a] font-semibold rounded-full hover:bg-yellow-300 transition"
        >
          Browse All Products
        </Link>
      </section>

      {/* ============================= */}
      {/* FOOTER SIMPLE (SAMA FORMAT UTAMA) */}
      {/* ============================= */}
      <Footer/>
    </>
  );
}
