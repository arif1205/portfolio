# portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4 and Motion.

Design inspired by [aelew.com](https://aelew.com) by Andre Lew. This is an independent rebuild; all content and imagery here are placeholders.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customise

- **Content:** `src/lib/data.ts` holds the profile, experience, involvements, projects, socials and giscus settings.
- **Images:** replace the files in `src/assets/img/` (logos, project covers, hero render) and `public/static/img/background.jpg`.
- **Avatar:** `src/components/avatar.tsx` and `src/app/icon.svg`.
- **Guestbook:** uses [giscus](https://giscus.app). Install the giscus GitHub App on this repo for comments to load.

## Credits

Third-party fonts, icons and code are listed in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
