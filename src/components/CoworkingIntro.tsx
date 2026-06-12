"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  { label: "Freelancers", img: "/images/cards/freelancers.webp", desc: "Mesas e salas sob demanda para quem busca foco e flexibilidade." },
  { label: "Startups", img: "/images/cards/startups.webp", desc: "Ambiente colaborativo com estrutura para times que estão crescendo." },
  { label: "Equipes remotas", img: "/images/cards/equipes_remotas.webp", desc: "Escritório preparado para receber seu time híbrido com infraestrutura completa." },
  { label: "Criadores", img: "/images/cards/criadores.webp", desc: "Estúdios e salas equipadas para produção de conteúdo e gravação." },
  { label: "PMEs", img: "/images/cards/pmes.webp", desc: "Salas privativas e salas de reunião para empresas em expansão." },
];

const features = [
  "Infraestrutura completa para o seu negócio",
  "Ambiente profissional e colaborativo",
];

export default function CoworkingIntro() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const initMagnetic = useCallback(() => {
    const btn = ctaRef.current?.querySelector("a");
    if (!btn) return;

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      gsap.to(btn, { x: dx * 0.3, y: dy * 0.3, duration: 0.4, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      const head = sectionRef.current?.querySelector("[data-head]");
      const tabs = sectionRef.current?.querySelectorAll("[data-tab]");
      if (head) tl.fromTo(head, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5 });
      if (tabs?.length) tl.fromTo(tabs, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08 }, "-=0.3");
      if (contentRef.current) tl.fromTo(contentRef.current, { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.2");
      tl.then(initMagnetic);
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, [initMagnetic]);

  useLayoutEffect(() => {
    if (imgRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }, contentRef);
      return () => ctx.revert();
    }
  }, [active]);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 pt-0 pb-8 md:pb-16">
      <div data-head className="text-left text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] mb-6 md:mb-10">
          Espaços que se adaptam ao seu jeito de trabalhar
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-14">
          <div className="flex flex-col gap-1">
            {profiles.map((p, i) => (
              <button
                key={i}
                data-tab
                onClick={() => setActive(i)}
                className={`text-left px-0 border-b transition-opacity duration-300 flex items-center min-h-14 ${
                  i === active
                    ? "border-neutral-900 border-b-2 opacity-100"
                    : "border-zinc-400 hover:opacity-60"
                }`}
              >
                <span
                  className={`font-rethink ${
                    i === active ? "text-2xl font-medium text-black leading-8" : "text-base font-normal text-zinc-400 leading-6"
                  }`}
                >
                  {p.label}
                </span>
              </button>
            ))}
          </div>
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12">
            <div className="aspect-[2/1] rounded-xl overflow-hidden bg-zinc-100">
              <img
                ref={imgRef}
                className="w-full h-full object-cover"
                src={profiles[active].img}
                alt={profiles[active].label}
              />
            </div>
            <div className="flex flex-col justify-start gap-2">
              <div className="text-black text-2xl md:text-3xl font-semibold font-rethink leading-[1.2]">
                {profiles[active].desc}
              </div>
              <div className="flex flex-col gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-zinc-400 pb-4">
                    {i === 0 ? (
                      <svg className="size-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    ) : (
                      <svg className="size-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    )}
                    <span className="text-zinc-400 text-sm font-normal font-rethink leading-4">{f}</span>
                  </div>
                ))}
              </div>
              <div ref={ctaRef} className="mt-4">
                <a
                  href="https://wa.me/5588988893564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-12 px-8 py-2.5 bg-blue-500 rounded-[80px] inline-flex justify-center items-center cursor-pointer text-white text-base font-normal font-rethink leading-4 hover:bg-blue-600 transition-colors"
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
