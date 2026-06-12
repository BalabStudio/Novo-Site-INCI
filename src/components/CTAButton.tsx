"use client";
import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

export default function CTAButton({
  children = "Fale com a gente",
  variant = "blue",
  sectionId = "pricing-section",
  pill,
  className,
}: {
  children?: ReactNode;
  variant?: "blue" | "gray";
  sectionId?: string;
  pill?: boolean;
  className?: string;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const overlay = btn.querySelector<HTMLElement>("[data-cta-overlay]");
    const arrow = btn.querySelector<HTMLElement>("[data-cta-arrow]");
    if (!overlay) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        overlay,
        { scale: 0 },
        { scale: 2.5, duration: 1, ease: "power2.out" },
        0
      );
      if (arrow) {
        tl.to(arrow, { rotation: 45, duration: 0.6, ease: "power2.out" }, 0);
      }

      btn.addEventListener("mouseenter", () => tl.play());
      btn.addEventListener("mouseleave", () => tl.reverse());
    }, btn);

    return () => ctx.revert();
  }, []);

  const outerBg = variant === "gray" ? "bg-gray-200" : "bg-blue-500";
  const overlayBg = variant === "gray" ? "bg-blue-500" : "bg-neutral-900";
  const textColor =
    variant === "gray" ? "text-neutral-900" : "text-white";

  return (
    <a
      ref={btnRef}
      href={`#${sectionId}`}
      onClick={handleScroll}
      className={`w-full md:w-auto ${className ?? ""}`}
    >
      {pill ? (
        <div className={`min-h-12 px-8 py-2.5 ${outerBg} rounded-[80px] inline-flex justify-center items-center cursor-pointer relative overflow-hidden`}>
          <div
            data-cta-overlay
            className={`absolute inset-0 rounded-[80px] ${overlayBg} origin-center pointer-events-none`}
          />
          <span
            data-cta-text
            className={`${textColor} text-base font-normal font-rethink leading-4 relative z-10`}
          >{children}</span>
        </div>
      ) : (
        <div className={`p-1 ${outerBg} rounded-[80px] w-full flex justify-center items-center cursor-pointer relative overflow-hidden`}>
          <div
            data-cta-overlay
            className={`absolute inset-0 rounded-[80px] ${overlayBg} origin-center pointer-events-none`}
          />
          <div className="pl-6 pr-2 py-1.5 md:py-0 rounded-[80px] w-full flex justify-between items-center gap-3 overflow-hidden relative z-10">
            <div className="inline-flex flex-col justify-start items-start">
              <div
                data-cta-text
                className={`${textColor} text-sm md:text-base font-normal font-rethink leading-5 md:leading-4`}
              >{children}</div>
            </div>
            <div className="size-10 bg-neutral-900 rounded-[40px] flex justify-center items-center">
              <svg
                data-cta-arrow
                width="20" height="20" viewBox="0 0 20 20" fill="none"
              >
                <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </a>
  );
}
