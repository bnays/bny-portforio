"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set("[data-hero-in], [data-reveal]", { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    const ctx = gsap.context(() => {
      // Hero entrance — waits for the loader to clear, or reduced motion's immediate finish
      const playHero = () => {
        gsap.fromTo(
          "[data-hero-in]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.09 }
        );
      };
      window.addEventListener("loader-complete", playHero, { once: true });

      // Scroll-triggered reveals for everything below the fold
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
