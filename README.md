# Flymac Studios — Portfolio

A minimal, editorial portfolio homepage built with **Next.js (App Router)** and **Tailwind CSS**. Split hero layout: full-height video on the left, centered copy and CTA on the right.

## Features

- **50/50 split layout** on desktop (video left, content right)
- **Responsive**: stacks vertically on mobile (video on top, content below)
- **Hero video**: autoplay, muted, loop; optional disable on mobile for performance
- **Accessibility**: semantic HTML, focus states, keyboard-navigable CTA
- **SEO**: metadata and Open Graph for the homepage

## Setup

```bash
npm install
```

## Hero video

Place your hero video at **`public/hero-video.mp4`** (MP4, H.264). If the file is missing or fails to load, a dark gradient placeholder is shown. On mobile, video is disabled by default and the gradient is shown for faster load.

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — App Router pages and layout
- `src/components/` — `Layout`, `HeroVideo`, `HeroContent`
- `public/` — static assets (e.g. `hero-video.mp4`)

## Customization

- **Brand / copy**: Edit `HeroContent.tsx` (brand name, headline, subtitle, CTA, social links).
- **Video**: Change `src`/`poster`/`disableOnMobile` in `HeroVideo` (used in `page.tsx`).
- **Colors / typography**: Adjust `tailwind.config.ts` and `globals.css`; fonts are set in `layout.tsx` (Cormorant Garamond, Inter).
