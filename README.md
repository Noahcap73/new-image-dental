This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Add this project to GitHub

1. Create an empty repository on GitHub (no README/license/gitignore). Copy the repo URL, e.g. `https://github.com/<your-username>/<repo>.git`.
2. Ensure Git is initialized locally and all files are committed:
   - git init
   - git add .
   - git commit -m "Initial commit"
3. Point your local repo to GitHub and push:
   - git branch -M main
   - git remote add origin https://github.com/<your-username>/<repo>.git
   - git push -u origin main

Notes:
- Secrets like EMAIL_USER/EMAIL_PASS should be stored in a local .env file (already gitignored) and added as repository or deployment secrets (e.g., Vercel Project Environment Variables) rather than committed.
- The .idea and .vscode folders are ignored by default to avoid committing IDE settings.
