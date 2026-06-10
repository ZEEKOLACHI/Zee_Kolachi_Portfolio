"use client";

import { motion } from "motion/react";
import { skillGroups, roles, achievements } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SparkIcon } from "@/lib/icons";

function Skills() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((g, i) => (
        <Reveal key={g.label} delay={i * 0.06}>
          <div className="h-full rounded-2xl border border-edge bg-panel/40 p-5">
            <p className="eyebrow !text-electric-soft">{g.label}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-edge bg-white/[0.03] px-2.5 py-1 text-xs text-ink-dim"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="mt-8">
      <Reveal>
        <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink-faint">
          <span className="h-px w-8 bg-edge" />
          Field Record · Experience
        </h3>
      </Reveal>
      <ol className="relative border-l border-edge/70 pl-6">
        {roles.map((r, i) => (
          <Reveal key={`${r.title}-${i}`} delay={i * 0.05} as="li">
            <div className="relative mb-8">
              <span
                className={`absolute -left-[1.84rem] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 ${
                  r.current
                    ? "border-neon bg-neon/30 live-dot"
                    : "border-electric/60 bg-void"
                }`}
              />
              <div className="rounded-2xl border border-edge bg-panel/30 p-5 transition-colors hover:border-electric/40 hover:bg-panel/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-serif text-lg font-semibold text-ink">
                    {r.title}
                  </h4>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs ${
                      r.current
                        ? "border-neon/40 bg-neon/10 text-neon-soft"
                        : "border-edge bg-void/40 text-ink-faint"
                    }`}
                  >
                    {r.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-electric-soft">
                  {r.org}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {r.summary}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {r.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-ink-dim/85"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function Achievements() {
  return (
    <div className="mt-8">
      <Reveal>
        <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink-faint">
          <span className="h-px w-8 bg-edge" />
          Commendations · Achievements
        </h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-edge bg-gradient-to-br from-panel/60 to-void/30 p-5 transition-all hover:border-neon/40 hover:glow-neon">
              <div className="flex items-center justify-between">
                <SparkIcon
                  width={18}
                  height={18}
                  className="text-neon transition-transform group-hover:rotate-45"
                />
                <span className="font-serif text-2xl font-semibold text-ink/30">
                  {a.year}
                </span>
              </div>
              <h4 className="mt-3 font-semibold leading-snug text-ink">
                {a.title}
              </h4>
              <p className="mt-1.5 text-sm text-ink-dim">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Dossier() {
  return (
    <section id="dossier" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Intelligence Dossier"
        title="The record, declassified"
        intro="Six years of cross-sector operations — finance, administration, customer relations, and education — now compounding into an AI-native skill set."
      />
      <Skills />
      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <ExperienceTimeline />
        <Achievements />
      </div>
    </section>
  );
}
