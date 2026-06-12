"use client";

import { useEffect, useRef } from "react";
import AboutHero from "@/components/AboutHero";
import AboutServicesSection from "@/components/AboutServicesSection";
import AboutMissionSection from "@/components/AboutMissionSection";
import AboutPurposeSection from "@/components/AboutPurposeSection";
import AboutValuesSection from "@/components/AboutValuesSection";
import Footer from "@/components/Footer";

function initGrain(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  let w: number, h: number, frame: number;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function render() {
    const imageData = ctx.createImageData(w, h);
    const buf = imageData.data;
    for (let i = 0; i < buf.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      buf[i] = buf[i + 1] = buf[i + 2] = v;
      buf[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    frame = requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize);
  resize();
  render();
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
  };
}

export default function QuemSomos() {
  const grainRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!grainRef.current) return;
    return initGrain(grainRef.current);
  }, []);

  return (
    <div className="bg-white overflow-hidden relative">
      <canvas ref={grainRef} className="grain" aria-hidden="true" />
      <main className="relative z-10 flex flex-col items-center gap-10 md:gap-16 py-3 md:px-6">
        <AboutHero />
        <AboutServicesSection />
        <AboutMissionSection />
        <AboutPurposeSection />
        <AboutValuesSection />
        <Footer />
      </main>
    </div>
  );
}
