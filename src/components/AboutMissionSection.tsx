"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-card]", { opacity: 0, y: 32 });
      gsap.set("[data-line]", { scaleX: 0, transformOrigin: "left center" });
      gsap.set("[data-item]", { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
      });
      tl.to("[data-card]", { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: "power3.out" });
      tl.to("[data-line]", { scaleX: 1, duration: 0.6, ease: "expo.out" }, "-=0.35");
      tl.to("[data-item]", { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power3.out" }, "-=0.3");
    }, sectionRef);
    return () => { ScrollTrigger.getAll().forEach((st) => st.kill()); ctx.revert(); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-6 md:gap-8">
      <div className="self-stretch flex flex-col justify-start items-center gap-2">
        <div data-reveal className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Nossa Direção</div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div data-reveal className="text-center text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[44px] max-w-lg">
            Propósito que nos move.
          </div>
        </div>
      </div>
      <div className="self-stretch flex justify-center">
        <div data-card className="w-full max-w-5xl p-8 md:p-10 bg-zinc-100 rounded-3xl flex flex-col justify-start items-stretch gap-6 md:gap-8 shadow-[var(--shadow-card)]">
          <div className="relative flex justify-between items-center">
            <div data-line className="absolute left-[18%] right-[18%] top-1/2 h-px bg-zinc-300 -translate-y-1/2 origin-left" />
            <div className="flex items-center gap-2 md:gap-3 z-10 bg-zinc-100 pr-3 md:pr-4">
              <span className="text-sm md:text-base font-bold font-rethink text-neutral-900">01</span>
              <span className="text-xs md:text-sm font-medium font-rethink text-zinc-500 uppercase tracking-widest">Missão</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 z-10 bg-zinc-100 pl-3 md:pl-4">
              <span className="text-xs md:text-sm font-medium font-rethink text-zinc-500 uppercase tracking-widest">Visão</span>
              <span className="text-sm md:text-base font-bold font-rethink text-neutral-900">02</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-item className="p-6 md:p-8 bg-white rounded-2xl flex flex-col justify-start items-start gap-3 shadow-[var(--shadow-card)]">
              <div className="text-black text-base md:text-lg font-semibold font-rethink leading-6 md:leading-7">
                Ser referência em educação digital
              </div>
              <div className="text-zinc-600 text-sm md:text-base font-normal font-rethink leading-5 md:leading-6">
                Até 2030, ser reconhecida como a principal referência em educação digital no Brasil, impulsionando o desenvolvimento profissional por meio da inovação, da tecnologia e de experiências de aprendizagem que geram resultados reais.
              </div>
            </div>
            <div data-item className="p-6 md:p-8 bg-white rounded-2xl flex flex-col justify-start items-start gap-3 shadow-[var(--shadow-card)]">
              <div className="text-black text-base md:text-lg font-semibold font-rethink leading-6 md:leading-7">
                Transformar vidas pela educação
              </div>
              <div className="text-zinc-600 text-sm md:text-base font-normal font-rethink leading-5 md:leading-6">
                Transformar vidas por meio da educação, oferecendo soluções digitais inovadoras, acessíveis e humanas, que acompanham cada etapa da jornada de aprendizado e potencializam o crescimento pessoal e profissional.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
