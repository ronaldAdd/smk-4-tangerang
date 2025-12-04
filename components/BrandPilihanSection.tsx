"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function BrandPilihanSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

const scrollPrev = useCallback(() => {
  if (emblaApi) emblaApi.scrollPrev();
}, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const brands = [
    {
      title: "Aeropress",
      produk: "26 Produk",
      badgeColor: "#1e73be",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/68e4948fef172561306156.jpg",
    },
    {
      title: "Anfim",
      produk: "2 Produk",
      badgeColor: "#ffb300",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Comandante",
      produk: "39 Produk",
      badgeColor: "#333",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/66de98e33a1fa577766699.jpg",
    },
    {
      title: "DeLonghi",
      produk: "63 Produk",
      badgeColor: "#004b84",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/66deab4288ea6133709464.jpg",
    },
    {
      title: "Mahlkonig",
      produk: "28 Produk",
      badgeColor: "#ff5722",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/68a82238a8ad2377301373.jpg",
    },
    {
      title: "Mazzer",
      produk: "18 Produk",
      badgeColor: "#058e44",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/66de98342fc09160479441.jpg",
    },
    {
      title: "Meraki",
      produk: "1 Produk",
      badgeColor: "#bdbdbd",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/68a82238a8ad2377301373.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },
    {
      title: "Monin",
      produk: "51 Produk",
      badgeColor: "#3e2723",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/67ce65f5643ca332177481.jpg",
    },

    // Tambah berapapun tetap bisa geser bro!
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-semibold text-gray-800">Brand Pilihan</h2>
        <a className="text-sm font-semibold text-[#6f8650] cursor-pointer">
          Lihat Semua
        </a>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Brand terbaik untuk memenuhi kebutuhan ngopi-mu
      </p>

      {/* MAIN WRAPPER */}
      <div className="flex gap-4 relative">

        {/* POSTER FIXED */}
        <div className="w-[360px] h-[420px] rounded-2xl overflow-hidden relative flex-shrink-0">
          <img
            src="https://d8g5mz6srwlcs.cloudfront.net/original/6819e78f663b3712197017.jpg"
            className="w-full h-full object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-8 left-6 text-white font-extrabold drop-shadow-lg">
            <p className="text-[34px] leading-tight">MESIN UNTUK KAFE</p>
            <p className="mt-1 text-[16px] font-semibold">MULAI DARI</p>
            <p className="-mt-1 text-[58px] font-extrabold">20</p>
            <p className="-mt-4 text-[22px] font-bold">JTAN</p>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white/60" />
          </div>
        </div>

        {/* BRAND SLIDER */}
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex gap-4">

            {/** PENTING: 1 SLIDE = 2 ITEM (atas & bawah) */}
            {Array.from({ length: Math.ceil(brands.length / 2) }).map((_, col) => {
              const top = brands[col * 2];
              const bottom = brands[col * 2 + 1];

              return (
                <div key={col} className="flex-shrink-0 w-[240px] flex flex-col gap-4">

                  {/* Top brand */}
                  {top && (
                    <div className="w-full h-[200px] rounded-xl overflow-hidden relative">
                      <img src={top.img} className="w-full h-full object-cover" />

                      <span
                        className="absolute top-3 left-3 text-white text-[11px] px-2 py-1 rounded font-semibold"
                        style={{ backgroundColor: top.badgeColor }}
                      >
                        {top.title}
                      </span>

                      <p className="absolute bottom-10 left-3 text-white text-lg font-semibold drop-shadow-lg">
                        {top.title}
                      </p>

                      <p className="absolute bottom-4 left-3 text-white text-xs drop-shadow-lg">
                        {top.produk}
                      </p>
                    </div>
                  )}

                  {/* Bottom brand */}
                  {bottom && (
                    <div className="w-full h-[200px] rounded-xl overflow-hidden relative">
                      <img src={bottom.img} className="w-full h-full object-cover" />

                      <span
                        className="absolute top-3 left-3 text-white text-[11px] px-2 py-1 rounded font-semibold"
                        style={{ backgroundColor: bottom.badgeColor }}
                      >
                        {bottom.title}
                      </span>

                      <p className="absolute bottom-10 left-3 text-white text-lg font-semibold drop-shadow-lg">
                        {bottom.title}
                      </p>

                      <p className="absolute bottom-4 left-3 text-white text-xs drop-shadow-lg">
                        {bottom.produk}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

{/* PREVIOUS BUTTON */}
        <button
        onClick={scrollPrev}
        className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            bg-white
            shadow-md
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            cursor-pointer
            z-10
        "
        >
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            strokeWidth='2'
            className='w-5 h-5 text-gray-600'
            viewBox='0 0 24 24'
            stroke='currentColor'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
        </svg>
        </button>



        {/* NEXT BUTTON */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="2"
            className="w-5 h-5 text-gray-600"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  );
}
