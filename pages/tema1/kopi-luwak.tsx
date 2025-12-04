import Head from "next/head";
import Navbar from "../../components/NavbarTema2";
import Link from "next/link";
import Footer from "../../components/FooterTema2";

export default function KopiLuwak() {
  return (
    <>
      <Head>
        <title>Kopi Luwak – FNB TECH</title>
        <meta name="description" content="Premium Wild Kopi Luwak Coffee" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      </Head>

      <Navbar />

      {/* HERO – WHITE THEME */}
      <section className="relative w-full h-[420px] md:h-[600px] font-[Outfit] bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/aranoz_files/luwakbanner.png')",
          }}
        />

        {/* lighter gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

        <div className="relative z-10 h-full flex items-center px-10 md:px-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm tracking-widest font-semibold uppercase text-[#6f8650]">
              RARE & SPECIALTY COFFEE
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              What is <span className="text-[#6f8650]">Kopi Luwak</span>?
            </h1>

            <p className="text-gray-700 max-w-xl">
              Kopi Luwak is one of the rarest coffees in the world—naturally processed
              by wild Asian Palm Civets, producing a smooth, low-acidity, aromatic cup.
            </p>

            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition"
            >
              Shop Premium Kopi Luwak
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="w-full py-20 font-[Outfit] bg-white text-black">
        <div className="max-w-4xl mx-auto px-8 md:px-4 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wide">
            Kopi Luwak: The Coffee & The Legend
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Kopi Luwak is produced when wild civets consume ripe coffee cherries. 
            During digestion, natural enzymes break down the proteins responsible 
            for bitterness—resulting in a uniquely smooth and rich flavor profile.
          </p>

          <h3 className="text-2xl font-semibold text-[#6f8650] mt-6">
            The Natural Process
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Civets instinctively select only the ripest cherries, making the 
            resulting coffee naturally high quality. After the civet excretes 
            the beans, farmers carefully collect, wash, sun-dry, and roast them.
          </p>

          <img
            src="/aranoz_files/bijikopiluwak.png"
            className="rounded-xl shadow-md w-full my-6"
          />

          <h3 className="text-2xl font-semibold text-[#6f8650]">
            Tasting Notes
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Low acidity, smooth body</li>
            <li>Aromatic chocolate & caramel notes</li>
            <li>Clean earthy finish</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#6f8650]">
            Only Ethical, Wild-Sourced Coffee
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We strictly support ethical wild-sourced Kopi Luwak. No cages. 
            No forced feeding. Only sustainable, traceable harvests.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL – WHITE THEME */}
      <section className="py-20 bg-white text-gray-900 font-[Outfit] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://fnb.tech/wp-content/uploads/2025/09/Carlos-Fernandez.webp"
            className="w-full md:w-1/3 rounded-xl shadow-md"
          />

          <div className="md:w-2/3">
            <p className="text-sm font-semibold mb-2 text-[#6f8650]">
              TESTIMONIAL
            </p>

            <blockquote className="text-xl italic leading-relaxed text-gray-700">
              “FnB Tech’s Kopi Luwak was a game-changer on my restaurant’s premium menu.
              The complexity and smoothness impressed all my guests.”
            </blockquote>

            <p className="mt-4 font-semibold text-gray-900">
              — Carlos Fernandez, Chef & Restaurateur
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center text-gray-900 font-[Outfit]">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience True Luxury Coffee?</h3>

        <Link
          href="/products"
          className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition"
        >
          Browse All Products
        </Link>
      </section>

      <Footer />
    </>
  );
}
