"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoworkingHighlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        defaults: { ease: "power3.out" },
      });

      tl
        .fromTo(
          imgRef.current,
          { scale: 1.12, filter: "blur(6px)" },
          { scale: 1, filter: "blur(0)", duration: 1, ease: "power2.out" },
          0
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        );
    }, sectionRef);
    return () => { ScrollTrigger.getAll().forEach((st) => st.kill()); ctx.revert(); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0">
      <div className="self-stretch relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden">
          <img ref={imgRef} className="absolute inset-0 w-full h-full object-cover" src="/images/cards/ambiente_premium.webp" alt="Ambiente premium coworking" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div ref={textRef} className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 md:p-14">
          <div className="max-w-2xl text-center">
            <div className="text-white text-3xl md:text-5xl font-medium font-rethink leading-[1.3] md:leading-[56px] mb-4">
              Seu escritório não precisa ser um endereço.
            </div>
            <div className="text-white/80 text-sm md:text-base font-normal font-rethink leading-6">
              Pode ser uma experiência. Um lugar para criar. Apresentar. Negociar. Construir.
              E voltar no dia seguinte querendo continuar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
