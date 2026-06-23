"use client";

import { useState } from "react";
import CTAButton from "./CTAButton";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full inline-flex justify-between items-center">
      <a href="/" className="inline-flex">
        <img src="/images/logos/logo_inci.webp" alt="INCI Brasil" className="h-12 md:h-10 w-auto" />
      </a>
      <div className="flex justify-center items-center relative">
        <div className="hidden md:flex justify-center items-center relative">
          <div className="flex justify-center items-center gap-2">
            <a href="/" className="group relative px-3 pt-2.5 pb-3 flex justify-center items-center">
              <div className="text-center text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest group-hover:-translate-y-0.5 transition-transform duration-300">Início</div>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
            </a>
            <a href="/quem-somos" className="group relative px-3 pt-2.5 pb-3 flex justify-center items-center">
              <div className="text-center text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest group-hover:-translate-y-0.5 transition-transform duration-300">Quem Somos</div>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
            </a>
            <div className="group relative px-3 pt-2.5 pb-3 flex justify-center items-center cursor-pointer">
              <div className="text-center text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest group-hover:-translate-y-0.5 transition-transform duration-300">Trabalhe conosco</div>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
            </div>
            {/* <div className="relative">
              <button
                onClick={() => setSolucoesOpen(!solucoesOpen)}
                className="group p-3 inline-flex justify-center items-center gap-2"
              >
                <div className="text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest group-hover:-translate-y-0.5 transition-transform duration-300">Soluções</div>
                <svg className={`size-4 text-white transition-transform duration-300 ${solucoesOpen ? "rotate-180" : "group-hover:-translate-y-0.5"}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
              </button>
            </div> */}
            <a href="/coworking" className="group relative px-3 pt-2.5 pb-3 flex justify-center items-center">
              <div className="text-center text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest group-hover:-translate-y-0.5 transition-transform duration-300">Coworking</div>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
            </a>
          </div>
          {/* {solucoesOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-neutral-800 rounded-2xl px-4 py-4 grid grid-cols-2 gap-3 z-[9999] border border-white/15 shadow-lg"
              onMouseLeave={() => setSolucoesOpen(false)}>
              <a href="#cursos-online" className="text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest px-3 py-2 hover:bg-white/10 rounded-lg">Educação</a>
              <a href="#tecnologia" className="text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest px-3 py-2 hover:bg-white/10 rounded-lg">Tecnologia</a>
              <a href="#eventos" className="text-white text-base font-normal font-rethink uppercase leading-6 tracking-widest px-3 py-2 hover:bg-white/10 rounded-lg">Eventos</a>
            </div>
          )} */}
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <CTAButton pill href="https://wa.me/5588993841784">Fale com a gente</CTAButton>
      </div>            <button onClick={() => { setMobileOpen(!mobileOpen); }} className="md:hidden size-10 flex justify-center items-center text-white">
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? (
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-neutral-900 z-50 flex flex-col p-6">
          <div className="flex justify-end">
            <button onClick={() => { setMobileOpen(false); }} className="size-10 flex justify-center items-center text-white">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-8">
            <a href="/" className="text-white text-xl font-normal font-rethink uppercase tracking-widest">Início</a>
            <a href="/quem-somos" className="text-white text-xl font-normal font-rethink uppercase tracking-widest">Quem Somos</a>
            <a href="#" className="text-white text-xl font-normal font-rethink uppercase tracking-widest">Trabalhe conosco</a>
            {/* <div>
              <button onClick={() => setSolucoesOpen(!solucoesOpen)} className="flex items-center gap-2 text-white text-xl font-normal font-rethink uppercase tracking-widest">
                Soluções
                <svg className={`size-4 text-white transition-transform duration-300 ${solucoesOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {solucoesOpen && (
                <div className="mt-3 pl-4 flex flex-col gap-3 border-l border-white/20 bg-neutral-900">
                  <a href="#cursos-online" className="text-white/80 text-base font-normal font-rethink uppercase tracking-widest hover:text-white">Educação</a>
                  <a href="#tecnologia" className="text-white/80 text-base font-normal font-rethink uppercase tracking-widest hover:text-white">Tecnologia</a>
                  <a href="#eventos" className="text-white/80 text-base font-normal font-rethink uppercase tracking-widest hover:text-white">Eventos</a>
                </div>
              )}
            </div> */}
            <a href="/coworking" className="text-white text-xl font-normal font-rethink uppercase tracking-widest">Coworking</a>
            <div className="mt-4">
              <CTAButton pill href="https://wa.me/5588993841784">Fale com a gente</CTAButton>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
