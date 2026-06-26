# Nilep Website — nilep.xyz

Official website for **Nilep**, a diversified integrated group delivering marketing, agribusiness, technology, and investment solutions across Africa, the Middle East, Latin America, and Southeast Asia.

**Live site:** [nilep.xyz](https://nilep.xyz)  
**Staging:** [nilep.netlify.app](https://nilep.netlify.app)  
**Contact:** info@nilep.xyz

---

## About This Repository

This repository contains the complete source code for nilep.xyz. It is a static HTML website hosted on Netlify, deployed automatically from this repository via GitHub integration. There is no build process, framework, or package manager. Every file is plain HTML, CSS, and JavaScript.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, CSS Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Fraunces (headings), Inter (body) |
| Hosting | Netlify (static, CDN-delivered) |
| Forms | Netlify Forms |
| Newsletter | Substack embed |
| Version Control | GitHub |

---

## Repository Structure
nilep-website/

│

├── index.html                          # Homepage

├── 404.html                            # Custom 404 error page

├── sitemap.xml                         # XML sitemap for search engines

├── robots.txt                          # Crawler directives

├── _redirects                          # Netlify redirect rules

├── netlify.toml                        # Netlify headers and cache config

│

├── about/

│   └── index.html

│

├── solutions/

│   ├── index.html

│   ├── marketing-and-ecommerce/

│   ├── agriculture-and-food-systems/

│   ├── ai-and-blockchain/

│   ├── supply-chain-management/

│   ├── virtual-farm-gate/

│   └── agribusiness-support/

│

├── invest/

│   ├── index.html

│   └── palm-oil-syndicate/

│

├── for-investors/

├── for-businesses/

├── for-farmers/

│

├── emerging-markets/

│   ├── africa/

│   ├── middle-east/

│   ├── latin-america/

│   └── southeast-asia/

│

├── blog/

│   └── index.html

│

├── partners/

├── case-studies/

├── faq/

├── careers/

├── contact/

├── thank-you/

├── privacy-policy/

└── terms/

│

└── assets/

├── css/

│   ├── styles.css                  # Global tokens, reset, utilities, buttons

│   └── components.css             # Header, footer, cards, forms, blog, case studies

├── js/

│   ├── main.js                    # Scroll header, smooth anchor scroll

│   └── nav.js                     # Mobile menu, active link highlighting

└── images/

├── logos/

│   ├── nilep-logo-black.svg

│   ├── nilep-logo-white.svg

│   └── partners/              # 17 partner logos (SVG or PNG)

├── icons/

│   ├── favicon.ico

│   ├── favicon-16.png

│   ├── favicon-32.png

│   ├── apple-touch-icon.png

│   ├── android-chrome-192x192.png

│   ├── android-chrome-512x512.png

│   └── og-image.jpg

├── hero/                      # Optional hero background images

└── blog/                      # Featured images for blog posts

---

## Deployment

This site deploys automatically. Every commit pushed to the `main` branch triggers a new Netlify build and goes live within 60 seconds. There is no manual upload step.

**To make a change:**
1. Edit the relevant file(s)
2. Commit with a clear message describing what changed
3. Push to `main`
4. Netlify deploys automatically

---

## Adding New Content

### New Blog Post
1. Create `/blog/[category]/[post-slug]/index.html` using `blog/post-template.html`
2. Add a card to `blog/index.html`
3. Add the URL to `sitemap.xml`
4. Commit and push

### New Case Study
1. Create `/case-studies/[case-study-slug]/index.html` using `case-studies/case-study-template.html`
2. Add a card to `case-studies/index.html`
3. Add the URL to `sitemap.xml`
4. Add an internal link from the relevant solution page
5. Commit and push

Full step-by-step instructions for both are in the **NILEP.XYZ — Complete Deployment and Operations Guide**.

---

## Redirects

Redirect rules are defined in `_redirects` at the root. Current rules:
/?p=2649    /invest/palm-oil-syndicate/    301

/about-us/  /about/                        301

The first rule handles legacy WordPress URL traffic. Add new redirects here as needed following the same format.

---

## Brand Colours

| Name | Hex |
|---|---|
| Obsidian | `#0A0A0A` |
| Ivory | `#F5F0E8` |
| Green | `#1A6B3C` |
| Green Dark | `#145730` |
| Green Muted | `#2E5540` |
| Gold | `#D4A843` |
| Border | `#E8E2D6` |

All colours are defined as CSS custom properties in `assets/css/styles.css` and should never be hardcoded directly in HTML files.

---

## Contact

**Email:** info@nilep.xyz  
**Phone:** +234-912-369-4650  
**Address:** Victoria Island, Lagos, Nigeria

---

*© 2026 Nilep. All Rights Reserved.*
