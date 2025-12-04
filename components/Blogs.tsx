'use client';
import Link from "next/link";
import blogsData from "../data/blogs.json";

export default function Blogs() {
  const blogs = blogsData.blogs;

  return (
    <section className="max-w-7xl mx-auto px-6 mt-12 relative font-[Outfit]">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Blog</h2>
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#6f8650] cursor-pointer"
        >
          Lihat Semua
        </Link>
      </div>

      {/* GRID BLOGS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* FEATURED BLOG — SAMA STYLE KARTU BESAR DI OTTEN VIDEO */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gray-200 sm:col-span-2 lg:col-span-3">
          <img
            src={blogs[0].image}
            className="w-full h-full object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>

          {/* Date */}
          <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
            {new Date(blogs[0].date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          {/* Title */}
          <div className="absolute bottom-16 left-6 right-6 text-white font-extrabold text-[26px] leading-tight">
            {blogs[0].title}
          </div>

          {/* Read More */}
          <Link href={`/blog/${blogs[0].slug}`}>
            <div className="absolute bottom-6 left-6 bg-[#6f8650] text-white text-xs px-4 py-2 rounded-full w-max cursor-pointer">
              Read More →
            </div>
          </Link>
        </div>

        {/* SMALL BLOG CARDS */}
        {blogs.slice(1, 4).map((blog, i) => (
          <div
            key={i}
            className="relative h-[350px] rounded-2xl bg-gray-200 overflow-hidden shadow-sm cursor-pointer"
          >
            <img src={blog.image} className="w-full h-full object-cover" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>

            {/* Date */}
            <div className="absolute top-3 left-3 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
              {new Date(blog.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>

            {/* Title */}
            <div className="absolute bottom-14 left-4 right-4 text-white font-bold text-[18px] leading-tight">
              {blog.title}
            </div>

            {/* Read More */}
            <Link href={`/blog/${blog.slug}`}>
              <div className="absolute bottom-5 left-4 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full w-max font-semibold">
                Read More →
              </div>
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}
