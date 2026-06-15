"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spaces = [
  {
    name: "Estações de trabalho",
    desc: "Para entrar em estado de fluxo. Ambientes silenciosos com luz natural e ergonomia.",
    icon: "M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z M4 13a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z M8 19h8",
    img: "/images/cards/estacoes.webp",
  },
  {
    name: "Salas de reunião",
    desc: "Para decisões que movem negócios. Equipadas com display, videoconferência e Wi-Fi dedicado.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    img: "/images/cards/sala_reuniao.webp",
  },
  {
    name: "Cabines privativas",
    desc: "Para conversas que exigem foco total. Isolamento acústico e privacidade para calls e deep work.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    img: "/images/cards/cabine.webp",
  },
  {
    name: "Auditório",
    desc: "Para apresentações que merecem atenção. Capacidade para 80 pessoas, som e projeção profissionais.",
    icon: "M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z",
    img: "/images/cards/auditorio.webp",
  },
  {
    name: "Ambientes de gravação",
    desc: "Para produção de conteúdo com qualidade profissional. Acústica tratada e equipamento disponível.",
    icon: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0z",
    img: "/images/cards/gravacao.webp",
  },
];

export default function CoworkingStructure() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      if (!cards.length) return;

      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img) gsap.set(img, { scale: 1.1 });
      });

      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: { trigger: wrapperRef.current, start: "top bottom-=80", once: true },
      });

      cards.forEach((card, i) => {
        tl.fromTo(card,
          { autoAlpha: 0, y: 80, scale: 0.88 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.85, ease: "power4.out" },
          i * 0.3
        );
        const img = card.querySelector("img");
        if (img) {
          tl.to(img, { scale: 1, duration: 1.1, ease: "power4.out" }, i * 0.3);
        }
      });

      ScrollTrigger.refresh();
    }, wrapperRef);
    return () => { ScrollTrigger.getAll().forEach((st) => st.kill()); ctx.revert(); };
  }, []);

  return (
    <div ref={wrapperRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 py-8 md:py-14 inline-flex flex-col justify-start items-start gap-6 md:gap-8">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Espaços</div>
        </div>
        <div className="text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[44px]">
          Conheça nossos ambientes
        </div>
      </div>
      <div className="self-stretch p-6 bg-zinc-100 rounded-3xl inline-flex flex-col justify-start items-start gap-3">
        {spaces.map((space, i) => (
          <div
            key={i}
            data-card
            className="self-stretch md:h-96 p-5 bg-white rounded-xl inline-flex flex-col md:flex-row justify-start items-start"
          >
            <div data-content className="self-stretch md:self-center md:w-[38%] p-4 md:px-8 inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="size-10 min-w-10 bg-blue-400 rounded-xl inline-flex justify-center items-center">
                  <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={space.icon} />
                  </svg>
                </div>
                <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                  <div className="self-stretch text-black text-3xl md:text-4xl font-medium font-rethink leading-9 md:leading-[44px]">
                    {space.name}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-zinc-600 text-base md:text-lg font-normal font-rethink leading-6 md:leading-7">
                    {space.desc}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch md:w-[62%] md:h-full bg-zinc-100 rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover object-[center_80%]" src={space.img} alt={space.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
