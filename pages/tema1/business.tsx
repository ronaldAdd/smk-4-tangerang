import Head from "next/head";
import Navbar from "../../components/NavbarTema2";
import Link from "next/link";
import Footer from "../../components/FooterTema2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerData from "../../data/banner_business.json";

export default function Business() {
  const banners = bannerData.banners;

  return (
    <>
      <Head>
        <title>Business | FNB TECH</title>
        <meta
          name="description"
          content="FNB TECH Business Divisions - Coffee, Agritech, Fishery & Farm"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[450px] md:h-[600px] font-[Outfit] bg-[#0d1c15]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c15]/95 via-[#0d1c15]/60 to-transparent" />

                <div className="relative z-10 h-full flex items-center px-10 md:px-16">
                  <div className="max-w-xl space-y-6">
                    <p className="text-yellow-300 text-sm tracking-widest font-semibold uppercase">
                      {item.tag}
                    </p>

                    <h1
                      className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />

                    <p className="text-gray-200 max-w-md">{item.desc}</p>

                    <Link
                      href={item.buttonLink}
                      className="inline-block px-6 py-3 bg-yellow-400 text-[#0f172a] rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= CHAIRMAN GREETING ================= */}
      <section className="py-24 px-6 bg-white font-[Inter]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="/aranoz_files/people.png"
            className="w-full rounded-xl"
            alt="Chairman"
          />

          <div>
            <h2 className="text-4xl font-bold text-[#0d1c15] mb-6">Chairman Greeting</h2>

            <p className="text-[#0d1c15] leading-relaxed mb-6">
              As a sustainable company we take a practical approach to create a
              positive impact. We prioritize building a solid core business as the
              foundation for sustainable development. We support promising farmers
              and their teams in developing innovative products and improving
              productivity.
            </p>

            <p className="text-[#0d1c15] leading-relaxed mb-6">
              By enabling businesses to grow more sustainably and substantially,
              we collaborate to create focused strategies that generate
              sustainable value for society and the environment.
            </p>

            <h3 className="text-xl font-bold text-[#0d1c15]">Akbar Himawan Buchari</h3>
            <p className="text-[#0d1c15]">Chairman</p>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS DIVISIONS ================= */}
      <section className="py-20 bg-white px-6 font-[Inter]">
        <h2 className="text-4xl font-bold text-center text-[#0d1c15] mb-14">
          Business Divisions
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {[
            {
              title: "FNB Coffee",
              desc: "Specialty roasted coffee, green beans, and premium Kopi Luwak products.",
              image:
                "https://fnb.coffee/wp-content/uploads/2024/09/PEABERRY-NEW-e1748783837785.jpg",
              link: "/kopi-luwak",
            },
            {
              title: "FNB Agritech",
              desc: "Agriculture solutions, equipment, and digital farming systems.",
              image:
                "https://www.top10asia.org/wp-content/uploads/2025/03/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation.jpg",
              link: "/agritech",
            },
            {
              title: "FNB Fishery",
              desc: "Fishery equipment and smart aquaculture technology.",
              image: "https://unctad.org/sites/default/files/inline-images/aldc2017d2_400x400.jpg",
              link: "/fishery",
            },
            {
              title: "FNB Farm",
              desc: "Livestock solutions and smart farming support.",
              image: "https://fnb.tech/wp-content/uploads/2025/02/Farm-Land-for-Lease.jpg",
              link: "/farm",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <img src={item.image} className="rounded-lg mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-3">{item.desc}</p>
              <Link href={item.link} className="text-[#006E29] font-semibold">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OEM PRIVATE LABEL ================= */}
      <section className="py-20 px-6 bg-white font-[Inter]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0d1c15] mb-4">
              OEM / Private Label
            </h2>

            <p className="text-[#0d1c15] mb-4">
              Kami menyediakan layanan OEM dan Private Label untuk bisnis yang
              ingin memiliki brand kopi sendiri.
            </p>

            <p className="text-[#0d1c15] mb-6">
              Kapasitas produksi tinggi, kualitas konsisten, dan minimum order
              fleksibel.
            </p>

            <Link
              href="/oem-private-label"
              className="inline-block px-6 py-3 bg-[#006E29] text-white rounded-lg hover:bg-[#005522]"
            >
              Learn More
            </Link>
          </div>

          <img
            src="https://fnb.coffee/wp-content/uploads/2025/04/Private-Label-1.jpg"
            className="rounded-xl shadow"
          />
        </div>
      </section>

      {/* ================= WHOLESALE ================= */}
      <section className="py-20 bg-white px-6 font-[Inter]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://www.socially-responsible-coffee.com/wp-content/uploads/sites/549/2022/09/Coffee-bags-1440x900.jpg"
            className="rounded-xl shadow"
          />

          <div>
            <h2 className="text-4xl font-bold text-[#0d1c15] mb-4">
              Wholesale Green Coffee Beans
            </h2>

            <p className="text-[#0d1c15] mb-4">
              Kami menyediakan biji kopi hijau berkualitas tinggi untuk importir,
              roastery, dan distributor.
            </p>

            <p className="text-[#0d1c15] mb-6">
              Arabica, Robusta, Specialty Grade hingga Kopi Luwak.
            </p>

            <Link
              href="/wholesale-green-coffee"
              className="inline-block px-6 py-3 bg-[#006E29] text-white rounded-lg hover:bg-[#005522]"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}