"use client";

import { useEffect, useRef, useState } from "react";

/** Animate a number from 0 → target when it scrolls into view. */
export function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      // Syncing to an external system (matchMedia) read on mount — must live in an effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { value, ref };
}

/**
 * Simulated "live" visitor counter for v1.
 * - Persists a per-visitor base in localStorage so the number feels stable.
 * - Gently ticks up while the page is open to feel alive.
 * Swap this for a real analytics call later.
 */
export function useLiveVisitors(seed = 12480) {
  const [count, setCount] = useState(seed);

  useEffect(() => {
    let base = seed;
    try {
      const stored = window.localStorage.getItem("zk_visits");
      base = stored ? parseInt(stored, 10) : seed + Math.floor(Math.random() * 40);
      base += 1; // this visit
      window.localStorage.setItem("zk_visits", String(base));
    } catch {
      /* localStorage unavailable — fall back to seed */
    }
    // Seeded from localStorage (external system) on mount; can't be a lazy initializer (SSR-safe).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(base);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setCount((c) => c + (Math.random() > 0.6 ? 1 : 0));
    }, 5000);
    return () => clearInterval(id);
  }, [seed]);

  return count;
}
