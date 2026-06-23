"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Educação e Desenvolvimento",
    description: "Criamos formações, treinamentos, programas educacionais e experiências de aprendizagem voltadas para profissionais, empresas e instituições que desejam evoluir continuamente.",
    img: "/images/cards/_Quem somos_ Educação e Desenvolvimento.webp",
  },
  {
    title: "Eventos e Experiências",
    description: "Produzimos congressos, summits e experiências imersivas que conectam conhecimento, networking, inovação e transformação profissional.",
    img: "/images/cards/_Quem somos_ Eventos e Experiências.webp",
  },
  {
    title: "Tecnologia e Inovação",
    description: "Desenvolvemos soluções digitais, plataformas educacionais, automações e agentes de inteligência artificial aplicados à educação, atendimento e experiência do usuário.",
    img: "/images/cards/_Quem somos_ Tecnologia e Inovação.webp",
  },
  {
    title: "Estratégia e Crescimento",
    description: "Apoiamos empresas e projetos na estruturação de processos, cultura, gestão, posicionamento e desenvolvimento organizacional.",
    img: "/images/cards/_Quem somos_ Estratégia e Crescimento.webp",
  },
  {
    title: "Comunicação e Audiovisual",
    description: "Transformamos ideias em narrativas fortes através de produção audiovisual, branding, campanhas e experiências visuais que fortalecem marcas e movimentos.",
    img: "/images/cards/_Quem somos_ Comunicação e Audiovisual.webp",
  },
];

const icons = [
  "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2 M9 7a4 4 0 108 0 4 4 0 00-8 0z",
];

export default function AboutServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      gsap.set(cards, { opacity: 0, y: 48, scale: 0.95 });
      gsap.to(cards, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7, delay: 0.6,
        ease: "power3.out",
        stagger: { amount: 0.4, from: "start" },
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
      });

      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(els, { opacity: 0, y: 24 });
      gsap.to(els, {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
      });
    }, sectionRef);
    return () => { ScrollTrigger.getAll().forEach((st) => st.kill()); ctx.revert(); };
  }, []);

  const ServiceCard = ({ s, i }: { s: typeof services[0]; i: number }) => (
    <div data-card className="bg-white rounded-2xl border border-zinc-100 overflow-hidden flex flex-col justify-start items-start shadow-[var(--shadow-card)]">
      <div className="self-stretch h-28 md:h-32 relative overflow-hidden bg-zinc-100">
        <Image
          src={s.img}
          alt={s.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>
      <div className="self-stretch p-3 md:p-4 flex flex-col justify-start items-start gap-1.5">
        <svg className="size-5 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d={icons[i]} />
        </svg>
        <div className="text-black text-sm md:text-base font-semibold font-rethink leading-5">{s.title}</div>
        <div className="text-zinc-600 text-xs font-normal font-rethink leading-4">{s.description}</div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-2">
      <div data-reveal className="inline-flex justify-start items-center gap-3">
        <div className="size-1 bg-neutral-900" />
        <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">O que fazemos</div>
      </div>
      <div data-reveal className="self-stretch flex flex-col md:flex-row justify-between items-start gap-4 md:gap-12">
        <div className="text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[40px] max-w-2xl">
          Soluções que transformam
        </div>
        <div className="text-zinc-600 text-sm md:text-base font-normal font-rethink leading-6 max-w-md">
          Da educação à tecnologia, criamos ecossistemas completos que geram impacto real.
        </div>
      </div>
      <div className="self-stretch grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
        {services.map((s, i) => (
          <ServiceCard key={i} s={s} i={i} />
        ))}
      </div>
    </div>
  );
}
