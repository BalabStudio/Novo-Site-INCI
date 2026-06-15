"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Header from "./Header";

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

      tl
        .fromTo(
          titleRef.current ? Array.from(titleRef.current.children) : [],
          { y: "110%", opacity: 0, rotateX: -35 },
          { y: "0%", opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.03, ease: "power4.out", force3D: true },
          "-=0.2"
        )
        .fromTo(p1Ref.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, force3D: true }, "-=0.35")
        .fromTo(p2Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, force3D: true }, "-=0.25")
        .fromTo(p3Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, force3D: true }, "-=0.25");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch py-8 md:py-10 mx-2 md:mx-0 px-4 md:px-14 rounded-3xl inline-flex flex-col justify-start items-start gap-8 md:gap-12 relative overflow-hidden">
      <img
        src="/images/hero/hero.webp"
        alt="INCI Brasil"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: "heroZoom 1.4s cubic-bezier(0.19,1,0.22,1) backwards" }}
      />
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-12">
        <Header />
        <div className="self-stretch flex flex-col justify-start items-start gap-4 max-w-[800px]">
          <div className="flex flex-col justify-start items-start">
            <div ref={titleRef} className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold font-rethink leading-[1.2] md:leading-[48px]">
              <span className="inline-block overflow-hidden">Sobre</span>
              {" "}
              <span className="inline-block overflow-hidden">a</span>
              {" "}
              <span className="inline-block overflow-hidden">INCI</span>
            </div>
          </div>
          <div ref={p1Ref} className="self-stretch">
            <div className="text-stone-300 text-base md:text-lg font-normal font-rethink leading-6 md:leading-7">
              Transformamos conhecimento em experiências, inovação e impacto real.
            </div>
          </div>
          <div ref={p2Ref} className="self-stretch">
            <div className="text-stone-300 text-base md:text-lg font-normal font-rethink leading-6 md:leading-7">
              A INCI Brasil nasceu com o propósito de desenvolver pessoas, fortalecer organizações e criar experiências capazes de gerar transformação verdadeira através da educação, tecnologia e inovação.
            </div>
          </div>
          <div ref={p3Ref} className="self-stretch">
            <div className="text-stone-300 text-base md:text-lg font-normal font-rethink leading-6 md:leading-7">
              Somos um ecossistema que conecta aprendizagem, eventos, desenvolvimento profissional, inteligência estratégica e experiências de alto impacto. Atuamos na criação de projetos educacionais, congressos, soluções digitais e iniciativas que unem conteúdo, prática e conexão humana.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
