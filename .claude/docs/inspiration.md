# Source & Inspiration

This portfolio recreates the look and behaviour of [aelew.com](https://aelew.com), the personal site of **Andre Lew** ([aelew](https://github.com/aelew)). This file records where the design came from and what in the repo is original, so the origin doesn't get lost again.

## Current state (2026-10-30)

The codebase is a **from-scratch Next.js build** written to match the live aelew.com screen by screen. None of his source code is used: his current site's source is private, and his public repo [`aelew/com`](https://github.com/aelew/com) is an older, archived Astro version with a different design.

| | Live aelew.com (reference) | This repo |
|---|---|---|
| Framework | Next.js on Vercel | Next.js 16 (App Router, `cacheComponents`), Tailwind CSS v4 |
| Pages | home, projects, guestbook, default 404 | same |
| Font | Open Runde | Open Runde (OFL, from the official GitHub release) |
| Nav and section icons | Nucleo Glass | Nucleo Glass (`nucleo-glass` npm package) |
| Brand and tech icons | Simple Icons | Simple Icons, plus an inline LinkedIn glyph |
| Mobile menu | Vaul drawer | Vaul drawer |
| Guestbook | giscus (GitHub Discussions) | giscus, configured in `src/lib/data.ts` |
| Cursor cat | oneko | oneko.js adaptation (MIT, credited in `THIRD_PARTY_NOTICES.md`) |
| Theme | dark by default; light/dark/system switcher | same (`next-themes`) |

## Content

Nothing personal of Andre's (name, bio, jobs, logos, screenshots, avatar, background, hero render) is used.

- `src/lib/data.ts` holds Arif's details from his resume (`~/Desktop/personal_details/resume/md-ariful-islam-29th-oct.pdf`, the general version). That covers the profile, AuthLab / Infancy IT / Pressply experience, SUST education (it replaces the live site's "involvements" section), eight projects, and socials.
- `src/assets/img/logos/`:
  - `authlab.png`: AuthLab's site icon.
  - `sust.png`: from `mysust-server/public/images/sust_logo.png`.
  - `pressply.png`: Pressply's own mark (`pressply.com/media/pressply/pressply_mark.png`) on a white tile.
  - `infancy-it.png`: a generated monogram, because infancyit.com was down.
- `src/assets/img/projects/`:
  - Shopify App Store listing screenshots for the Shopify apps.
  - The WishSupport OG image.
  - Live screenshots of ELORA, MySUST and PocketCarer.
- Hero visual: `src/components/torus-knot.tsx` is a hand-written WebGL (2,3) torus knot with a procedural black-chrome shader. It auto-tumbles, can be dragged, pauses when off-screen or when the tab is hidden, and doesn't auto-spin under reduced motion. Live uses three.js with a matcap in an OffscreenCanvas worker. `hero-{dark,light}.png` remain as the no-WebGL fallback.
- Still placeholders:
  - `public/static/img/background.jpg`
  - `src/components/avatar.tsx` and `src/app/icon.svg` (avatar illustration)

## Design notes (measured from the live site)

- Card: `container-layout` is `max-width: 47.125rem` with 1rem inline padding. The header is sticky with a `rounded-t-xl` top border and backdrop blur, and an eased 15-stop black fade sits under it. The footer has a rounded bottom.
- Section dividers: full-bleed 1px rules with crosshair marks at the card edges (`src/components/divider.tsx`).
- Headings, `header` and `hgroup` are forced to lowercase in CSS; body copy is not.
- Entrance: `.enter-animation` blurs and slides in over 0.7s, staggered 0/200/400/600/800ms. It is disabled under `prefers-reduced-motion`.
- Hero visual: a 300×276 canvas, flush right, with `-my-18` so it spans the full hero height. A background-colour overlay fades out over 1s once the first frame draws. Drop shadows in light mode only. Hidden below 640px.
- Project cards: aspect 61/32, gradient scrim, tech icons, domain, amber star for featured, and a zoom on hover (1.02–1.05).
- Buttons: "view more" and "get in touch" have a slowly rotating beam border (`.beam` in `globals.css`).
- The 404 is Next's built-in not-found page, which also sets a black background and zero body margin, as the live site does.

## Timeline

- **2026-02-28**: First attempt pasted aelew.com's rendered DOM into a Next.js app. The source was later forgotten, then rediscovered through Cursor's local history (`aria-label='aelew'`).
- **2026-10-30**: Tried the archived `aelew/com` Astro repo, then dropped it for this from-scratch rebuild. The rebuild was verified with side-by-side screenshots of every page at 390/768/1440px in dark and light themes, plus the mobile drawer.

## Licensing rules

- Keep `THIRD_PARTY_NOTICES.md` and `src/app/fonts/OpenRunde-LICENSE.txt` in the repo.
- The design is Andre Lew's. Keep the credit line in `README.md`, and consider asking him before presenting it as your own design.
