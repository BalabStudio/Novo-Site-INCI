"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.remove();
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(overlay, { y: "100%" });

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        delay: 0.4,
      });
      tl.to(overlay, { y: 0, duration: 0.7 })
        .to(overlay, { y: "-100%", duration: 0.85 }, "+=0.3")
        .call(() => overlay.remove());
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-[#0f1b38] flex flex-col items-center justify-center pointer-events-none"
    >
      <img src="/images/logos/logo_icon.svg" alt="INCI" className="w-16 h-auto opacity-80" />
    </div>
  );
}
