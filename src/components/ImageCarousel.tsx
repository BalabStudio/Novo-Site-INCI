"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
const images = [
  "/images/cards/card_img1.webp",
  "/images/cards/card_img2.webp",
  "/images/cards/card_img3.webp",
  "/images/cards/card_img4.webp",
  "/images/cards/card_img5.webp",
  "/images/cards/card_img6.webp",
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tw = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -tw,
      duration: 20,
      ease: "none",
      repeat: -1,
      force3D: true,
      modifiers: {
        x: (x) => parseFloat(x) % tw + "px",
      },
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <div className="relative overflow-hidden -mx-14">
      <div ref={trackRef} className="inline-flex justify-start items-start gap-5" style={{ willChange: "transform" }}>
        {[...images, ...images].map((img, i) => (
          <img key={i < images.length ? `a-${i}` : `b-${i - images.length}`} src={img} alt={`Galeria ${(i % images.length) + 1}`} className="rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
