import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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
        <meta name="description" content="Aranoz Tailwind Version" />
      </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      <Navbar />

      {/* Banner Section (Dynamic JSON + variable like blogs/products/etc) */}
      <section className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] font-[Outfit]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          className="w-full h-full"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">

                <div
                  className="absolute inset-0 w-full h-full bg-no-repeat bg-top md:bg-center bg-contain md:bg-cover"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>

                <div className="relative z-10 h-full flex items-center justify-start px-10 md:px-16">
                  <div className="px-6">
                    <div className="max-w-xl space-y-6">

                      <p className={`${item.tagColor} font-semibold tracking-wide`}>
                        {item.tag}
                      </p>

                      <h1
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0f172a]"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />

                      <p className="text-gray-700 max-w-md">{item.desc}</p>

                      <Link
                        href={item.buttonLink}
                        className={`inline-block px-6 py-3 rounded-full font-semibold transition ${item.buttonClass}`}
                      >
                        {item.buttonText}
                      </Link>

                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* VOLCANICA TEXT SECTION – NO BACKGROUND */}
      <section className="w-full py-16 md:py-24 text-center font-[Outfit]">

        <h4 className="text-xs md:text-sm tracking-[3px] text-green-500 font-semibold mb-3">
          FNBTECH COMPANY
        </h4>

        <h5 className="text-[11px] md:text-xs tracking-[3px] text-gray-500 uppercase mb-5">
          We are leaders in innovation
        </h5>

        <p className="text-xl md:text-3xl text-green-500 leading-relaxed max-w-3xl mx-auto px-6">
          Discover a world of flavor born from earth’s most powerful forces—
          crafted for your perfect cup.
        </p>

      </section>


      
      {/* Featured Category */}
      <section className="py-0  text-white font-[Outfit] w-full overflow-hidden">
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


      {/* Awesome Shop */}
      <section className="py-20  text-white font-[Outfit]">
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


      {/* Blog Section */}
      <section className="py-20  text-white font-[Outfit]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-400">
            Latest <span className="text-blue-400">Blog</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="bg-[#006E29]  border-white/10 rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full h-56 object-cover opacity-0 transition-opacity duration-700"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
              />

              <div className="p-5">
                <p className="text-yellow-300 text-sm mb-2">
                  {new Date(blog.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </p>

                <h3 className="text-lg font-bold mb-2 text-white">{blog.title}</h3>

                <p className="text-gray-300 text-sm mb-4">{blog.excerpt}</p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-yellow-300 font-semibold inline-flex items-center gap-1"
                >
                  Read More <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="px-6 py-3 bg-yellow-400 text-[#0f172a] font-semibold rounded-md hover:bg-yellow-300 transition inline-block"
          >
            View More
          </Link>
        </div>
      </section>

      {/* Weekly Sale */}
      <section className="py-20 bg-[#006E29] text-white font-[Outfit]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://down-id.img.susercontent.com/file/id-11134207-7rasa-m1m6ow1eyieu99"
              alt="Weekly Sale"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-snug mb-4">
              Weekly Sale on <br />
              <span className="text-yellow-400">60% Off All Products</span>
            </h2>

            <div className="grid grid-cols-4 gap-4 text-center mt-6">
              {["-2247", "13", "22", "14"].map((num, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-yellow-300">{num}</div>
                  <div className="text-gray-300">
                    {["Days", "Hours", "Minutes", "Seconds"][idx]}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-md">
              <div className="flex">
                <input
                  type="email"
                  placeholder="enter email address"
                  className="flex-1 px-4 py-3 border border-white/20 bg-white/5 text-white rounded-l-md focus:outline-none"
                />
                <button className="bg-yellow-400 text-[#0f172a] px-6 rounded-r-md font-semibold">
                  book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-80">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`/aranoz_files/client_logo_${i}.png`}
              alt="Client Logo"
              className="mx-auto"
            />
          ))}
        </div>
      </section>

      {/* Footer (UPDATED) */}
      <footer className="bg-[#006E29] text-white py-12 font-[Outfit]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">

            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Company</h4>
              <p className="text-gray-300 text-sm">4110 Tench Rd, Suite H</p>
              <p className="text-gray-300 text-sm">Suwanee, GA 30024</p>

              <div className="mt-4">
                <p className="text-gray-300 text-sm">877-454-7031</p>
                <p className="text-gray-300 text-sm mt-2">Pick-up Hours</p>
                <p className="text-gray-300 text-sm">8 AM - 4:30 PM</p>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Shop</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><Link href="#">Shop All</Link></li>
                <li><Link href="#">Gift Cards</Link></li>
                <li><Link href="#">Coffee Sample Packs</Link></li>
                <li><Link href="#">Coffee by Region</Link></li>
                <li><Link href="#">Coffee by Roast</Link></li>
                <li><Link href="#">Coffee by Specialty</Link></li>
                <li><Link href="#">Flavored Coffee</Link></li>
                <li><Link href="#">Costa Rica Coffee</Link></li>
                <li><Link href="#">Colombian Coffee</Link></li>
                <li><Link href="#">Ethiopian Coffee</Link></li>
                <li><Link href="#">Geisha Coffee</Link></li>
                <li><Link href="#">Guatemala Coffee</Link></li>
                <li><Link href="#">Sumatra Coffee</Link></li>
                <li><Link href="#">All Collections</Link></li>
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Information</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><Link href="#">Our Story</Link></li>
                <li><Link href="#">Brew Journal</Link></li>
                <li><Link href="#">Charity Support</Link></li>
                <li><Link href="#">Affiliate Program</Link></li>
                <li><Link href="#">Wholesale Coffee</Link></li>
                <li><Link href="#">Site Map</Link></li>
                <li><Link href="#">Customer Service</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Customer Reviews</Link></li>
                <li><Link href="#">Shipping Policy</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Return Policy</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Newsletter / Social (placeholder) */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Stay Connected</h4>
              <p className="text-gray-300 text-sm mb-4">Sign up for updates, exclusive offers, and new arrivals.</p>

              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none"
                />
                <button className="px-4 py-2 bg-yellow-400 text-[#0f172a] font-semibold rounded-md">Subscribe</button>
              </form>

              <div className="mt-6 text-gray-400 text-sm">Follow us on social media</div>
            </div>

          </div>

          <div className="pt-6 text-center text-gray-400">
            <p>© 2025 Aranoz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
