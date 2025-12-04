import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import categoriesData from "../data/categories.json";
import productsData from "../data/products.json";
import blogsData from "../data/blogs.json";
import bannerData from "../data/banner.json";

export default function Home() {
  const categories = categoriesData.categories;
  const products = productsData.products;
  const blogs = blogsData.blogs;
  const banners = bannerData.banners;

  return (
    <>
      <Head>
        <title>FNB TECH</title>
        <meta name="description" content="Premium Coffee & Equipment" />
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

      {/* ============================= */}
      {/* VOLCANICA TEXT SECTION */}
      {/* ============================= */}
      <section className="w-full py-20 text-center font-[Outfit] bg-[#ffffff]">
        <h4 className="text-xs md:text-sm tracking-[4px] text-yellow-400 font-semibold mb-3">
          VOLCANICA COFFEE COMPANY
        </h4>

        <h5 className="text-[11px] md:text-xs tracking-[3px] text-gray-400 uppercase mb-6">
          Specialty Coffee
        </h5>

        <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-6">
          Discover a world of flavor born from earth’s most powerful forces—crafted
          for your perfect cup.
        </p>
      </section>

      {/* ============================= */}
      {/* FEATURED CATEGORY – CINEMATIC */}
      {/* ============================= */}
      <section className="py-0  text-white font-[Outfit] bg-[#ffffff] w-full overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
          {/* <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Featured Category
            </h2>
          </div> */}

          {/* SLIDER */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {categories.map((item, i) => (
              <SwiperSlide key={i}>
                <Link
                  href="#"
                  className="group relative w-full h-[520px] rounded-xl overflow-hidden block"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* TEXT */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-10">
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {item.name}
                    </h3>

                    <button
                      className="mt-4 px-6 py-2 bg-white/20 border border-white/30 
                      text-white text-sm rounded-md backdrop-blur-sm 
                      group-hover:bg-white/30 transition"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ============================= */}
      {/* AWESOME SHOP – FULL WIDTH GRID */}
      {/* ============================= */}
      <section className="py-20  text-white font-[Outfit] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-400">
            Awesome <span className="text-blue-400">shop</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={index}
                className="bg-[#006E29] rounded-lg shadow-sm overflow-hidden border border-white/10"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-auto opacity-0 transition-opacity duration-700"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                />

                <div className="p-4">
                  <h4 className="font-medium text-white">{product.name}</h4>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-yellow-300">
                      ${product.price}
                    </span>

                    <Link href="#" className="text-white">
                      + add to cart <i className="ti-heart"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW MORE BUTTON */}
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="px-6 py-3 bg-yellow-400 text-[#0f172a] font-semibold rounded-md hover:bg-yellow-300 transition inline-block"
            >
              View More
            </Link>
          </div>
        </div>
      </section>



      {/* ============================= */}
      {/* BLOG – MAGAZINE PREMIUM */}
      {/* ============================= */}
      <section className="py-20 bg-[#ffffff] text-white font-[Outfit]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400">Latest Blog</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-3 relative rounded-xl overflow-hidden group">
            <img
              src={blogs[0].image}
              className="w-full h-[500px] object-cover transition group-hover:scale-105 duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-xl">
              <p className="text-yellow-300 text-sm mb-2">
                {new Date(blogs[0].date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <h3 className="text-4xl font-bold leading-tight mb-4">
                {blogs[0].title}
              </h3>

              <Link
                href={`/blog/${blogs[0].slug}`}
                className="text-yellow-300 font-semibold hover:text-yellow-200"
              >
                Read More →
              </Link>
            </div>
          </div>

          {blogs.slice(1, 4).map((blog, index) => (
            <div
              key={index}
              className="bg-[#0d1c15] border border-white/10 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={blog.image} className="w-full h-56 object-cover" />

              <div className="p-6">
                <p className="text-yellow-300 text-sm mb-2">
                  {new Date(blog.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>

                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-yellow-300 font-semibold hover:text-yellow-200"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* FOOTER – PREMIUM DARK GREEN */}
      <Footer />

    </>
  );
}

