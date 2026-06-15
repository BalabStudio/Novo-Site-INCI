"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  site: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  instagram: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  ),
  youtube: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  ),
};

type LinkType = "site" | "instagram" | "youtube" | "whatsapp";

interface BrandLink {
  type: LinkType;
  url: string;
  phone?: string;
}

interface BrandChild {
  name: string;
  description: string;
  logo?: string;
  logoClass?: string;
  links: BrandLink[];
}

interface BrandTab {
  id: string;
  name: string;
  subtitle: string;
  combined: true;
  children: BrandChild[];
}

const brands: BrandTab[] = [
  {
    id: "cursos-online",
    name: "Cursos online",
    subtitle: "Cursos online de capacitação",
    combined: true,
    children: [
      {
        name: "SóEducador",
        description: "A SóEducador é uma plataforma de formação online voltada para educadores, professores, gestores escolares e profissionais da educação de todo o Brasil. A empresa oferece cursos, capacitações, aperfeiçoamentos e pós-graduações em diversas áreas educacionais, com foco em desenvolvimento profissional, atualização pedagógica e crescimento na carreira.<br/><br/>A plataforma disponibiliza centenas de cursos nas áreas de pedagogia, educação especial, gestão escolar, psicopedagogia, tecnologias na educação, BNCC, inclusão, alfabetização e muitas outras. Os conteúdos são desenvolvidos para auxiliar profissionais da educação a ampliarem conhecimentos, conquistarem certificações e melhorarem sua atuação prática.",
        logo: "/images/logos/logo_soeducador.webp",
        logoClass: "h-20",
        links: [
          { type: "site", url: "https://soeducador.com.br/" },
          { type: "instagram", url: "https://www.instagram.com/soeducador/" },
          { type: "youtube", url: "https://www.youtube.com/@soeducador" },
        ],
      },
      {
        name: "Estetus",
        description: "A Estetus é uma plataforma de educação online voltada para profissionais da área da saúde, oferecendo cursos de capacitação, atualização, aperfeiçoamento e pós-graduação em diversas especialidades.<br/><br/>A plataforma disponibiliza cursos nas áreas de enfermagem, saúde pública, fisioterapia, nutrição, odontologia, psicologia, dermatologia e estética, entre outras, com acesso digital e flexível para estudantes de todo o Brasil.",
        logo: "/images/logos/logo_estutus.webp",
        logoClass: "h-20",
        links: [
          { type: "site", url: "https://estetus.com.br/" },
          { type: "instagram", url: "https://www.instagram.com/estetus.saude" },
          { type: "youtube", url: "https://www.youtube.com/@estetussaude/videos" },
        ],
      },
    ],
  },
  {
    id: "eventos",
    name: "Eventos",
    subtitle: "Congressos, festivais e encontros",
    combined: true,
    children: [
      {
        name: "EducDay",
        description: "É um projeto cultural de grande porte que integra educação, arte, inovação e valorização territorial em uma experiência híbrida de formação, networking e difusão cultural. Realizado no Cariri cearense, o evento reúne educadores, estudantes, artistas, empreendedores e lideranças para promover acesso ao conhecimento, fortalecimento da economia criativa e valorização da identidade cultural regional.",
        logo: "/images/logos/logo_educday.webp",
        logoClass: "h-20",
        links: [
          { type: "site", url: "https://educday.com.br/" },
          { type: "instagram", url: "https://www.instagram.com/educday/" },
        ],
      },
      {
        name: "CliniSummit",
        description: "Encontro estratégico voltado para gestão, profissionalização e crescimento de clínicas da área da saúde. O CliniSummit reúne proprietários de clínicas, gestores, investidores e profissionais do setor para discutir tendências, compartilhar cases de sucesso e construir redes de networking de alto valor.",
        logo: "/images/logos/logo_cliniSummit.webp",
        logoClass: "h-20",
        links: [
          { type: "site", url: "https://clinisummit.com.br/" },
          { type: "instagram", url: "https://www.instagram.com/clinisummit/" },
        ],
      },
    ],
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    subtitle: "Automação, IA e recrutamento",
    combined: true,
    children: [
      {
        name: "Atalia",
        description: "A Atalia é uma plataforma de automação de atendimento via WhatsApp com inteligência artificial, criada para ajudar empresas a vender, atender e escalar comunicação de forma automática e organizada.<br/><br/>Com recursos avançados como chatbots inteligentes, disparos em massa, gestão de contatos, integração com CRM e relatórios em tempo real, a Atalia permite que negócios de todos os portes automatizem seu atendimento e aumentem a produtividade das equipes comerciais e de suporte.",
        logo: "/images/logos/logo_atalia.webp",
        logoClass: "h-20",
        links: [
          { type: "site", url: "https://atalia.com.br/" },
          { type: "instagram", url: "https://www.instagram.com/atalia.ai/" },
          { type: "whatsapp", url: "https://wa.me/5588981527958", phone: "88 98152-7958" },
        ],
      },
      {
        name: "Inci Recruta",
        description: "A Inci Recruta é o serviço de recrutamento e seleção do Grupo INCI, especializado na conexão entre talentos e oportunidades no mercado de trabalho. Com processos seletivos humanizados e alinhados às necessidades de cada empresa, a Inci Recruta identifica profissionais que se encaixam na cultura e nos objetivos organizacionais.<br/><br/>Atuamos com agilidade e transparência, oferecendo desde a triagem de currículos até a entrevista final, garantindo que cada contratação seja um passo estratégico para o crescimento da sua empresa.",
        logo: "/images/logos/INCI_Recruta.webp",
        logoClass: "h-20",
        links: [
          { type: "whatsapp", url: "https://wa.me/5588988893564", phone: "88 9 8889-3564" },
        ],
      },
    ],
  },
  {
    id: "producao-eventos",
    name: "Produção de Eventos",
    subtitle: "Execução e produção audiovisual",
    combined: true,
    children: [
      {
        name: "CLB Produções",
        description: "Produtora responsável pela execução técnica e operacional de projetos e experiências. A CLB Produções atua em toda a cadeia de produção de eventos, desde o planejamento e captação até a execução e pós-produção, garantindo qualidade e profissionalismo em cada etapa.<br/><br/>Com experiência em eventos corporativos, acadêmicos e culturais, a CLB oferece serviços de sonorização, iluminação, cenografia, transmissão ao vivo, gravação e edição de conteúdo, além de gestão logística completa para eventos presenciais, híbridos e digitais.",
        logo: "/images/logos/logo_clb.webp",
        logoClass: "h-20",
        links: [
          { type: "whatsapp", url: "https://wa.me/5588993483974", phone: "88 9 9348-3974" },
          { type: "instagram", url: "https://www.instagram.com/clbproducoes/" },
        ],
      },
      {
        name: "Zamply Produções",
        description: "A Zamply entrega soluções completas em produção audiovisual, atendendo desde a concepção até a execução de projetos como gravação de cursos, cobertura de eventos corporativos, produção de conteúdos para redes sociais, campanhas publicitárias, transmissões ao vivo e podcasts.<br/><br/>Com uma equipe especializada e equipamentos de última geração, a empresa desenvolve produções sob medida que conectam pessoas, valorizam marcas e transformam objetivos em experiências visuais memoráveis.",
        logo: "/images/logos/logo_zamply_producoes.webp",
        logoClass: "h-20",
        links: [
          { type: "whatsapp", url: "https://wa.me/5588988893564", phone: "88 9 8889-3564" },
          { type: "instagram", url: "https://www.instagram.com/zamply.producoes/" },
          { type: "site", url: "https://producoes.zamply.com.br/" },
        ],
      },
    ],
  },
];

export default function BrandsSection() {
  const [active, setActive] = useState(brands[0]);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const card = cardRef.current;
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [active]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(els, { opacity: 0, y: 32 });
      gsap.to(els, {
        opacity: 1, y: 0,
        duration: 0.6, delay: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
      });
    }, sectionRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div ref={sectionRef} className="self-stretch mx-2 md:mx-0 px-4 md:px-14 inline-flex flex-col justify-start items-start gap-5">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div data-reveal className="inline-flex justify-start items-center gap-3">
          <div className="size-1 bg-neutral-900" />
          <div className="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">Nossas marcas</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div data-reveal className="flex flex-col justify-start items-start">
            <div className="text-black text-2xl md:text-4xl font-semibold font-rethink leading-[1.2] md:leading-[40px]">Marcas e iniciativas que fazem parte da INCI.</div>
          </div>
          <div data-reveal className="flex flex-col justify-start items-start">
            <div className="text-zinc-500 text-2xl md:text-4xl font-medium font-rethink leading-8 md:leading-10">{active.subtitle}</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-0">
        <div data-reveal className="self-stretch px-4 py-2 bg-gray-200 rounded-xl md:rounded-[56px] flex md:inline-flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2 md:gap-4">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setActive(b)}
              className={`w-full md:w-auto ${active.id === b.id ? "md:flex-1" : "md:w-44"} px-4 py-2 rounded-lg md:rounded-[48px] flex justify-center items-center ${active.id === b.id ? "bg-white" : ""}`}
            >
              <div className={`text-sm font-normal font-rethink uppercase leading-5 tracking-widest ${active.id === b.id ? "text-neutral-900" : "text-zinc-600"}`}>
                {b.name}
              </div>
            </button>
          ))}
        </div>
        <div data-reveal ref={cardRef} className="self-stretch pt-6 flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-3 bg-zinc-100 rounded-3xl flex flex-col justify-start items-start shadow-[var(--shadow-card)]">
            <div className="self-stretch p-4 md:p-8 bg-white rounded-xl flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
              {active.children.map((child) => (
                <div key={child.name} className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  {child.logo && (
                    <img className={`w-auto object-contain ${child.logoClass || "h-9"}`} src={child.logo} alt={child.name} />
                  )}
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch text-zinc-600 text-sm md:text-base font-normal font-rethink leading-5" dangerouslySetInnerHTML={{ __html: child.description }} />
                  </div>
                  {child.links.length > 0 && (() => {
                    const socialLinks = child.links.filter((l) => !l.phone);
                    const phoneLinks = child.links.filter((l) => l.phone);
                    return (
                      <div className="self-stretch pt-1 flex flex-col justify-start items-start gap-1.5">
                        {socialLinks.length > 0 && (
                          <>
                            <div className="text-zinc-500 text-sm font-medium font-rethink uppercase tracking-widest">Conheça melhor</div>
                            <div className="inline-flex justify-start items-center gap-2.5">
                              {socialLinks.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="size-9 bg-zinc-100 rounded-xl inline-flex justify-center items-center text-zinc-600 hover:bg-brand-blue hover:text-white transition-colors">
                                  {icons[link.type]}
                                </a>
                              ))}
                            </div>
                          </>
                        )}
                        {phoneLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex justify-start items-center gap-2 h-9 bg-zinc-100 rounded-xl px-3 text-zinc-600 hover:bg-brand-blue hover:text-white transition-colors">
                            {icons[link.type]}
                            <span className="text-sm font-normal font-rethink">Fale com um especialista</span>
                          </a>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
