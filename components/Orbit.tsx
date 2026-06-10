"use client";

import { motion } from "motion/react";
import { socials, metricsSeed } from "@/content/site";
import { useLiveVisitors } from "@/lib/hooks";
import { socialIcon, ArrowUpRight } from "@/lib/icons";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

function MetricsStrip() {
  const visitors = useLiveVisitors();
  const metrics = [
    { ...metricsSeed[0], value: visitors.toLocaleString(), live: true },
    { ...metricsSeed[1], live: false },
    { ...metricsSeed[2], live: false },
    { ...metricsSeed[3], live: false },
  ];

  return (
    <Reveal>
      <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge/60 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-void/30 p-5">
            <div className="flex items-center gap-1.5">
              {m.live && (
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-neon" />
              )}
              <p className="text-xs uppercase tracking-wider text-ink-faint">
                {m.label}
              </p>
            </div>
            <p className="mt-1.5 font-serif text-2xl font-semibold tabular-nums text-ink sm:text-3xl">
              {m.value}
            </p>
            {m.hint && <p className="mt-0.5 text-xs text-ink-faint">{m.hint}</p>}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Orbit() {
  const active = socials.filter((s) => s.active);
  const upcoming = socials.filter((s) => !s.active);

  return (
    <section id="orbit" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Active Orbit"
        title="Where I operate"
        intro="A live snapshot of presence and reach. Channels in orbit are active now; greyed nodes come online as I expand."
      />

      <div className="mt-10">
        <MetricsStrip />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {active.map((s, idx) => {
          const Icon = socialIcon[s.key];
          const external = s.href.startsWith("http");
          return (
            <Reveal key={s.key} delay={idx * 0.06}>
              <a
                href={s.href}
                target={external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-edge bg-panel/40 p-5 transition-all hover:-translate-y-1 hover:border-electric/50 hover:bg-panel hover:glow-electric"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-edge bg-white/5 text-ink-dim transition-colors group-hover:text-electric-soft">
                    <Icon width={20} height={20} />
                  </span>
                  <ArrowUpRight
                    width={18}
                    height={18}
                    className="text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric-soft"
                  />
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-ink">{s.label}</p>
                  <p className="text-sm text-ink-faint">{s.handle}</p>
                  {s.metric && (
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-edge bg-void/40 px-2.5 py-1 text-xs text-neon-soft">
                      <span className="h-1 w-1 rounded-full bg-neon" />
                      {s.metric}
                    </p>
                  )}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      {upcoming.length > 0 && (
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-edge/70 bg-void/20 p-5">
            <span className="text-xs uppercase tracking-wider text-ink-faint">
              Coming online
            </span>
            {upcoming.map((s) => {
              const Icon = socialIcon[s.key];
              return (
                <span
                  key={s.key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-white/[0.03] px-3 py-1.5 text-sm text-ink-faint"
                  title={`${s.label} — link coming soon`}
                >
                  <Icon width={15} height={15} />
                  {s.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      )}
    </section>
  );
}
