Sanchara • Landing Page Boilerplate
==================================

Tech stack
----------
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

Getting started
---------------
1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000.

Build & start
-------------

```bash
npm run build
npm start
```

Project structure
-----------------

```
src/
  app/
    layout.tsx     # App metadata and global layout
    page.tsx       # Landing composed from components
    globals.css    # Tailwind + theme tokens
  components/
    Navbar.tsx
    Hero.tsx
    Features.tsx
    CTA.tsx
    Footer.tsx
```

Branding
--------
- Update metadata in `src/app/layout.tsx` for titles/OG tags.
- Replace placeholder gradient/card in `Hero` with imagery.
- Add real links, pricing, and contact routes as needed.
