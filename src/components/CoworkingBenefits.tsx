"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Trabalhe com intenção",
    desc: "Espaços que favorecem concentração, clareza e execução.",
    icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  },
  {
    title: "Receba com confiança",
    desc: "Cause a impressão certa antes mesmo da primeira conversa.",
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    title: "Conecte-se naturalmente",
    desc: "Compartilhe o ambiente com pessoas, empresas e projetos em movimento.",
    icon: "M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M7 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 20v-1a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Evolua sem amarras",
    desc: "A flexibilidade de um coworking com a experiência de um escritório premium.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
];

export default function CoworkingBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const acRef = useRef<AbortController | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards?.length) {
        gsap.fromTo(cards, { opacity: 0, y: 48, scale: 0.96 }, {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65, ease: "power3.out",
          stagger: { amount: 0.4, from: "start" },
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          onComplete: () => {
            acRef.current?.abort();
            const ac = new AbortController();
            acRef.current = ac;
            const { signal } = ac;

            Array.from(cards).forEach((card) => {
              const iconWrap = card.querySelector(".benefit-icon");
              const title = card.querySelector(".benefit-title");

              const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
              tl.to(card, { scale: 1.02, duration: 0.3 }, 0)
                .to(iconWrap, { scale: 1.1, duration: 0.3 }, 0)
                .to(title, { x: 4, duration: 0.25 }, 0);

              card.addEventListener("mouseenter", () => tl.play(), { signal });
              card.addEventListener("mouseleave", () => tl.reverse(), { signal });
            });
          },
        });
      }
    }, sectionRef);
    return () => { acRef.current?.abort(); ScrollTrigger.getAll().forEach((st) => st.kill()); ctx.revert(); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 py-8 md:py-12 inline-flex flex-col justify-start items-start gap-6 md:gap-8">
      <div className="self-stretch flex flex-col justify-start items-center gap-2">
        <div className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Benefícios</div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="text-center text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[44px] max-w-lg">
            Feito para quem está construindo algo importante.
          </div>
        </div>
      </div>
      <div ref={cardsRef} className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="p-6 md:p-8 bg-white rounded-2xl border border-zinc-100 flex flex-col justify-start items-start gap-3" style={{ borderColor: "#e4e4e7" }}>
            <div className="benefit-icon size-11 rounded-xl bg-brand-blue flex justify-center items-center shrink-0">
              <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={b.icon} />
              </svg>
            </div>
            <div className="benefit-title text-black text-xl md:text-2xl font-semibold font-rethink leading-7">{b.title}</div>
            <div className="benefit-desc text-zinc-600 text-sm md:text-base font-normal font-rethink leading-5">{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
