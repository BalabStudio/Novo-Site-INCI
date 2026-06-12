"use client";

import { useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoworkingCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const btnLabelRef = useRef<HTMLSpanElement>(null);

  const initMagnetic = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const strength = { btn: 0.35, label: 0.2 };

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      gsap.to(btn, {
        x: dx * strength.btn,
        y: dy * strength.btn,
        duration: 0.4,
        ease: "power2.out",
      });
      if (btnLabelRef.current) {
        gsap.to(btnLabelRef.current, {
          x: dx * strength.label,
          y: dy * strength.label,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0, y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
      if (btnLabelRef.current) {
        gsap.to(btnLabelRef.current, {
          x: 0, y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      }
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl
        .fromTo(textRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(btnRef.current, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, "-=0.3")
        .then(initMagnetic);
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, [initMagnetic]);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-6">
      <div className="self-stretch bg-zinc-100 rounded-3xl p-8 md:p-14 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
        <div ref={textRef} className="flex-1 flex flex-col justify-start items-start gap-4">
          <div className="text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[48px]">
            O próximo capítulo do seu trabalho começa aqui.
          </div>
          <div className="text-zinc-600 text-sm md:text-base font-normal font-rethink leading-6 max-w-xl">
            Venha conhecer os espaços, sentir o ambiente e descobrir por que algumas ideias simplesmente acontecem melhor quando estão no lugar certo.
          </div>
        </div>
        <a
          ref={btnRef}
          href="https://wa.me/5588988893564"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm md:text-base font-medium font-rethink rounded-full transition-colors"
        >
          <span ref={btnLabelRef}>Realizar cotação</span>
        </a>
      </div>
    </div>
  );
}
