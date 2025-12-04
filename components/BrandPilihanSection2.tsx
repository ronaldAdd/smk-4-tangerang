"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function BrandPilihanSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const bannerData = [
    {
      title: "MESIN UNTUK KAFE",
      desc: "MULAI DARI",
      harga: "20",
      sub: "JTAN",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/6819e78f663b3712197017.jpg",
    },
    {
      title: "ROASTER TERBAIK",
      desc: "DISKON HINGGA",
      harga: "40",
      sub: "%",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/66de98342fc09160479441.jpg",
    },
    {
      title: "KAPASITAS BESAR",
      desc: "MULAI DARI",
      harga: "10",
      sub: "JTAN",
      img: "https://d8g5mz6srwlcs.cloudfront.net/original/66deab4288ea6133709464.jpg",
    },
  ];

  const [emblaBannerRef, emblaBannerApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [bannerIndex, setBannerIndex] = useState(0);
  const [bannerSnaps, setBannerSnaps] = useState([]);

  const onBannerSelect = useCallback(() => {
    if (!emblaBannerApi) return;
    setBannerIndex(emblaBannerApi.selectedScrollSnap());
  }, [emblaBannerApi]);

  useEffect(() => {
    if (!emblaBannerApi) return;
    setBannerSnaps(emblaBannerApi.scrollSnapList());
    emblaBannerApi.on("select", onBannerSelect);
    onBannerSelect();
  }, [emblaBannerApi, onBannerSelect]);

  const goToBanner = (i: number) => emblaBannerApi?.scrollTo(i);

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
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Brand Pilihan
        </h2>
        <a className="text-xs sm:text-sm font-semibold text-[#6f8650] cursor-pointer">
          Lihat Semua
        </a>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 mb-6">
        Brand terbaik untuk memenuhi kebutuhan ngopi-mu
      </p>

      {/* RESPONSIVE WRAPPER */}
      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-6
      ">

        {/* BANNER SLIDER (RESPONSIVE HEIGHT) */}
        <div
          className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden"
          ref={emblaBannerRef}
        >
          <div className="flex">
            {bannerData.map((b, i) => (
              <div key={i} className="relative flex-shrink-0 w-full md:w-[360px] h-full">
                <img src={b.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 text-white font-extrabold drop-shadow-lg">
                  <p className="text-[22px] sm:text-[30px] md:text-[34px] leading-tight">{b.title}</p>
                  <p className="mt-1 text-[12px] sm:text-[14px] font-semibold">{b.desc}</p>
                  <p className="-mt-1 text-[40px] sm:text-[54px] md:text-[58px] font-extrabold">{b.harga}</p>
                  <p className="-mt-3 text-[16px] sm:text-[20px] md:text-[22px] font-bold">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {bannerSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => goToBanner(i)}
                className={`
                  w-2 h-2 rounded-full transition-all
                  ${bannerIndex === i ? "bg-white scale-125" : "bg-white/50"}
                `}
              />
            ))}
          </div>
        </div>

        {/* BRAND SLIDER */}
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-4">

            {Array.from({ length: Math.ceil(brands.length / 2) }).map((_, col) => {
              const top = brands[col * 2];
              const bottom = brands[col * 2 + 1];

              return (
                <div key={col} className="w-[46vw] sm:w-[200px] md:w-[240px] flex-shrink-0 flex flex-col gap-3 sm:gap-4">

                  {top && (
                    <div className="w-full h-[160px] sm:h-[200px] rounded-xl overflow-hidden relative">
                      <img src={top.img} className="w-full h-full object-cover" />
                      <span
                        className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white text-[10px] sm:text-[11px] px-2 py-1 rounded font-semibold"
                        style={{ backgroundColor: top.badgeColor }}
                      >
                        {top.title}
                      </span>
                      <p className="absolute bottom-9 sm:bottom-10 left-3 text-white text-sm sm:text-lg font-semibold drop-shadow-lg">
                        {top.title}
                      </p>
                      <p className="absolute bottom-3 sm:bottom-4 left-3 text-white text-[10px] sm:text-xs drop-shadow-lg">
                        {top.produk}
                      </p>
                    </div>
                  )}

                  {bottom && (
                    <div className="w-full h-[160px] sm:h-[200px] rounded-xl overflow-hidden relative">
                      <img src={bottom.img} className="w-full h-full object-cover" />
                      <span
                        className="absolute top-2 sm:top-3 left-2 sm:left-3 text-white text-[10px] sm:text-[11px] px-2 py-1 rounded font-semibold"
                        style={{ backgroundColor: bottom.badgeColor }}
                      >
                        {bottom.title}
                      </span>
                      <p className="absolute bottom-9 sm:bottom-10 left-3 text-white text-sm sm:text-lg font-semibold drop-shadow-lg">
                        {bottom.title}
                      </p>
                      <p className="absolute bottom-3 sm:bottom-4 left-3 text-white text-[10px] sm:text-xs drop-shadow-lg">
                        {bottom.produk}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* NAV BUTTONS — HIDE ON MOBILE */}
          <button
            onClick={scrollPrev}
            className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-9 h-9 rounded-full items-center justify-center z-20"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-9 h-9 rounded-full items-center justify-center z-20"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
