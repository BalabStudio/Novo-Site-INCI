"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "./CTAButton";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const iconsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const iconEls = iconsRef.current?.children;
      if (iconEls && iconEls.length) {
        gsap.set(iconEls, { opacity: 0, y: 12 });
        gsap.to(iconEls, {
          opacity: 1, y: 0, duration: 0.4, delay: 0.6, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
        });
      }

      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      if (els?.length) {
        gsap.set(els, { opacity: 0, y: 24 });
        gsap.to(els, {
          opacity: 1, y: 0, duration: 0.5, delay: 0.6, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
        });
      }
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 py-8 md:py-10 bg-neutral-900 rounded-3xl inline-flex flex-col justify-between items-start gap-8 md:gap-0">
      <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-start gap-8 md:gap-2.5">
        <div data-reveal className="inline-flex flex-col justify-start items-start gap-3">
          <div className="w-full max-w-[480px] flex flex-col justify-start items-start gap-4">
            <div className="pr-14 flex flex-col justify-start items-start">
              <img src="/images/logos/logo_inci.webp" alt="INCI Brasil" className="h-10 md:h-14 w-auto" />
            </div>
            <div className="pr-1.5 pb-[0.58px] flex flex-col justify-start items-start">
              <div className="w-56 text-white text-sm md:text-base font-normal font-rethink leading-5 md:leading-6">Faça parte do nosso time e cresça com a nossa empresa</div>
            </div>
          </div>
          <div className="w-full max-w-[480px] flex flex-col justify-start items-start gap-6">
            <CTAButton>Trabalhe conosco</CTAButton>
          </div>
        </div>
        <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4">
            <div data-reveal className="inline-flex flex-col justify-start items-start gap-3">
              <div className="text-white text-sm md:text-base font-normal font-rethink leading-5">Endereços Comerciais</div>
              <div className="w-full md:w-72">
                <span className="text-white text-sm md:text-base font-bold font-rethink leading-4">Sede: </span>
                <span className="text-white text-sm md:text-base font-normal font-rethink leading-4">R. Catulo da Paixão Cearense, 175, Sala 507, TRIANGULO, 63.041-162 - Juazeiro do Norte/CE</span>
              </div>
              <div className="w-full md:w-72">
                <span className="text-white text-sm md:text-base font-bold font-rethink leading-4">Filial de Barbalha: </span>
                <span className="text-white text-sm md:text-base font-normal font-rethink leading-4">R. Zozimo Lopes, 08, Conjunto Nossa Sra de Fátima, 63180-000 - Barbalha/CE</span>
              </div>
            </div>
            <div data-reveal className="inline-flex flex-col justify-start items-start gap-3">
              <div className="text-white text-sm md:text-base font-normal font-rethink leading-5">Nosso e-mail</div>
              <div className="text-white text-base md:text-lg font-bold font-rethink leading-5">faleconosco@incibrasil.com.br</div>
            </div>
            <div data-reveal className="inline-flex flex-col justify-start items-start gap-3">
              <div className="text-white text-sm md:text-base font-normal font-rethink leading-5">WhatsApp</div>
              <div className="text-white text-base md:text-lg font-bold font-rethink leading-5">(88) 99384-1783</div>
            </div>
            <div data-reveal className="inline-flex flex-col justify-start items-start gap-3">
              <div ref={iconsRef} className="h-6 inline-flex justify-start items-start gap-4">
                <svg className="size-5 md:size-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
                <svg className="size-5 md:size-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <svg className="size-5 md:size-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-2.5">
        <div data-reveal className="text-stone-300 text-2xs md:text-xs font-normal font-rethink leading-6">
          COPYRIGHT ©2022. INCI - INSTITUTO NACIONAL DE APERFEIÇOAMENTO PROFISSIONAL - CNPJ: 36.692.668/0001-94
        </div>
      </div>
    </div>
  );
}
