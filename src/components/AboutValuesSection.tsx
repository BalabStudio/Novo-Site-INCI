"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { name: "Honestidade", description: "Agimos com transparência, verdade e integridade em todas as nossas relações, decisões e entregas." },
  { name: "Disciplina", description: "Acreditamos que grandes resultados são construídos com constância, organização, compromisso e responsabilidade diária." },
  { name: "Empatia", description: "Buscamos compreender pessoas, necessidades e realidades, criando conexões humanas verdadeiras e relações mais respeitosas." },
  { name: "Respeito", description: "Valorizamos cada indivíduo, suas ideias, histórias e diferenças, promovendo um ambiente saudável, colaborativo e inclusivo." },
  { name: "Humanidade", description: "Colocamos as pessoas no centro de tudo o que fazemos, priorizando relações humanas, cuidado e impacto positivo." },
  { name: "Resiliência", description: "Enfrentamos desafios com coragem, adaptação e perseverança, transformando dificuldades em aprendizado e crescimento." },
  { name: "Confidencialidade", description: "Tratamos informações, projetos e relações com responsabilidade, segurança e total compromisso com a privacidade." },
  { name: "Inovação", description: "Buscamos constantemente novas ideias, tecnologias e soluções capazes de gerar evolução e transformação real." },
  { name: "Fé em Deus", description: "Acreditamos que nossa caminhada é guiada por princípios, propósito e valores que fortalecem nossa missão diariamente." },
  { name: "Confiança", description: "Construímos relações sólidas através da credibilidade, coerência, responsabilidade e compromisso com nossas entregas." },
  { name: "Ética", description: "Conduzimos nossas ações com responsabilidade, justiça e integridade, mantendo coerência entre discurso e prática." },
];

const row1 = values.slice(0, 6);
const row2 = values.slice(6);

export default function AboutValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const speeds = [200, 220];

    trackRefs.current.forEach((track, i) => {
      if (!track) return;
      const tw = track.scrollWidth / 4;

      gsap.to(track, {
        x: -tw,
        duration: speeds[i],
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => parseFloat(x) % tw + "px",
        },
      });
    });

    return () => {
      gsap.killTweensOf(trackRefs.current);
    };
  }, []);

  const Pill = ({ v, i, offset }: { v: typeof values[0]; i: number; offset: number }) => (
    <div className="shrink-0 px-5 py-2.5 rounded-full bg-zinc-100 inline-flex justify-start items-center gap-2.5">
      <span className="text-neutral-900 text-sm font-bold font-rethink shrink-0">{String(i + offset).padStart(2, "0")}</span>
      <span className="text-neutral-900 text-base font-semibold font-rethink whitespace-nowrap">{v.name}</span>
      <span className="text-zinc-500 text-sm font-normal font-rethink whitespace-nowrap">{v.description}</span>
    </div>
  );

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-5">
      <div className="inline-flex justify-start items-center gap-3">
        <div className="size-1 bg-neutral-900" />
        <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Princípios inegociáveis</div>
      </div>
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="flex flex-col gap-3">
          <div ref={(el) => { trackRefs.current[0] = el; }} className="inline-flex gap-3" style={{ willChange: "transform" }}>
            {[...row1, ...row1, ...row1, ...row1].map((v, i) => (
              <Pill key={`r1-${i}`} v={v} i={i % row1.length} offset={1} />
            ))}
          </div>
          <div ref={(el) => { trackRefs.current[1] = el; }} className="inline-flex gap-3" style={{ willChange: "transform" }}>
            {[...row2, ...row2, ...row2, ...row2].map((v, i) => (
              <Pill key={`r2-${i}`} v={v} i={i % row2.length} offset={7} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
