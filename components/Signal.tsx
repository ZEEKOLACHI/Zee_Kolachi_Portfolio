"use client";

import { testimonials } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Signal() {
  const hasDrafts = testimonials.some((t) => t.placeholder);
  return (
    <section id="signal" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Signal Board"
        title="Voices on the record"
        intro="Curated endorsements from people I've worked with. A signal board of trust, not noise."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <figure className="relative flex h-full flex-col rounded-2xl border border-edge bg-gradient-to-br from-panel/60 to-void/20 p-6">
              <span
                aria-hidden
                className="font-serif text-5xl leading-none text-electric/40"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-edge/60 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-faint">{t.title}</p>
              </figcaption>
              {t.placeholder && (
                <span className="absolute right-4 top-4 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-amber-300/90">
                  Draft
                </span>
              )}
            </figure>
          </Reveal>
        ))}
      </div>

      {hasDrafts && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-xs text-ink-faint">
            Replace these with real quotes from colleagues or supervisors in{" "}
            <code className="rounded bg-void/60 px-1.5 py-0.5 text-ink-dim">
              content/site.ts
            </code>
            .
          </p>
        </Reveal>
      )}
    </section>
  );
}
