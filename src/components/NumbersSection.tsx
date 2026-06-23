"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "./CTAButton";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  ["Brasil", "Argentina", "Bolívia", "Chile"],
  ["Colômbia", "Equador", "Guiana", "Paraguai"],
  ["Peru", "Suriname", "Uruguai", "Venezuela"],
];

export default function NumbersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const speeds = [8, 10, 7];

    trackRefs.current.forEach((track, i) => {
      if (!track) return;
      const tw = track.scrollWidth / 4;

      gsap.to(track, {
        x: -tw,
        duration: speeds[i],
        ease: "none",
        repeat: -1,
        force3D: true,
        modifiers: {
          x: (x) => parseFloat(x) % tw + "px",
        },
      });
    });

    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 1.2, ease: "power2.out" }
      );
    }

    const ctx = gsap.context(() => {
      const revealEls = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(revealEls, { opacity: 0, y: 24 });
      gsap.fromTo(
        revealEls,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.set(cards, { opacity: 0, scale: 0.94, y: 24 });
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.94, y: 24 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.5, delay: 0.6, stagger: 0.08, ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top bottom", once: true },
          }
        );
      }

      const innerEls = cardsRef.current?.querySelectorAll("[data-anim]");
      if (innerEls?.length) {
        innerEls.forEach((el) => {
          const type = el.getAttribute("data-anim");
          const fromVars: gsap.TweenVars = { opacity: 0 };
          if (type === "slide-right") fromVars.x = -60;
          else if (type === "scale-up") { fromVars.scale = 0.3; fromVars.rotation = -15; }
          else if (type === "fade-up") fromVars.y = 40;
          gsap.set(el, fromVars);
          gsap.fromTo(
            el,
            fromVars,
            {
              opacity: 1, y: 0, x: 0, scale: 1, rotation: 0,
              duration: 0.45, ease: "back.out(1.7)",
              scrollTrigger: { trigger: cardsRef.current, start: "top bottom", once: true },
            }
          );
        });
      }

      const ctaEls = gsap.utils.toArray<HTMLElement>("[data-cta-reveal]");
      if (ctaEls?.length) {
        gsap.set(ctaEls, { opacity: 0, y: 24 });
        gsap.fromTo(
          ctaEls,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: 1.2, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
          }
        );
      }

      const numEls = cardsRef.current?.querySelectorAll("[data-count]");
      if (numEls?.length) {
        numEls.forEach((numEl) => {
          const raw = numEl.getAttribute("data-count") || "0";
          const target = parseInt(raw.replace(/[^\d]/g, ""), 10);
          const prefix = raw.startsWith("+") ? "+" : "";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            delay: 0.6,
            ease: "power4.out",
            onUpdate: () => {
              numEl.textContent = prefix + Math.round(obj.val).toLocaleString("pt-BR");
            },
            scrollTrigger: { trigger: cardsRef.current, start: "top bottom", once: true },
          });
        });
      }
    }, sectionRef);
    return () => {
      gsap.killTweensOf(trackRefs.current);
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-center gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-2">
        <div data-reveal className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">NÚMEROS</div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div data-reveal className="text-center text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[44px] max-w-lg">Impacto que gera transformação.</div>
        </div>
      </div>
      <div ref={cardsRef} className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:inline-flex lg:flex-nowrap gap-2.5">
        <div className="lg:flex-1 self-stretch min-h-[200px] lg:h-72 p-5 relative bg-gray-200 rounded-3xl inline-flex flex-col justify-end items-start overflow-hidden">
          <div className="flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="inline-flex flex-col justify-start items-start">
                <div data-anim="fade-up" className="text-black text-lg md:text-xl font-normal font-rethink leading-5">Mais de <span className="font-semibold">3 Milhões</span> de Alunos</div>
                <div data-anim="fade-up" className="text-black text-xs font-normal font-rethink leading-4 mt-1.5">na América do Sul</div>
              </div>
            </div>
          </div>
          <div ref={containerRef} className="w-80 left-0 top-[20px] absolute flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            {rows.map((row, ri) => (
              <div
                key={ri}
                ref={(el) => { trackRefs.current[ri] = el; }}
                className="inline-flex justify-start items-center gap-1.5"
                style={{ willChange: "transform" }}
              >
                {[...row, ...row, ...row, ...row].map((country, ci) => (
                  <div key={ci} className="px-4 py-1.5 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 whitespace-nowrap">
                    <div className="text-black text-xs font-normal font-rethink leading-4">{country}</div>
                  </div>
                ))}
              </div>
            ))}
            <div className="w-20 h-28 left-0 top-0 absolute bg-gradient-to-r from-gray-200 to-gray-200/0 pointer-events-none" />
            <div className="w-20 h-28 right-0 top-0 absolute bg-gradient-to-l from-gray-200 to-gray-200/0 pointer-events-none" />
          </div>
        </div>
        <div className="lg:flex-1 self-stretch min-h-[200px] lg:h-72 p-5 relative rounded-3xl inline-flex flex-col justify-between items-start overflow-hidden bg-neutral-900">
          <img ref={imgRef} className="w-full h-full left-0 top-0 absolute object-cover opacity-40" src="/images/cards/card_projetos.webp" alt="Projetos em educação e tecnologia" />
          <div className="self-stretch flex flex-col justify-start items-start relative z-10">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="inline-flex flex-col justify-start items-start">
                <div data-anim="scale-up" data-count="+2.000.000" className="self-stretch text-white text-2xl md:text-4xl font-medium font-rethink leading-8 md:leading-10">+2.000.000</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-1 relative z-10">
            <div data-anim="fade-up" className="self-stretch text-white text-xl md:text-2xl font-normal font-rethink leading-7 md:leading-8">certificações geradas</div>
            <div data-anim="fade-up" className="self-stretch text-white/70 text-sm font-normal font-rethink leading-4">Sendo a EDTECH com Maior impacto dentro do Território Nacional.</div>
          </div>
        </div>
        <div className="lg:flex-1 self-stretch min-h-[140px] lg:h-72 px-5 py-5 bg-gray-200 rounded-3xl inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch inline-flex justify-start items-center gap-1">
              <div className="flex-1 inline-flex flex-col justify-start items-start">
                <div data-anim="slide-right" className="self-stretch text-black text-2xl md:text-4xl font-medium font-rethink leading-8 md:leading-10">Mais de <span className="font-semibold">60</span> colaboradores</div>
              </div>
            </div>
            <div data-anim="fade-up" className="self-stretch text-black text-base md:text-lg font-normal font-rethink leading-4">Diretos e indiretos</div>
          </div>
        </div>
        <div className="lg:flex-1 self-stretch min-h-[140px] lg:h-72 px-5 py-5 bg-blue-500 rounded-3xl inline-flex flex-col justify-between items-start overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-center gap-1">
            <div className="inline-flex flex-col justify-start items-start">
              <div data-anim="scale-up" data-count="+15.000" className="text-black text-2xl md:text-4xl font-medium font-rethink leading-8 md:leading-10">+15.000</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div data-anim="fade-up" className="self-stretch text-black text-base md:text-lg font-normal font-rethink leading-4">Mais de 15 mil pessoas Impactadas com eventos e conferências presencial</div>
          </div>
        </div>
      </div>
      <div data-cta-reveal className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-3 md:gap-5">
        <CTAButton href="https://wa.me/5588993841784" />
      </div>
    </div>
  );
}
