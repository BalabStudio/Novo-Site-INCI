"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";

import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.92, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );
      tl.fromTo(
        carouselRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="self-stretch py-8 md:py-10 mx-2 md:mx-0 px-4 md:px-14 rounded-3xl inline-flex flex-col justify-start items-start gap-8 md:gap-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroZoom 1.4s cubic-bezier(0.19,1,0.22,1) backwards" }}
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 20; }}
        >
          <source src="https://www.dropbox.com/scl/fi/g0j7lhe766wd9j22ue6o8/INAUGURADA-A-Inci-Brasil-agora-tem-uma-nova-sede-Esse-pr-dio-muito-mais-do-que-apenas-um.mp4?rlkey=vpop6cikxuax36nd54s3an2pd&st=q91jhycw&dl=1" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>
      <style>{`@keyframes heroZoom{from{transform:scale(1.08) translateY(-8px);filter:blur(4px)}to{transform:scale(1) translateY(0);filter:blur(0)}}`}</style>
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-12">
        <Header />
        <div className="w-full max-w-[934px] flex flex-col justify-start items-start">
          <div className="self-stretch flex flex-col justify-end items-start gap-4 md:gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div ref={titleRef} className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch">
                  <span className="text-orange-400 text-3xl md:text-5xl lg:text-6xl font-medium font-rethink leading-[1.1] md:leading-[64px]">
                    Educação, tecnologia e experiências
                  </span>
                  <span className="text-white text-3xl md:text-5xl lg:text-6xl font-medium font-rethink leading-[1.1] md:leading-[64px]">
                    {" "}que transformam pessoas e organizações.
                  </span>
                </div>
              </div>
              <div ref={subRef} className="w-full max-w-[650px] flex flex-col justify-start items-start">
                <div className="self-stretch text-white text-sm md:text-base font-normal font-rethink leading-5 md:leading-6">
                  A INCI Brasil desenvolve soluções em educação, inovação, eventos, inteligência artificial e experiências corporativas para impulsionar empresas, profissionais e instituições.
                </div>
              </div>
            </div>
            <div ref={badgeRef} className="flex flex-col justify-center items-start gap-2">
              <div className="flex flex-col justify-start items-start">
                <div className="text-white text-base font-normal font-rethink leading-6">+11,8 mi de Alcance</div>
              </div>
              <div className="inline-flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div ref={carouselRef}>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}
