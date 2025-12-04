import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/NavbarTema2'
import Footer from '../../components/FooterTema2'
import OttenVideoSection from '../../components/OttenVideoSection'
import BrandPilihanSection from '../../components/BrandPilihanSection2'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerData from "../../data/banner.json";
import Blogs from '../../components/Blogs'


export default function About() {
  const banners = bannerData.banners;
  return (
    <>
      <Head>
        <title>About | FNB TECH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* ============================= */}
      {/* HERO BANNER – DARK GREEN PREMIUM */}
      {/* ============================= */}
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

                <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-16">
                  <div className="max-w-xl space-y-6">
                    <p className="text-yellow-300 text-xs sm:text-sm tracking-widest font-semibold uppercase">
                      {item.tag}
                    </p>

                    <h1
                      className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />

                    <p className="text-gray-200 max-w-md text-sm sm:text-base">
                      {item.desc}
                    </p>

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

      <OttenVideoSection/>

      <BrandPilihanSection/>

      <Blogs/>



      <Footer />
    </>
  )
}
