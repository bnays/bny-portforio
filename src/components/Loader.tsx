"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Loader.module.css";

const WORDS = ["FULL-STACK ENGINEER", "REACT & NEXT.JS", "APPLIED AI RESEARCH"];

export default function Loader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const wordEl = wordRef.current;
    if (!root || !wordEl) return;

    const finish = () => {
      document.body.style.overflow = "";
      gsap.set(root, { display: "none" });
      window.dispatchEvent(new Event("loader-complete"));
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";

    const IN = 0.3;
    const HOLD = 0.28;
    const OUT = 0.24;

    const tl = gsap.timeline({ onComplete: finish, delay: 0.1 });

    WORDS.forEach((word, i) => {
      tl.call(() => {
        wordEl.textContent = word;
      });
      tl.fromTo(
        wordEl,
        { opacity: 0, filter: "blur(8px)", y: 6 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: IN, ease: "power2.out" }
      );
      if (i < WORDS.length - 1) {
        tl.to(
          wordEl,
          { opacity: 0, filter: "blur(8px)", y: -6, duration: OUT, ease: "power2.in" },
          `+=${HOLD}`
        );
      } else {
        tl.to(wordEl, { duration: HOLD });
      }
    });

    tl.to(root, { yPercent: -100, duration: 0.75, ease: "power3.inOut" }, "+=0.15");

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.loader} aria-hidden="true">
      <div className={styles.inner}>
        <span className={styles.name}>Binaya Maharjan</span>
        <span className={styles.divider} />
        <span ref={wordRef} className={styles.word}>
          {WORDS[0]}
        </span>
      </div>
    </div>
  );
}
