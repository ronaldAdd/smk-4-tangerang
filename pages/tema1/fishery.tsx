// Updated Fishery Page to match design style of kopi-luwak.tsx
import Head from "next/head";
import Navbar from "../../components/NavbarTema2";
import Link from "next/link";
import Footer from "../../components/FooterTema2";

export default function FisheryPage() {
  return (
    <>
      <Head>
        <title>FNB Fishery – Sustainable Aquaculture</title>
        <meta name="description" content="FNB Fishery — Modern aquaculture, IoT solutions, smart feeder, and sustainable seafood ecosystem." />
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
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c15]/95 via-[#0d1c15]/70 to-transparent" />

        <div className="relative z-10 h-full flex items-center px-10 md:px-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-green-300 text-sm tracking-widest font-semibold uppercase">
              SMART & SUSTAINABLE AQUACULTURE
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              FNB <span className="text-green-400">Fishery</span> Solutions
            </h1>

            <p className="text-gray-200 max-w-xl">
              Integrated IoT aquaculture, modern farming tools, and scalable seafood production for Indonesia.
            </p>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-green-400 text-[#0f172a] rounded-full font-semibold hover:bg-green-300 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* ABOUT */}
      {/* ============================= */}
      <section className="w-full py-20 font-[Outfit] bg-white text-black">
        <div className="max-w-4xl mx-auto px-8 md:px-4 space-y-8">
          <h2 className="text-3xl font-bold text-black tracking-wide">
            About FNB Fishery
          </h2>

          <p className="text-gray-700 leading-relaxed">
            FNB Fishery empowers shrimp, fish, and crab farmers with access to technology,
            modern equipment, and sustainable farming ecosystems.
          </p>

          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80"
            className="rounded-xl shadow-lg w-full my-6"
          />

          <p className="text-gray-700 leading-relaxed">
            Our mission is to create a transparent and efficient aquaculture ecosystem with
            the help of IoT monitoring, expert guidance, and scalable farming infrastructure.
          </p>
        </div>
      </section>


      {/* ============================= */}
      {/* WHAT WE DO */}
      {/* ============================= */}
      <section className="py-20 bg-gray-50 font-[Outfit]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <h3 className="text-3xl md:text-4xl font-bold text-[#006E29] text-center tracking-wide">
            What Does FNB Fishery Do?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[{
              title: "Inquiry & Supply Chain",
              desc: "Supplying premium seafood across domestic and global markets.",
              img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
            },{
              title: "Sustainability Monitoring",
              desc: "Tech-driven fish population tracking for responsible farming.",
              img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"
            },{
              title: "Partnership Ecosystem",
              desc: "Collaborating with farmers under strict quality + cold-chain standards.",
              img: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=800&q=80"
            }].map((card, i) => (
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl transition p-6">
                <img src={card.img} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h4 className="text-lg font-bold text-[#006E29]">{card.title}</h4>
                <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* APP FEATURES (MATCH STYLE) */}
      {/* ============================= */}
      <section className="py-20 bg-white font-[Outfit]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#006E29] tracking-wide">Fishery App Features</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Integrated IoT tools for smart, data-driven aquaculture operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[{
              title: "Smart Feeder",
              desc: "Automated IoT-based feeding for optimized harvest.",
              img: "https://fnb.tech/wp-content/uploads/2025/02/Feeder-dan-Solar-Guard-shadow-dan-tanpa-background.png"
            },{
              title: "Pond Monitoring",
              desc: "Real-time water quality tracking and alerts.",
              img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
            },{
              title: "Seeds & Supply",
              desc: "Curated suppliers for seeds, feeds, and farming materials.",
              img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80"
            }].map((card, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition text-left">
                <img src={card.img} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h4 className="text-lg font-bold text-[#006E29]">{card.title}</h4>
                <p className="mt-2 text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================= */}
      {/* CTA (Same style as kopi-luwak) */}
      {/* ============================= */}
      <section id="contact" className="py-16 text-center font-[Outfit] text-white bg-gradient-to-r from-[#021c2a] via-[#04344a] to-[#065d7a]">
      <h3 className="text-3xl font-bold mb-6 drop-shadow">Ready to Start Sustainable Aquaculture?</h3>


      <Link
      href="#"
      className="px-8 py-4 bg-blue-300 text-[#0f172a] font-semibold rounded-full hover:bg-blue-200 transition shadow-md"
      >
      Contact Our Team
      </Link>
      </section>
      

      <Footer />
    </>
  );
}
