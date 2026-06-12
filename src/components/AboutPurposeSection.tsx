"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Crescimento Profissional",
    description: "Educação a distância: conhecimento em Educação e Saúde sem burocracia.",
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    title: "Suporte de Qualidade",
    description: "Suporte excepcional: tratamento humano na resolução de problemas e dúvidas.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Melhor Experiência",
    description: "Experiência do usuário aprimorada: plataformas otimizadas, responsivas e seguras.",
    icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  },
];

export default function AboutPurposeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-reveal]", { opacity: 0, y: 24 });
      gsap.set("[data-card]", { opacity: 0, y: 30, scale: 0.95 });
      gsap.set("[data-card] [data-icon]", { opacity: 0, scale: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
      });
      tl.to("[data-reveal]", { opacity: 1, y: 0, duration: 0.5, delay: 0.6, stagger: 0.1, ease: "power3.out" });
      tl.to("[data-card]", { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: { amount: 0.3 }, ease: "power3.out" }, "-=0.15");
      tl.to("[data-card] [data-icon]", { opacity: 1, scale: 1, duration: 0.4, stagger: { amount: 0.2, from: "start" }, ease: "back.out(1.7)" }, "-=0.2");
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-6 md:gap-8">
      <div className="self-stretch flex flex-col justify-start items-center gap-2">
        <div data-reveal className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Nosso Propósito</div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div data-reveal className="text-center text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[44px] max-w-lg">
            Trazemos soluções que facilitam o dia a dia
          </div>
        </div>
      </div>
      <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            data-card
            className="p-0 bg-white rounded-3xl border border-zinc-100 flex flex-col justify-start items-start overflow-hidden shadow-[var(--shadow-card)]"
          >
            <div className="self-stretch p-6 md:p-8 flex flex-col justify-start items-start gap-4">
              <div data-icon className="size-12 rounded-2xl bg-brand-blue flex justify-center items-center shrink-0">
                <svg className="size-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={b.icon} />
                </svg>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-black text-xl font-semibold font-rethink leading-7">{b.title}</div>
                <div className="text-zinc-600 text-sm font-normal font-rethink leading-5">{b.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
