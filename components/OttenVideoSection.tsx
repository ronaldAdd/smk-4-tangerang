"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function OttenVideoSection() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const videos = [
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "790",
      products: 4,
      title: "Kenapa Kopi kamu ASEM banget?",
      caption: "Kenapa kopi kamu asem banget? #ottencoffee #coffee #arabica",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "1,5rb",
      products: 1,
      title: "LEMON TEA — Praktis, Icris, cuan fantastis!",
      caption: "Produk Baru! Ini Rahasia Lemon Tea biar cuan deras...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "3,1rb",
      products: 1,
      title: "Bedanya HARIO SWITCH vs DRIPPER V60 BIASA?",
      caption: "Ini dia bedanya Hario Switch sama dripper V60 biasa!",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,9rb",
      products: 5,
      title: "KENAPA KOPI GEISHA BISA MAHAL?",
      caption: "Kenapa Kopi Geisha bisa mahal? Ya singkatnya karena ini!",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },
    {
      thumb: "https://i.ytimg.com/vi/IsBnvK_VBWE/maxresdefault.jpg",
      views: "2,3rb",
      products: 1,
      title: "Kaum gabisa ngopi, sini kumpul!",
      caption: "Sebagai orang yang nggak bisa minum kopi...",
    },

  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-12 relative">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">FNB Video</h2>
        <a className="text-sm font-semibold text-[#6f8650] cursor-pointer">Lihat Semua</a>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        {/* EMBLA CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {videos.map((v, i) => (
              <div
                key={i}
                className="w-[240px] min-w-[240px] h-[420px] rounded-2xl bg-gray-200 relative overflow-hidden flex-shrink-0"
              >
                <img src={v.thumb} className="w-full h-full object-cover" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute top-3 left-3 bg-black/40 w-7 h-7 flex items-center justify-center rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4l12 6-12 6z" />
                  </svg>
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274
                           4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  {v.views}
                </div>

                {/* Title */}
                <div className="absolute bottom-16 left-4 right-4 text-white font-extrabold text-[20px] leading-tight drop-shadow-xl">
                  {v.title}
                </div>

                {/* Produk Badge */}
                <div className="absolute bottom-8 left-4 bg-[#6f8650] text-white text-xs px-3 py-1 rounded-full">
                  {v.products} Produk
                </div>

                {/* Caption */}
                <div className="absolute bottom-1 left-4 right-4 text-gray-200 text-xs leading-tight">
                  {v.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
