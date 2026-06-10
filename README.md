# ZEEKOLACHI — Personal Portfolio

A premium, dark "AI control-room" portfolio for **Zeeshan Ahmed Kolachi** — Agentic AI Architect (in training), Data Science practitioner, and primary school teacher.

Built with **Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion (Framer Motion)**.

---

## ✨ What's inside

- **Cinematic split hero** — identity + a live "mission dashboard" (visitor counter, social presence, milestone, project impact).
- **Active Orbit** — social links + a tasteful live metrics strip (simulated for v1).
- **Intelligence Dossier** — skills, an experience timeline, and an achievements grid.
- **Training & Clearance** — education, certifications, and languages (from your CV).
- **Case Files** — interactive project cards that expand into full challenge → process → result stories.
- **Signal Board** — testimonials wall.
- **Open Channel** — contact CTA (WhatsApp, email) + CV download.
- **AI Assistant** — a real **Gemini-powered** assistant (server-side, key never exposed) that answers questions about you from your CV and jumps to relevant sections. Falls back automatically to a built-in scripted assistant if the API is unavailable.
- Mobile-first, accessible (skip link, focus states, reduced-motion support), and SEO-ready (metadata, JSON-LD, sitemap, robots).

---

## 🚀 Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm run start    # serve the production build
```

---

## ✏️ Edit your content (one place)

**Everything** the site shows lives in [`content/site.ts`](content/site.ts). Open it and edit the plain data — no need to touch components.

Items marked `// TODO` still need you:

- **Projects** (`projects`) — replace the 3 draft case studies with your real ones.
- **Testimonials** (`testimonials`) — add real quotes from colleagues/supervisors.
- **Socials** (`socials`) — add Facebook / X / YouTube URLs and flip `active: true`. Follower/metric strings are placeholders.
- **CV** — already wired to `public/cv/Zeeshan_Ahmed_Kolachi_CV.pdf`. Replace that file to update.
- **Photo (optional)** — drop a headshot at `public/profile.jpg`.

---

## 🤖 AI Assistant (Gemini)

The assistant is **live** and powered by Google Gemini, running **server-side** so the API key is never exposed to the browser.

- **Config:** `.env.local` holds `GEMINI_API_KEY` and `GEMINI_MODEL` (default `gemini-2.5-flash`). This file is gitignored — see `.env.example`.
- **Route:** [`app/api/assistant/route.ts`](app/api/assistant/route.ts) builds the request; the system prompt + knowledge come from your CV via `lib/assistant.ts` (`SYSTEM_PROMPT`).
- **Guardrails:** it only answers from your profile data and declines off-topic questions.
- **Fallback:** if the key is missing or the API errors, it silently falls back to the built-in scripted assistant — the site never breaks.

> ⚠️ If your key was ever shared publicly, rotate it at
> [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and update `.env.local`.

## 🔌 Other "live" features (simulated in v1)

These are intentionally simulated so the site works with zero extra keys:

| Feature | Where to wire it | Notes |
|---|---|---|
| Visitor analytics | `lib/hooks.ts` → `useLiveVisitors` | Swap for Vercel Analytics / Plausible. |
| Social feeds | `components/Orbit.tsx` | GitHub/YouTube have free APIs; LinkedIn/Instagram heavily restrict theirs. |

The UI stays the same — you only change the data source.

---

## 🌐 Deploy (recommended: Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com](https://vercel.com) → it auto-detects Next.js, no config.
3. In Vercel → **Settings → Environment Variables**, add `GEMINI_API_KEY` (and optionally `GEMINI_MODEL`). The assistant needs this in production.
4. Add your custom domain in Vercel's **Domains** settings and point your DNS there.
5. Update `seo.url` in `content/site.ts` to your final domain.

> Note: because the assistant uses a server API route, deploy to a platform that runs Node (Vercel, Netlify, a VPS) — not pure static hosting. Everything else on the site is static.

Free tier covers a personal portfolio comfortably and includes HTTPS + a global CDN.

---

## 🎨 Design tokens

Colors, fonts, glass/glow effects, and animations are defined in [`app/globals.css`](app/globals.css) (electric blue, neon green, silver on a deep void background; Fraunces serif + Inter sans).

---

<details>
<summary><strong>Original creative brief (vision)</strong></summary>

Create a premium personal portfolio website that feels like a living AI control room rather than a normal portfolio: a cinematic split-screen hero, a dynamic mission dashboard, an immersive scroll narrative with progressive disclosure, an achievements timeline like an intelligence dossier, project case studies that expand into full stories, a testimonials signal board, a confident contact CTA with downloadable CV, and an elegant, non-intrusive AI assistant — dark, high-contrast, electric blue / neon green / silver, with editorial serif + clean sans, glassmorphism, soft glow, subtle motion, fast, mobile-first, accessible, and SEO-friendly.

</details>
