
Action: file_editor create /app/memory/PRD.md --file-text "# CLEO Beverages — Corporate Website PRD

## Original problem statement
Build a premium corporate website for CLEO Beverages (packaged drinking water, Darbhanga, Bihar) inspired by https://orizon.in/. Production-ready, GitHub Pages deployable, with original assets and content. 14 sections, water-inspired teal/green palette, smooth animations, mobile-first, SEO-ready.

## User choices (locked)
- **Type**: Static HTML/CSS/JS (option 1a) — no build step, ideal for GitHub Pages
- **Logo & images**: Placeholders left in `/assets/images/` — user will drop real files later
- **Product sizes**: 200 ml, 500 ml, 1 Litre
- **Domain**: cleobeverages.com (already owned, already on GitHub Pages)

## Architecture
- Single-page static site at `/app/cleo-site/`
- Vanilla JS + IntersectionObserver for reveals
- Lucide icons via CDN, Google Fonts (Fraunces + Manrope + JetBrains Mono)
- `mailto:` form handoff + floating WhatsApp FAB
- SEO: meta tags, OG, JSON-LD Organization schema, sitemap.xml, robots.txt
- GitHub Pages: `CNAME`, `.nojekyll`, `404.html`

## What's been implemented (Dec 2025)
- ✅ All 14 sections per PRD: Hero, Marquee, About, Products, Process (6-stage), Quality, Facility, B2B, Packaging, Partners (dealers), Gallery, Testimonials, Contact, Footer
- ✅ Animated bottle SVG fallback (works without real photos)
- ✅ Premium typography (Fraunces editorial serif headings + Manrope sans body)
- ✅ Scroll reveals with stagger, ripple animations, marquee, floating bottle, hover micro-interactions
- ✅ Responsive (1440 / 1024 / 768 / 390 breakpoints), mobile hamburger menu
- ✅ Preloader with droplet animation
- ✅ Contact form with mailto handoff, toast feedback
- ✅ Floating WhatsApp FAB
- ✅ Google Maps placeholder block (with embed instructions)
- ✅ SEO: meta, OG, Twitter cards, JSON-LD, sitemap, robots
- ✅ GitHub Pages files: CNAME (cleobeverages.com), .nojekyll, 404.html
- ✅ Comprehensive README.md + DEPLOYMENT.md guides

## Placeholders to fill before launch
All marked clearly with `{{TOKEN}}` style in `index.html`:
- `{{PHONE}}`, `{{EMAIL}}`, `{{WHATSAPP}}`, `{{FACTORY_ADDRESS}}`, `{{FSSAI_NO}}`, `{{CAPACITY}}`
- Testimonial `{{NAME}}`, `{{HOTEL · CITY}}` etc.
- Image files in `/assets/images/` (filenames documented in that folder's README.md)
- 4 social link hrefs (currently `#`)
- Google Maps iframe (commented placeholder in `.contact__map`)

## Project layout
```
cleo-site/
├── index.html · 404.html · CNAME · .nojekyll · robots.txt · sitemap.xml
├── README.md · DEPLOYMENT.md · .gitignore
├── css/style.css · js/main.js
└── assets/icons/favicon.svg · assets/images/(placeholders)
```

## Backlog (P1)
- Wire form to Formspree/Web3Forms once user picks a provider
- Replace `mailto:` flow with real submission endpoint
- Add real product/factory/gallery photography
- Add Google Maps embed for factory location
- Optional: Hindi language toggle for local distributor reach

## P2 / nice-to-have
- Per-product detail pages (if product line grows)
- Distributor portal (login + order placement) — would need backend, breaks GH Pages
- Blog / news section for SEO content marketing
- Animated water-droplet SVG library for richer process illustrations

## Next action items
1. User fills `{{TOKENS}}` in index.html with real business details
2. User drops images into `/assets/images/` (filenames in assets/images/README.md)
3. User pushes `cleo-site/` to GitHub repo and follows DEPLOYMENT.md
4. Optional: integrate form provider (Formspree / Web3Forms)
"
Observation: Create successful: /app/memory/PRD.md
