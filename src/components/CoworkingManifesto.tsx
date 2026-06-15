"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CoworkingManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        defaults: { ease: "power3.out" },
      });

      tl
        .fromTo(
          textRef.current,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.6, force3D: true }
        )
        .fromTo(
          imageRef.current,
          { clipPath: "inset(0 0 0 100%)" },
          { clipPath: "inset(0 0 0 0%)", duration: 0.8, ease: "power4.out" },
          "-=0.35"
        )
        .fromTo(
          mainImgRef.current,
          { scale: 1.1 },
          { scale: 1, duration: 0.8, ease: "power4.out", force3D: true },
          "-=0.8"
        );
    }, sectionRef);
    return () => { ScrollTrigger.getAll().forEach((st) => st.kill()); ctx.revert(); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start">
      <div className="self-stretch bg-neutral-900 rounded-3xl flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="p-8 md:p-14 flex-1 flex items-center">
          <div ref={textRef} className="w-full max-w-[540px] flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-1">
              <div className="text-white text-lg md:text-2xl font-medium font-rethink leading-[1.2] md:leading-[30px]">
                O futuro do trabalho não é remoto.
              </div>
              <div className="text-white text-4xl md:text-6xl font-semibold font-rethink leading-[1.1] md:leading-[66px]">
                <span className="text-orange-400">Nem presencial.</span><br />É intencional.
              </div>
            </div>
            <div className="text-white/60 text-sm md:text-base font-normal font-rethink leading-6">
              Escolher o ambiente certo deixou de ser um detalhe. Hoje, ele influencia a forma como pensamos, criamos, colaboramos e crescemos. A INCI existe para quem entende isso.
            </div>
          </div>
        </div>
        <div ref={imageRef} className="w-full md:w-[560px] shrink-0 relative bg-gradient-to-br from-orange-100/20 to-neutral-800 outline outline-1 outline-white/10">
          <img
            className="w-full h-full object-cover opacity-30 absolute inset-0"
            src="https://placehold.co/800x600/333/333"
            alt=""
          />
          <img
            ref={mainImgRef}
            className="w-full h-full object-cover absolute inset-0"
            src="/images/cards/futuro_trabalho.webp"
            alt="Espaço de coworking"
          />
        </div>
      </div>
    </div>
  );
}
