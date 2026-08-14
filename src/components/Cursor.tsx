"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Cursor.module.css";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Decide once whether this device gets a custom cursor
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduceMotion) {
      document.body.classList.add("cursor-none");
      setEnabled(true);
    }
    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, []);

  // Wire up tracking only after the dot/ring have actually mounted
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.32, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest?.(HOVER_SELECTOR)) setHovering(true);
    };
    const out = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest?.(HOVER_SELECTOR)) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className={`${styles.ring} ${hovering ? styles.hover : ""}`} />
      <div ref={dotRef} className={styles.dot} />
    </>
  );
}
