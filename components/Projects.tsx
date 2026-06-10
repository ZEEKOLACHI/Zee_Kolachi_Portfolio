"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, type Project } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ChevronDown } from "@/lib/icons";

function CaseStudyRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-edge pl-4">
      <p className="text-xs uppercase tracking-widest text-neon-soft">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-dim">{body}</p>
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <motion.div
        layout
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-gradient-to-br from-panel/60 to-void/20 transition-colors hover:border-electric/40"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex flex-col gap-3 p-6 text-left"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-electric/30 bg-electric/10 px-2.5 py-1 text-xs font-medium text-electric-soft">
              {p.category}
            </span>
            {p.placeholder && (
              <span
                className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-amber-300/90"
                title="Add your real project details in content/site.ts"
              >
                Draft
              </span>
            )}
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink">{p.name}</h3>
          <p className="text-sm text-ink-dim">{p.tagline}</p>

          <div className="mt-1 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-edge bg-white/[0.03] px-2 py-0.5 text-xs text-ink-faint"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-edge/60 pt-3">
            <span className="font-serif text-sm font-semibold text-neon-soft">
              {p.outcome}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink-faint">
              {open ? "Hide story" : "Read story"}
              <ChevronDown
                width={16}
                height={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 px-6 pb-6">
                <div className="rounded-xl bg-void/40 p-2 text-xs text-ink-faint">
                  Role: <span className="text-ink-dim">{p.role}</span>
                </div>
                <CaseStudyRow label="Challenge" body={p.challenge} />
                <CaseStudyRow label="Process" body={p.process} />
                <CaseStudyRow label="Result" body={p.result} />
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-electric/40 bg-electric/10 px-3 py-2 text-sm font-medium text-electric-soft transition-colors hover:bg-electric/20"
                  >
                    View project <ArrowUpRight width={15} height={15} />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const hasDrafts = projects.some((p) => p.placeholder);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Case Files"
        title="Projects, in depth"
        intro="Each file expands into the full story — the challenge, the process, and the measurable result. Tap a card to open it."
      />

      <div className="mt-12 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {hasDrafts && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-xs text-ink-faint">
            Cards marked <span className="text-amber-300/90">Draft</span> are
            scaffolded — replace them with your real project stories in{" "}
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
