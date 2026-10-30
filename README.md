# portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4 and Motion.

Design inspired by [aelew.com](https://aelew.com) by Andre Lew. This is an independent rebuild with my own content.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customise

- **Content:** `src/lib/data.ts` holds the profile, experience, certifications, projects, socials and resume link.
- **Images:** replace the files in `src/assets/img/` (logos, project covers, hero render) and `public/static/img/background.jpg`.
- **Avatar:** `src/components/avatar.tsx` and `src/app/icon.svg`.
- **Resume:** replace `public/static/files/md-ariful-islam-resume.pdf`; the `/resume` page previews and downloads it.

## Credits

Third-party fonts, icons and code are listed in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
