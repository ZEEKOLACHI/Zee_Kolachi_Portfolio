"use client";

import { education, certifications, languages } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Training & Clearance"
        title="Education & certifications"
        intro="Formal study and continuous upskilling — from a B.Sc foundation to a postgraduate diploma and an active Agentic AI architecture program."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        {/* Education timeline */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink-faint">
            <span className="h-px w-8 bg-edge" />
            Education
          </h3>
          <ol className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={`${e.title}-${i}`} delay={i * 0.04} as="li">
                <div className="rounded-2xl border border-edge bg-panel/30 p-5 transition-colors hover:border-electric/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-lg font-semibold text-ink">
                      {e.title}
                    </h4>
                    <span className="rounded-full border border-edge bg-void/40 px-2.5 py-0.5 text-xs text-ink-faint">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-electric-soft">
                    {e.org}
                  </p>
                  {e.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                      {e.detail}
                    </p>
                  )}
                  {e.result && (
                    <p className="mt-2 inline-block rounded-md border border-edge bg-void/40 px-2 py-0.5 text-xs text-ink-dim">
                      Result: {e.result}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Certifications + languages */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink-faint">
              <span className="h-px w-8 bg-edge" />
              Certifications
            </h3>
            <Reveal>
              <ul className="divide-y divide-edge/60 overflow-hidden rounded-2xl border border-edge bg-panel/30">
                {certifications.map((c) => (
                  <li
                    key={c.course}
                    className="flex items-center justify-between gap-3 p-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink">{c.course}</p>
                      <p className="text-xs text-ink-faint">{c.provider}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-sm font-semibold text-neon-soft">
                        {c.score}
                      </p>
                      <p className="text-xs text-ink-faint">{c.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink-faint">
              <span className="h-px w-8 bg-edge" />
              Languages
            </h3>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-edge bg-void/40 px-3 py-1.5 text-sm text-ink-dim"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
