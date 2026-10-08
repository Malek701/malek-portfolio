# Malek Al Bikawi — portfolio

## Run locally
1. Install Node.js 18+.
2. Run `npm install` and then `npm run dev`.
3. Open `http://localhost:3000`.

## Updating content
Projects and achievements are arrays at the top of `app/page.tsx`. Add a new project object to `projects` and update its title, metadata and description. The visual is intentionally CSS-generated, so screenshots can later replace `.projectArt` in each project card.

## Deploy
Push the folder to GitHub and import it into Vercel, or run `npm run build` to verify a production build before deploying.
