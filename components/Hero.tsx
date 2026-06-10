"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { identity, socials, achievements, projects } from "@/content/site";
import { useLiveVisitors } from "@/lib/hooks";
import {
  ArrowUpRight,
  DownloadIcon,
  RadarIcon,
  SparkIcon,
  socialIcon,
} from "@/lib/icons";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % identity.roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.4em] align-top">
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-gradient font-semibold"
      >
        {identity.roles[i]}
      </motion.span>
    </span>
  );
}

function DashboardCard({
  children,
  className = "",
  delay = 0,
  float = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  float?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-2xl p-4 ${float ? "float-soft" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const visitors = useLiveVisitors();
  const activeSocials = socials.filter((s) => s.active);
  const topAchievement = achievements[0];
  const projectCount = projects.length;

  return (
    <section
      id="main"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:pt-32"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* ---------------- Identity side ---------------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-3.5 py-1.5"
          >
            <span className="live-dot h-2 w-2 rounded-full bg-neon" />
            <span className="text-xs font-medium tracking-wide text-neon-soft">
              {identity.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            {identity.fullName.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-ink-dim">
              {identity.fullName.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 text-lg text-ink-dim sm:text-xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-dim/90"
          >
            {identity.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-electric px-5 py-3 font-semibold text-white transition-all hover:glow-electric"
            >
              Explore the work
              <ArrowUpRight
                width={18}
                height={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={identity.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-edge bg-white/5 px-5 py-3 font-medium text-ink transition-colors hover:bg-white/10"
            >
              <DownloadIcon width={18} height={18} />
              Download CV
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 text-sm text-ink-faint"
          >
            📍 {identity.location}
          </motion.p>
        </div>

        {/* ---------------- Mission dashboard side ---------------- */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-electric/5 blur-3xl" />
          <DashboardCard className="glass-strong" delay={0.2}>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RadarIcon width={18} height={18} className="text-neon" />
                <span className="eyebrow !text-ink-faint">Mission Dashboard</span>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-neon-soft">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-neon" />
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Visitor counter */}
              <div className="col-span-2 rounded-xl border border-edge/60 bg-void/40 p-4">
                <p className="text-xs text-ink-faint">Visitors all-time</p>
                <p className="mt-1 font-serif text-3xl font-semibold tabular-nums text-ink">
                  {visitors.toLocaleString()}
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-edge">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-electric to-neon" />
                </div>
              </div>

              {/* Achievement highlight */}
              <DashboardCard delay={0.4} float className="!bg-electric/5">
                <SparkIcon width={16} height={16} className="text-electric-soft" />
                <p className="mt-2 text-xs text-ink-faint">Latest milestone</p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-ink">
                  {topAchievement.year} · {topAchievement.title.split("—")[0].trim()}
                </p>
              </DashboardCard>

              {/* Project impact */}
              <DashboardCard delay={0.5} float className="!bg-neon/5">
                <p className="font-serif text-2xl font-semibold text-neon-soft">
                  {projectCount}+
                </p>
                <p className="text-xs text-ink-faint">Case studies</p>
                <p className="mt-1 text-[0.7rem] text-ink-dim">
                  AI · Data · Delivery
                </p>
              </DashboardCard>

              {/* Social presence */}
              <div className="col-span-2 rounded-xl border border-edge/60 bg-void/40 p-3">
                <p className="mb-2 text-xs text-ink-faint">Active presence</p>
                <div className="flex flex-wrap gap-2">
                  {activeSocials.map((s) => {
                    const Icon = socialIcon[s.key];
                    return (
                      <a
                        key={s.key}
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-white/5 text-ink-dim transition-all hover:scale-105 hover:border-electric/50 hover:text-electric-soft"
                      >
                        <Icon width={17} height={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </section>
  );
}
