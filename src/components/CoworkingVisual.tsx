"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Menos distração.",
  "Mais profundidade.",
];

export default function CoworkingVisual() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });

      const revealEls = textRef.current?.querySelectorAll("[data-reveal]");
      if (revealEls?.length) {
        tl.fromTo(
          revealEls,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.12 }
        );
      }
      tl.fromTo(
        imgRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power4.out" },
        "-=0.3"
      );
      tl.fromTo(
        imgInnerRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 0.8, ease: "power4.out" },
        "-=0.8"
      );
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 py-6 md:py-10 bg-[#FBF3EC] rounded-3xl inline-flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
      <div ref={textRef} className="flex-1 inline-flex flex-col justify-center items-start gap-1 max-w-lg">
        <div className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Ambiente</div>
        </div>
        <div data-reveal className="text-black text-3xl md:text-5xl font-semibold font-rethink leading-[1.2] md:leading-[56px]">
          Menos distração.<br />
          Mais profundidade.
        </div>
        <div data-reveal className="text-zinc-600 text-sm md:text-base font-normal font-rethink leading-6">
          Ambientes silenciosos. Luz natural. Arquitetura funcional.
          <br />
          Estrutura preparada para acompanhar o seu fluxo de trabalho, sem interrompê-lo.
        </div>
      </div>
      <div ref={imgRef} className="flex-1 h-64 md:h-96 rounded-xl overflow-hidden bg-zinc-100 max-w-2xl">
        <img
          ref={imgInnerRef}
          className="w-full h-full object-cover"
          src="/images/cards/inci_completo.webp"
          alt="Ambiente Coworking"
        />
      </div>
    </div>
  );
}
