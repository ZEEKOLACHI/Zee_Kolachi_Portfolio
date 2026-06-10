"use client";

import { contact, identity, socials } from "@/content/site";
import Reveal from "@/components/Reveal";
import {
  socialIcon,
  DownloadIcon,
  WhatsAppIcon,
  MailIcon,
  ArrowUpRight,
} from "@/lib/icons";

export default function Contact() {
  const channels = socials.filter((s) => s.active);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-edge bg-gradient-to-br from-panel/80 to-void/40 p-8 sm:p-12 lg:p-16">
          {/* glow accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-neon/10 blur-3xl" />

          <div className="relative">
            <p className="eyebrow">Open Channel</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {contact.ctaTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-dim">
              {contact.ctaSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-neon px-5 py-3 font-semibold text-void transition-all hover:glow-neon"
              >
                <WhatsAppIcon width={18} height={18} />
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-electric px-5 py-3 font-semibold text-white transition-all hover:glow-electric"
              >
                <MailIcon width={18} height={18} />
                Email me
              </a>
              <a
                href={identity.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-white/5 px-5 py-3 font-medium text-ink transition-colors hover:bg-white/10"
              >
                <DownloadIcon width={18} height={18} />
                Download CV
              </a>
            </div>

            <div className="mt-10 grid gap-4 border-t border-edge/60 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-faint">
                  Direct
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block text-ink transition-colors hover:text-electric-soft"
                >
                  {contact.email}
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-ink transition-colors hover:text-electric-soft"
                >
                  {contact.phone}
                </a>
                <p className="mt-1 text-sm text-ink-faint">📍 {identity.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-faint">
                  Find me
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {channels.map((s) => {
                    const Icon = socialIcon[s.key];
                    const external = s.href.startsWith("http");
                    return (
                      <a
                        key={s.key}
                        href={s.href}
                        target={external ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="group flex items-center gap-2 rounded-xl border border-edge bg-white/5 px-3 py-2 text-sm text-ink-dim transition-all hover:border-electric/50 hover:text-electric-soft"
                      >
                        <Icon width={16} height={16} />
                        {s.label}
                        <ArrowUpRight
                          width={13}
                          height={13}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
