<div align="center">

# Hastakala - हस्तकला

**Where tradition finds a market.**

*An e-commerce frontend platform for handcrafted goods - connecting artisans directly with buyers.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-hast--kala.vercel.app-indigo?style=for-the-badge&logo=vercel)](https://hast-kala.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-shubhamxpawar%2Fhastkala-black?style=for-the-badge&logo=github)](https://github.com/shubhamxpawar/hastkala)

</div>

---

## What is Hastakala?

Hastakala (*Sanskrit: हस्तकला - "work of the hands"*) is a frontend-focused e-commerce platform built for artisans who sell traditional handcrafted goods. The platform lets anyone list, discover, and buy handicrafts - pottery, weaving, embroidery, wood carving, and more, directly from the makers.

Built for **Frontend Battle 2026** under the *E-Commerce & Customer Experience* theme.

---

## Live

| | Link |
|---|---|
| 🌐 Deployed | [hast-kala.vercel.app](https://hast-kala.vercel.app/) |
| 💻 Repository | [github.com/shubhamxpawar/hastkala](https://github.com/shubhamxpawar/hastkala) |

---

## Design Language

The visual identity is built around a **hand-drawn aesthetic** - intentionally imperfect, warm, and artisan-native.

- **Handwritten typography** using `Caveat` (display), `Kalam` (accents), `Lora` (body), and `DM Mono` (data/prices)
- **Off-grid layouts** - cards are slightly rotated, sections are deliberately "off" to mimic a handmade feel
- **Hard offset shadows** - stamp-style, no soft blurs
- **Ink-style borders** and SVG decorative doodles throughout
- **Aged parchment palette** - paper, indigo, turmeric, clay - drawn from real Indian dye and craft materials

Paired with modern motion: **Lenis smooth scroll** and **Framer Motion** scroll-triggered reveals keep the experience premium without breaking the analog soul of the design.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vite (ReactJS) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Smooth Scroll | Lenis |
| Fonts | Google Fonts (Caveat, Kalam, Lora, DM Mono) |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage - hero, featured products, artisan spotlight, how it works |
| `/shop` | Product listing with filters (category, price, region, material) |
| `/product/[slug]` | Product detail - gallery, artisan info, add to cart |
| `/seller/[id]` | Artisan profile - their story and full collection |
| `/cart` | Cart and checkout flow |
| `/about` | Platform story |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shubhamxpawar/hastkala.git
cd hastkala

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                   # Next.js App Router pages
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── ui/                # ProductCard, Button, Tag, CategoryPill...
│   ├── sections/          # Hero, FeaturedProducts, HowItWorks...
│   └── animations/        # RevealOnScroll, HandwritingText, PageTransition
├── lib/                   # Lenis init, utilities
├── hooks/                 # useLenis
├── public/svg/            # Decorative SVG assets
└── styles/                # globals.css, keyframe animations
```

---

## Key Features

- **Hero handwriting animation** - "Hastakala" strokes onto the screen on load via SVG `stroke-dashoffset`
- **Lenis smooth scroll** throughout the entire site
- **Scroll-triggered reveals** - sections animate in as you scroll using Framer Motion `whileInView`
- **Animated product cards** - slight rotation per card, spring-eased hover lift
- **Page transitions** - `AnimatePresence` for route changes
- **Responsive** - mobile-first, works across all screen sizes
- **Reduced motion** - respects `prefers-reduced-motion` for accessibility

---

## Hackathon

This project was built for **Frontend Battle 2026** - a single-round frontend design and development challenge.

- **Theme chosen:** E-Commerce & Customer Experience
- **Focus:** UI/UX design quality, animation, and frontend craft
- **Deliverable:** Fully designed and deployed frontend (backend not required)

---

<div align="center">

*Made with hands. Built with heart.*

</div>