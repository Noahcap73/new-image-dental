# New Image Dental — Next.js App

A modern, responsive website for New Image Dental built with Next.js (App Router), React, and Tailwind CSS. The site includes a home page with services highlights, reviews, office hours with an embedded map, an About section introducing the dentists, and a Booking page with call-to-book details. A Contact API route is included for sending messages via email.

## Features
- Home page with hero, services cards, reviews, and call-to-action booking bar
- About section highlighting Dr. Bea Samiano and Dr. Matt Marrujo
- Booking page with click-to-call phone numbers and "online booking coming soon" notice
- Office Hours and Google Maps embed for location
- Global header and footer
- Contact API (Nodemailer) for sending messages to clinic inbox

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion (for animations)
- React Icons
- Nodemailer (server-side email)
- DaisyUI
- TypeScript

## Prerequisites
- Node.js 18+ (recommended LTS)
- Package manager: npm (bundled), or yarn/pnpm/bun if preferred

## Local Development
1. Install dependencies:
   - npm install
2. Start the dev server:
   - npm run dev
3. Open http://localhost:3000 in your browser.

## Environment Variables (Email)
The contact API at `src/app/api/contact/route.ts` uses Nodemailer with Gmail. Create a `.env.local` file in the project root (gitignored) with:

```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=destination_inbox@example.com
```

Notes:
- For Gmail, you must use an App Password (Google Account -> Security -> 2‑Step Verification -> App passwords). Regular passwords will not work.
- In production (e.g., Vercel), set these as Project Environment Variables.

## Available Scripts
- dev: next dev --turbopack
- build: next build --turbopack
- start: next start
- lint: eslint

## Project Structure (high level)
- src/app/page.tsx — Home page
- src/app/about/page.tsx — About page
- src/app/booking/page.tsx — Booking page (call to book)
- src/app/contact/page.tsx — Contact page (form WIP)
- src/app/api/contact/route.ts — Email API
- src/app/layout.tsx — Root layout with Header/Footer and fonts
- src/components/** — Reusable UI (Navbar/Header/Footer, BookingButton, etc.)
- public/** — Static assets (images, logo)


