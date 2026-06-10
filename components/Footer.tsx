import { identity, socials } from "@/content/site";
import { socialIcon } from "@/lib/icons";

export default function Footer() {
  const channels = socials.filter((s) => s.active);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge/60 bg-void/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-neon/40 bg-neon/10 font-serif text-sm font-bold text-neon">
            Z
          </span>
          <p className="text-sm text-ink-faint">
            © {year} {identity.fullName} ·{" "}
            <span className="text-ink-dim">{identity.brand}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
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
                className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-white/5 text-ink-faint transition-colors hover:text-electric-soft"
              >
                <Icon width={16} height={16} />
              </a>
            );
          })}
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-ink-faint/70">
        Built as a human + AI personal operating system.
      </p>
    </footer>
  );
}
