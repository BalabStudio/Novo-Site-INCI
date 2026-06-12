"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
    title: "Trabalhe com intenção",
    desc: "Alguns espaços servem apenas para trabalhar. Outros mudam a forma como você trabalha.<br/><br/>A INCI reúne ambientes projetados para foco, colaboração, reuniões estratégicas e produção de conteúdo em um único ecossistema. Porque grandes projetos raramente acontecem por acaso.",
    img: "https://placehold.co/800x500/e5e7eb/52525b?text=Foco+e+Produtividade",
  },
  {
    icon: "M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z M4 13a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z M8 19h8",
    title: "Espaços que se adaptam a você",
    desc: "Estações de trabalho para entrar em estado de fluxo. Salas de reunião equipadas com display e videoconferência.<br/><br/>Cabines privativas com isolamento acústico para calls e deep work. Auditório com capacidade para até 80 pessoas. Ambientes de gravação com equipamento profissional.",
    img: "https://placehold.co/800x500/e5e7eb/52525b?text=Espacos+Flexiveis",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Menos distração, mais profundidade",
    desc: "Ambientes silenciosos. Luz natural. Arquitetura funcional. Estrutura preparada para acompanhar o seu fluxo de trabalho, sem interrompê-lo.<br/><br/>Seu escritório não precisa ser um endereço. Pode ser uma experiência. Um lugar para criar, apresentar, negociar, construir e voltar no dia seguinte querendo continuar.",
    img: "https://placehold.co/800x500/e5e7eb/52525b?text=Ambiente+Premium",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    title: "O futuro do trabalho é intencional",
    desc: "Escolher o ambiente certo deixou de ser um detalhe. Hoje, ele influencia a forma como pensamos, criamos, colaboramos e crescemos.<br/><br/>A INCI existe para quem entende isso. Venha conhecer os espaços, sentir o ambiente e descobrir por que algumas ideias simplesmente acontecem melhor quando estão no lugar certo.",
    img: "https://placehold.co/800x500/171717/fff?text=O+Futuro+e+Intencional",
    cta: true,
  },
];

export default function CoworkingBody() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.children;
      if (els?.length) {
        gsap.fromTo(els, { opacity: 0, y: 32 }, {
          opacity: 1, y: 0,
          duration: 0.65, ease: "power3.out",
          stagger: { amount: 0.5, from: "start" },
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
          onComplete: () => {
            Array.from(els).forEach((card) => {
              const img = card.querySelector("img");
              const content = card.querySelector(".card-content");

              const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
              if (img) tl.to(img, { scale: 1.04, duration: 0.5 }, 0);
              if (content) tl.to(content, { x: 4, duration: 0.25 }, 0);

              card.addEventListener("mouseenter", () => tl.play());
              card.addEventListener("mouseleave", () => tl.reverse());
            });
          },
        });
      }
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-3">
      {cards.map((card, i) => (
        <div key={i} className="self-stretch p-5 bg-white rounded-xl inline-flex flex-col justify-start items-start" style={{ border: "1px solid transparent" }}>
          <div className="self-stretch p-4 inline-flex flex-col justify-start items-start">
            <div className="card-content self-stretch flex flex-col justify-start items-start gap-2">
              <div className="size-10 min-w-10 bg-blue-400 rounded-xl inline-flex justify-center items-center">
                <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={card.icon} />
                </svg>
              </div>
              <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                <div className="self-stretch text-black text-2xl md:text-3xl font-medium font-rethink leading-8 md:leading-10">
                  {card.title}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch text-zinc-600 text-sm md:text-base font-normal font-rethink leading-5 md:leading-6" dangerouslySetInnerHTML={{ __html: card.desc }} />
              </div>
              {card.cta && (
                <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                  <a href="https://wa.me/5588988893564" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium font-rethink rounded-full transition-colors">
                    Realizar cotação
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="self-stretch h-48 md:h-64 bg-zinc-100 rounded-xl overflow-hidden">
            <img className="w-full h-full object-cover" src={card.img} alt={card.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
