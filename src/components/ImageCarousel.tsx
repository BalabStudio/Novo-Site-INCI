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

    gsap.to(track, {
      x: -tw,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => parseFloat(x) % tw + "px",
      },
    });
  }, []);

  return (
    <div className="relative overflow-hidden -mx-14">
      <div ref={trackRef} className="inline-flex justify-start items-start gap-5">
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} alt="" className="rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
