"use client";

import { useEffect, useState } from "react";
import { identity } from "@/content/site";
import { DownloadIcon, MenuIcon, CloseIcon } from "@/lib/icons";

const links = [
  { href: "#orbit", label: "Orbit" },
  { href: "#dossier", label: "Dossier" },
  { href: "#projects", label: "Projects" },
  { href: "#signal", label: "Signal" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        <a href="#main" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-neon/40 bg-neon/10 font-serif text-lg font-bold text-neon transition-transform group-hover:scale-105">
            Z
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            {identity.brand}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={identity.cvPath}
            download
            className="hidden items-center gap-1.5 rounded-xl border border-electric/40 bg-electric/10 px-3.5 py-2 text-sm font-medium text-electric-soft transition-all hover:glow-electric hover:bg-electric/20 sm:flex"
          >
            <DownloadIcon width={16} height={16} />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-edge bg-white/5 text-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <ul className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={identity.cvPath}
                download
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-lg border border-electric/40 bg-electric/10 px-4 py-3 font-medium text-electric-soft"
              >
                <DownloadIcon width={16} height={16} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
