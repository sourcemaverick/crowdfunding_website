# PRD — SOURCE Crowdfunding Website

## Original Problem Statement
Light-themed, sober, modern minimalistic responsive website for a crowdfunding campaign promoting "SOURCE" — an app bringing Gururaj Ananda Yogi's spiritual teachings to the world. 3 pages (Home, Download App, Donate), floating Donate button, minimal media. Audience is older adults: simple yet elegant, boast it as the next big thing.

## User Choices
- Investor $10,000+ tier → "Contact us" message (toast with support@sourceapp.org placeholder email)
- Footer links → placeholders (Facebook link is placeholder https://www.facebook.com)
- Portrait of Gururaj uploaded by user: https://customer-assets-eiarnc6j.emergentagent.net/job_enlighten-source/artifacts/8mkp8eq6_gururaj.png

## Architecture
- Frontend-only React site (backend untouched, default template server.py)
- React Router (/, /download, /donate), framer-motion (masked hero reveal, scroll reveals, parallax portrait), lenis smooth scroll, sonner toasts
- Fonts: Cormorant Garamond (headings) + Manrope (body, 18px base for older readers)
- Palette: warm off-white #FAF8F5, gold #C88A2D, sage #3E5846

## Implemented (June 2026)
- Home: kinetic hero (line-by-line masked reveal, arch-framed portrait with parallax + gold halo), editorial marquee, 5 SOURCE app feature cards + download CTA card, numbered manifesto (01/02/03 fundraising goals), CTA, footer
- Download page: Apple App Store + Google Play buttons (open in new tab, real links), feedback Google Form link
- Donate page: 4 tier cards — Supporter/Sponsor/Benefactor with real Stripe links (new tab), Investor → Contact Us toast
- Floating gold Donate button on all pages except /donate
- Footer: Gururaj info placeholder anchor, Facebook placeholder link
- All interactive elements have data-testid attributes

## Backlog
- P1: Real footer links + Facebook page URL (user to provide)
- P1: Real investor contact email
- P2: Campaign progress bar / raised amount
- P2: Testimonials section, multi-language toggle
