# Tecsonet Solutions — Full Website v2.0

Multi-page premium React website for Tecsonet Solutions, Samastipur Bihar.

## Pages
- `/` — Home (landing page with hero, services preview, why us, testimonials)
- `/services` — All 6 services with full detail, features, pricing packages
- `/portfolio` — 9 project showcases with filter by category
- `/about` — Company story, mission, values, timeline
- `/career` — 5 job openings with expandable details + application form
- `/contact` — Contact info, inquiry form, FAQ section

## Tech Stack
- React 18 + React Router v6
- CSS-in-JS (inline styles) — no Tailwind needed
- Google Fonts (Cabinet Grotesk + Satoshi)
- @emailjs/browser (optional — for email notifications)

## Setup

### Step 1 — Install Node.js
https://nodejs.org — download LTS version

### Step 2 — Extract and install
```bash
cd tecsonet-v2
npm install
```

### Step 3 — Run locally
```bash
npm start
```
Opens at http://localhost:3000

### Step 4 — Build for production
```bash
npm run build
```

## Deploy to Vercel (Free + Custom Domain)

1. Push project to GitHub
2. Go to vercel.com → Import Project
3. Select your repo → Deploy (auto detects React)
4. Go to Settings → Domains → Add `tecsonet.com`
5. In GoDaddy DNS → Point to Vercel nameservers
Done! tecsonet.com is live 🎉

## Customization Guide

### Change phone number
Search: `8271338020`
Replace with your number in: `src/data/index.js`

### Change email
Search: `info@tecsonet.com`  
Replace in: `src/data/index.js`

### Change colors
Edit `src/index.css` — `:root` section
Main green: `--green: #00e5a0`

### Add real portfolio projects
Edit: `src/pages/Portfolio.jsx` — `projects` array

### Add/remove job listings
Edit: `src/data/index.js` — `jobs` array

### Add testimonials
Edit: `src/data/index.js` — `testimonials` array

## File Structure
```
src/
  components/
    Navbar.jsx       — Fixed nav with mobile menu
    Footer.jsx       — Footer with all links
  pages/
    Home.jsx         — Landing page
    Services.jsx     — Services with tabs + packages
    Portfolio.jsx    — Project gallery with filters
    About.jsx        — Story, values, timeline
    Career.jsx       — Jobs + application modal
    Contact.jsx      — Form + FAQ
  sections/home/     — (reserved for future splits)
  hooks/
    useScrollReveal.js — Scroll animation hook
  data/
    index.js         — All content data (services, jobs, etc.)
  App.jsx            — Router setup
  index.js           — Entry point
  index.css          — Global design system
```

## Contact
WhatsApp: +91 82713 38020
Email: info@tecsonet.com
Website: tecsonet.com
# Tecosnet
