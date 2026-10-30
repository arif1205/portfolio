# Source & Inspiration

This portfolio recreates the look and behaviour of [aelew.com](https://aelew.com), the personal site of **Andre Lew** ([aelew](https://github.com/aelew)). This file records where the design came from and what in the repo is original, so the origin doesn't get lost again.

## Current state (2026-10-30)

The codebase is a **from-scratch Next.js build** written to match the live aelew.com screen by screen. None of his source code is used: his current site's source is private, and his public repo [`aelew/com`](https://github.com/aelew/com) is an older, archived Astro version with a different design.

| | Live aelew.com (reference) | This repo |
|---|---|---|
| Framework | Next.js on Vercel | Next.js 16 (App Router, `cacheComponents`), Tailwind CSS v4 |
| Pages | home, projects, guestbook, default 404 | home, projects, **resume** (replaces guestbook; `/guestbook` 308-redirects), default 404 |
| Font | Open Runde | Open Runde (OFL, from the official GitHub release) |
| Nav and section icons | Nucleo Glass | Nucleo Glass (`nucleo-glass` npm package) |
| Brand and tech icons | Simple Icons | Simple Icons, plus an inline LinkedIn glyph |
| Mobile menu | Vaul drawer | Vaul drawer |
| Guestbook | giscus (GitHub Discussions) | removed; `/resume` previews and downloads `public/static/files/md-ariful-islam-resume.pdf` |
| Cursor cat | oneko | oneko.js adaptation (MIT, credited in `THIRD_PARTY_NOTICES.md`) |
| Theme | dark by default; light/dark/system switcher | same (`next-themes`) |

## Content

Nothing personal of Andre's (name, bio, jobs, logos, screenshots, avatar, background, hero render) is used.

- `src/lib/data.ts` holds Arif's details from his resume (`~/Desktop/personal_details/resume/md-ariful-islam-29th-oct.pdf`, the general version). That covers the profile, AuthLab / Infancy IT / Pressply experience, a Certifications section in the live site's "involvements" slot (an Education section was tried and then removed; SUST stays in the hero bio) (two AWS Academy, one KodeKloud Docker, from LinkedIn), twelve projects (incl. FluentCommunity from AuthLab and two more Rapify Shopify apps), and socials.
- `src/assets/img/logos/`:
  - `authlab.png`: AuthLab's site icon.
  - `sust.png`: from `mysust-server/public/images/sust_logo.png`.
  - `pressply.png`: Pressply's own mark (`pressply.com/media/pressply/pressply_mark.png`) on a white tile.
  - `infancy-it.png`: the Infancy IT "i" mark (supplied by Arif) on a square tile in its own background colour.
  - `aws.png`, `kodekloud.png`: the issuers' own site icons.
- `src/assets/img/projects/`:
  - Shopify apps: the first poster in each App Store gallery (the `promotional_image`) for Easy Courier BD and Customer Insights, and listing screenshots for the rest.
  - WishSupport: Arif's 1080×1080 Facebook promo graphic, cropped at `coverPosition: '50% 30%'`.
  - Customer Insights: a banner composed from its App Store poster (logo + UI mock-up, headline removed) so the card title has a clear bottom-left.
  - PocketCarer: the pocketcarer.com hero captured at 1100px (≈ card aspect); the card links to app.pocketcarer.com.
  - FluentCommunity: the wordpress.org plugin banner (3088×1000, centred content survives the card crop). RP Bulk Price Editor / Bulk Delete & Backup: their first App Store posters.
  - Live screenshots of ELORA, MySUST and eSign (admin.student.sust.edu sign-in page; eSign is a separate project from MySUST).
- Hero visual: `src/components/torus-knot.tsx` is a hand-written WebGL (2,3) torus knot with a procedural black-chrome shader. It auto-tumbles, can be dragged, pauses when off-screen or when the tab is hidden, and doesn't auto-spin under reduced motion. Live uses three.js with a matcap in an OffscreenCanvas worker. `hero-{dark,light}.png` remain as the no-WebGL fallback.
- Still placeholders:
  - `public/static/img/background.jpg`
  - `src/components/avatar.tsx` and `src/app/icon.svg` (avatar illustration)

## Design notes (measured from the live site)

- Card: `container-layout` is `max-width: 47.125rem` with 1rem inline padding. The header is sticky with a `rounded-t-xl` top border and backdrop blur, and an eased 15-stop black fade sits under it. The footer has a rounded bottom.
- Section dividers: full-bleed 1px rules with crosshair marks at the card edges (`src/components/divider.tsx`).
- The live site forces headings, `header` and `hgroup` to lowercase. Here only `hgroup p` (tagline, page subtitles) and buttons are lowercase; nav labels and headings keep their written (title) case at Arif's request.
- Entrance: `.enter-animation` blurs and slides in over 0.7s, staggered 0/200/400/600/800ms. It is disabled under `prefers-reduced-motion`.
- Hero visual: a 300×276 canvas, flush right, with `-my-18` so it spans the full hero height. A background-colour overlay fades out over 1s once the first frame draws. Drop shadows in light mode only. Hidden below 640px.
- Project cards: deviates from live's rounded floating tiles. Here they form a square "blueprint" grid (`src/components/project-grid.tsx`): edge to edge across the card, 1px border-coloured gaps as lines, crosshairs at line intersections, and an odd last cell filled. Each tile is aspect 61/32, a heavier gradient scrim than live (`from-black/25 via-black/70 to-black/95`) because these covers are text-heavy posters, tech icons, domain, and a zoom on hover (live also shows an amber star on featured cards; removed here at Arif's request) (1.02–1.05).
- Buttons: "view more" and "get in touch" have a slowly rotating beam border (`.beam` in `globals.css`).
- The 404 is Next's built-in not-found page, which also sets a black background and zero body margin, as the live site does.

## Timeline

- **2026-02-28**: First attempt pasted aelew.com's rendered DOM into a Next.js app. The source was later forgotten, then rediscovered through Cursor's local history (`aria-label='aelew'`).
- **2026-10-30**: Tried the archived `aelew/com` Astro repo, then dropped it for this from-scratch rebuild. The rebuild was verified with side-by-side screenshots of every page at 390/768/1440px in dark and light themes, plus the mobile drawer.

## Deployment

- Vercel project `arif-dev` in the `arif1205s-projects` team, connected to `arif1205/portfolio` (every push to `main` deploys to production).
- Live at https://mdarifulislam.vercel.app (`arif-dev.vercel.app` belongs to someone else; Vercel's fallback `arif-dev-blond.vercel.app` also still works).
- `.vercel/` and the CLI-created `.env.local` (Vercel OIDC token) are gitignored.

## Licensing rules

- Keep `THIRD_PARTY_NOTICES.md` and `src/app/fonts/OpenRunde-LICENSE.txt` in the repo.
- The design is Andre Lew's. Keep the credit line in `README.md`, and consider asking him before presenting it as your own design.
