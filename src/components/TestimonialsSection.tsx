"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "“Os cursos oferecidos são essenciais para quem busca aprimorar suas práticas pedagógicas.”",
    name: "Carol Santos",
    role: "Aluna - SóEducador",
  },
  {
    quote: "“A INCI transformou a forma como nossa organização lida com inovação e tecnologia.”",
    name: "Rafael Oliveira",
    role: "CEO - TechSolutions",
  },
  {
    quote: "“Experiência incrível! Os eventos presenciais são maravilhosos e o conteúdo é de primeira.”",
    name: "Juliana Mendes",
    role: "Diretora - EducaMais",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const dirRef = useRef(1);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = testimonials[current];

  useEffect(() => {
    if (tlRef.current) tlRef.current.kill();
    const xDir = dirRef.current > 0 ? 1 : -1;
    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.fromTo(
      leftCardRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
    );
    tl.fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.3, rotation: -15 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.3"
    );
    tl.fromTo(
      quoteRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      "-=0.15"
    );
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 30 * xDir, scale: 0.93 },
      { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: "power3.out" },
      "-=0.35"
    );

    return () => { tl.kill(); };
  }, [current]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(els, { opacity: 0, y: 24 });
      gsap.to(els, {
        opacity: 1, y: 0, duration: 0.5, delay: 0.6,
        ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
      });
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  const prev = () => {
    dirRef.current = -1;
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };
  const next = () => {
    dirRef.current = 1;
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-3">
      <div className="self-stretch flex flex-col justify-start items-center gap-1">
        <div data-reveal className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Depoimentos</div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div data-reveal className="self-stretch text-center text-black text-2xl md:text-4xl font-medium font-rethink leading-[1.2] md:leading-[57.60px]">O que nossos clientes estão dizendo</div>
        </div>
      </div>
      <div className="self-stretch relative flex flex-col justify-start items-start">
        <div className="self-stretch flex flex-col justify-center items-start overflow-hidden">
          <div className="self-stretch inline-flex justify-center items-start">
            <div className="flex-1 flex justify-start items-start gap-2.5">
              <div key={current} ref={wrapperRef} className="flex-1 flex justify-start items-start gap-2.5">
                <div className="flex-1 p-2 md:p-3 bg-zinc-100 rounded-3xl flex flex-col md:flex-row justify-start items-start gap-2 shadow-[var(--shadow-card)]">
                  <div ref={leftCardRef} className="flex-1 self-stretch p-5 md:p-6 bg-white rounded-xl inline-flex flex-col justify-center items-center">
                    <div className="self-stretch flex-1 flex flex-col justify-center items-center gap-2 md:gap-3">
                      <div ref={iconRef} className="size-9 md:size-11 bg-blue-500 rounded-lg inline-flex justify-center items-center">
                        <svg className="size-4 md:size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 11H6.5A2.5 2.5 0 0 1 9 8.5V7a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                          <path d="M21 11h-3.5A2.5 2.5 0 0 1 20 8.5V7a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                        </svg>
                      </div>
                      <div ref={quoteRef} className="self-stretch text-black text-base md:text-xl font-medium font-rethink text-center leading-5 md:leading-7">
                        {t.quote}
                      </div>
                      <div ref={nameRef} className="self-stretch flex flex-col justify-center items-center">
                        <div className="self-stretch text-black text-xs md:text-sm font-normal font-rethink text-center leading-5 md:leading-6">
                          {t.name}<br/>{t.role}
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2 mt-auto">
                        <button onClick={prev} className="size-8 bg-neutral-900 rounded-xl inline-flex justify-center items-center cursor-pointer hover:bg-neutral-700 transition-colors">
                          <svg className="size-3.5 text-white rotate-180" viewBox="0 0 20 20" fill="none">
                            <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
                          </svg>
                        </button>
                        <button onClick={next} className="size-8 bg-neutral-900 rounded-xl inline-flex justify-center items-center cursor-pointer hover:bg-neutral-700 transition-colors">
                          <svg className="size-3.5 text-white" viewBox="0 0 20 20" fill="none">
                            <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div ref={imageRef} className="w-full md:w-[240px] aspect-square relative rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={`https://placehold.co/608x486?text=${encodeURIComponent(t.name)}`} alt={t.name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
