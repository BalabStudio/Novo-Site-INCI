"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./Header";

export default function CoworkingHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onPause = () => { if (!vid.ended) vid.play().catch(() => {}); };
    vid.addEventListener("pause", onPause);
    return () => vid.removeEventListener("pause", onPause);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });
      const titleLines = rootRef.current?.querySelectorAll('[data-coworking-title] > span') ?? [];

      tl
        .fromTo(
          videoRef.current,
          { scale: 1.08, filter: "blur(8px)" },
          { scale: 1, filter: "blur(0)", duration: 1.2, ease: "power2.out", force3D: true },
          0
        )
        .fromTo(
          ".header-wrapper",
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.5, clearProps: "transform", force3D: true },
          "-=0.6"
        )
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 12, letterSpacing: "0.3em" },
          { opacity: 1, y: 0, letterSpacing: "0.1em", duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          titleLines,
          { y: "110%", opacity: 0, rotateX: -35 },
          { y: "0%", opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.15, ease: "power4.out", force3D: true },
          "-=0.2"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, force3D: true },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.92, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.4)", force3D: true },
          "-=0.3"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="self-stretch py-8 md:py-10 mx-2 md:mx-0 px-4 md:px-14 rounded-3xl inline-flex flex-col justify-start items-start gap-8 md:gap-12 relative">
      <div className="absolute inset-0 bg-neutral-900 rounded-3xl overflow-hidden">
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover" src="https://www.dropbox.com/scl/fi/80cb7ebz1zd7bveclr0rl/Video-Hero_site.mp4?rlkey=a04q0eewrapjwoyd6jaho85zp&st=14d2ypjh&raw=1">
          Seu navegador não suporta vídeo.
        </video>
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-12">
        <div className="header-wrapper w-full">
          <Header />
        </div>
        <div className="w-full max-w-[934px] flex flex-col justify-start items-start">
          <div className="self-stretch flex flex-col justify-end items-start gap-4 md:gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div ref={eyebrowRef} className="inline-flex justify-start items-center gap-2">
                <div className="size-1 bg-orange-400 rounded-full" />
                <div className="text-orange-400 text-xs md:text-sm font-medium font-rethink uppercase tracking-[0.2em]">
                  Coworking INCI
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div data-coworking-title className="self-stretch">
                  <span className="inline-block overflow-hidden text-orange-400 text-3xl md:text-5xl lg:text-6xl font-medium font-rethink leading-[1.1] md:leading-[64px]">
                    Onde o trabalho
                  </span>
                  <span className="inline-block overflow-hidden text-white text-3xl md:text-5xl lg:text-6xl font-medium font-rethink leading-[1.1] md:leading-[64px]">
                    {" "}ganha presença.
                  </span>
                </div>
              </div>
              <div ref={subRef} className="w-full max-w-[650px] flex flex-col justify-start items-start">
                <div className="self-stretch text-white text-sm md:text-base font-normal font-rethink leading-5 md:leading-6">
                  Um espaço pensado para profissionais, equipes e criadores que entendem que o ambiente também faz parte da performance.
                </div>
              </div>
            </div>
            <div ref={ctaRef} className="flex flex-col justify-center items-start gap-2">
              <a
                href="https://wa.me/5588988893564"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium font-rethink rounded-full transition-colors"
              >
                Realizar cotação
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
