# SEO Improvement Plan — House of Humanity Charitable Trust
> Production site: **https://houseofhumanity.org**  
> Stack: React 19 + Vite SPA, React Router, `react-helmet` installed, Vercel hosting  
> Status: Site is indexed by Google. Goal is to rank better and look more professional in search results.

---

## Audit Summary (Current State)

| Item | Status | Notes |
|------|--------|-------|
| Site indexed by Google | ✅ | Confirmed via screenshot |
| Title tag | ✅ | "House Of Humanity Charitable Trust" (global only) |
| Meta description | ❌ | Missing on every page |
| Open Graph tags | ❌ | Not implemented anywhere |
| Twitter Card tags | ❌ | Not implemented anywhere |
| Canonical tags | ❌ | Not implemented |
| JSON-LD Structured Data | ❌ | Not implemented |
| `sitemap.xml` | ❌ | Does not exist |
| `robots.txt` | ⚠️ | Exists but lacks sitemap reference |
| `manifest.json` | ❌ | Still has Create React App placeholder values |
| Per-page Helmet | ⚠️ | Only 3 legal pages (Cookie, Terms, Privacy) |
| Favicon | ✅ | `/images/favicon.ico` |
| OG image | ❌ | No social share image defined |

**Root cause:** `client/index.html` only has `<title>`, `<meta charset>`, and `<meta viewport>`. The `react-helmet` library is installed but used on only 3 of 26 pages.

---

## Implementation Phases

### Phase 1 — Foundation (Static files & base `<head>`)
*Touch only: `client/index.html`, `client/public/robots.txt`, `client/public/manifest.json`, `client/.env`*

#### 1.1 — Add domain env variable
Add `VITE_SITE_URL` to the env files so all SEO files can reference the canonical domain without hardcoding.

**File:** `client/.env` (and `.env.prod`)
```
VITE_SITE_URL=https://houseofhumanity.org
VITE_RAZORPAY_ENV=TEST
VITE_API_BASE_URL=https://hohserver-production.up.railway.app
```

---

#### 1.2 — Rewrite `client/index.html`
Replace the bare-bones `<head>` with a full set of base/fallback meta tags. These act as the default for every page before React renders, and are the only tags search engine crawlers see (since this is a client-side SPA).

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary SEO -->
    <title>House Of Humanity Charitable Trust | Empowering Communities</title>
    <meta name="description" content="House of Humanity is a youth-led charitable trust dedicated to empowering communities through education, healthcare, nutrition, and sustainable livelihood programs across India." />
    <meta name="keywords" content="house of humanity, charitable trust, NGO India, donate, education, healthcare, humanitarian aid, youth-led NGO" />
    <meta name="author" content="House of Humanity Charitable Trust" />
    <meta name="robots" content="index, follow" />

    <!-- Canonical -->
    <link rel="canonical" href="https://houseofhumanity.org/" />

    <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="House Of Humanity Charitable Trust" />
    <meta property="og:title" content="House Of Humanity Charitable Trust | Empowering Communities" />
    <meta property="og:description" content="House of Humanity is a youth-led charitable trust dedicated to empowering communities through education, healthcare, nutrition, and sustainable livelihood programs across India." />
    <meta property="og:url" content="https://houseofhumanity.org/" />
    <meta property="og:image" content="https://houseofhumanity.org/images/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="House of Humanity — Empowering Communities" />
    <meta property="og:locale" content="en_IN" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="House Of Humanity Charitable Trust | Empowering Communities" />
    <meta name="twitter:description" content="House of Humanity is a youth-led charitable trust dedicated to empowering communities through education, healthcare, nutrition, and sustainable livelihood programs across India." />
    <meta name="twitter:image" content="https://houseofhumanity.org/images/og-image.png" />
    <meta name="twitter:image:alt" content="House of Humanity — Empowering Communities" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/images/logo.png" />

    <!-- PWA manifest -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#1a56db" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

> **OG Image required:** Create a `1200×630 px` branded image saved at `client/public/images/og-image.png`. Use the HOH logo, tagline, and a clean background. This image is what appears when users share any page on WhatsApp, LinkedIn, or Twitter.

---

#### 1.3 — Update `client/public/robots.txt`
Add the sitemap reference so crawlers can auto-discover it.

```
User-agent: *
Disallow: /donation-success
Disallow: /donation-failed

Sitemap: https://houseofhumanity.org/sitemap.xml
```

> `donation-success` and `donation-failed` are transactional pages with no SEO value — better to exclude them from indexing.

---

#### 1.4 — Fix `client/public/manifest.json`
Replace the Create React App placeholder values.

```json
{
  "short_name": "HoH Trust",
  "name": "House Of Humanity Charitable Trust",
  "description": "Youth-led NGO empowering communities through education, healthcare, and humanitarian aid.",
  "icons": [
    {
      "src": "images/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "images/logo.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1a56db",
  "background_color": "#ffffff"
}
```

---

### Phase 2 — Per-Page `react-helmet` Implementation
*Touch: each page file in `client/src/pages/`*

Every page needs a unique `<Helmet>` block. The pattern is the same for all pages — only the content changes.

**Standard helmet pattern (copy-paste template):**
```tsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>{PAGE_TITLE} | House Of Humanity</title>
  <meta name="description" content="{UNIQUE_DESCRIPTION_150_CHARS}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://houseofhumanity.org{ROUTE_PATH}" />
  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{PAGE_TITLE} | House Of Humanity" />
  <meta property="og:description" content="{UNIQUE_DESCRIPTION_150_CHARS}" />
  <meta property="og:url" content="https://houseofhumanity.org{ROUTE_PATH}" />
  <meta property="og:image" content="https://houseofhumanity.org/images/og-image.png" />
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{PAGE_TITLE} | House Of Humanity" />
  <meta name="twitter:description" content="{UNIQUE_DESCRIPTION_150_CHARS}" />
  <meta name="twitter:image" content="https://houseofhumanity.org/images/og-image.png" />
</Helmet>
```

**Content for every page:**

| Route | Page Title | Meta Description (≤155 chars) |
|-------|-----------|-------------------------------|
| `/` | House Of Humanity Charitable Trust | Youth-led NGO empowering communities across India through education, healthcare, nutrition, and sustainable livelihood programs. Donate today. |
| `/about-us` | About Us | Learn about House of Humanity's mission, values, and story as a youth-led charitable trust working for social impact across India. |
| `/our-team` | Our Team | Meet the passionate team behind House of Humanity — founders, co-founders, and volunteers driving change across India. |
| `/sitaare` | Sitaare Initiative | Sitaare is House of Humanity's flagship initiative empowering underprivileged children through creativity, mentorship, and education. |
| `/projects` | Our Projects | Explore House of Humanity's programs in education, healthcare, nutrition, and sustainable livelihood that impact communities across India. |
| `/health-care` | Healthcare Program | House of Humanity's healthcare program provides free medical camps, health awareness, and aid to underserved communities across India. |
| `/sustainable-livelihood` | Sustainable Livelihood | House of Humanity's sustainable livelihood program equips individuals with skills and resources to achieve financial independence. |
| `/education` | Education Program | House of Humanity's education initiative brings quality learning opportunities to underprivileged children and youth across India. |
| `/nutrition` | Nutrition Program | House of Humanity's nutrition program combats malnutrition by delivering healthy meals and awareness to communities in need. |
| `/house-of-happiness` | House of Happiness | House of Happiness is our community welfare initiative bringing joy, resources, and support to underprivileged families. |
| `/milestones` | Our Milestones | Discover the key achievements, impact numbers, and milestones that define House of Humanity's journey since its founding. |
| `/success-stories` | Success Stories | Read inspiring stories of individuals and communities transformed through House of Humanity's programs and volunteer efforts. |
| `/our-partners` | Our Partners | House of Humanity is proud to collaborate with organizations and individuals who share our vision of a compassionate society. |
| `/donate-for-a-cause` | Donate For a Cause | Support House of Humanity with a donation. Every rupee helps us provide education, healthcare, and nutrition to those in need. |
| `/get-involved` | Get Involved | Join House of Humanity as a volunteer, donor, or partner. Together we can create lasting social change across India. |
| `/partner-with-us` | Partner With Us | Partner with House of Humanity to amplify your social impact. We welcome CSR partnerships, institutional collaborations, and more. |
| `/contribute-materials` | Contribute Materials | Donate food, clothing, books, or other essentials to House of Humanity and directly support communities in need. |
| `/news-events` | News & Events | Stay updated with the latest news, events, campaigns, and activities from House of Humanity Charitable Trust. |
| `/gallery` | Gallery | Browse photos from House of Humanity's events, programs, camps, and community activities across India. |
| `/contact-us` | Contact Us | Get in touch with House of Humanity. Reach out for volunteering, donations, partnerships, or general inquiries. |
| `/testimonial` | Testimonials | Hear from volunteers, donors, and community members about their experience with House of Humanity Charitable Trust. |
| `/privacy-policy` | Privacy Policy | *(already implemented — keep existing)* |
| `/cookie-policy` | Cookie Policy | *(already implemented — keep existing)* |
| `/terms` | Terms of Service | *(already implemented — keep existing)* |
| `/donation-success` | *(add `noindex`)* | `<meta name="robots" content="noindex, nofollow" />` |
| `/donation-failed` | *(add `noindex`)* | `<meta name="robots" content="noindex, nofollow" />` |
| `/instagram` | Our Instagram | Follow House of Humanity on Instagram for updates, stories, and behind-the-scenes from our community programs. |

---

### Phase 3 — `sitemap.xml` Generation
*New file: `client/public/sitemap.xml`*

Since this is a static Vite SPA, the simplest approach is a **hand-crafted static sitemap** placed in `client/public/`. Vercel will serve it at `https://houseofhumanity.org/sitemap.xml`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://houseofhumanity.org/</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/about-us</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/our-team</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/sitaare</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/projects</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/health-care</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/sustainable-livelihood</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/education</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/nutrition</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/house-of-happiness</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/milestones</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/success-stories</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/our-partners</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/donate-for-a-cause</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/get-involved</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/partner-with-us</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/contribute-materials</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/news-events</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/gallery</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/contact-us</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/testimonial</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/instagram</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/privacy-policy</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/cookie-policy</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://houseofhumanity.org/terms</loc>
    <lastmod>2025-07-22</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
```

> Note: `/donation-success` and `/donation-failed` are intentionally excluded — they are transactional dead-ends with no SEO value.

---

### Phase 4 — Structured Data (JSON-LD)
*New component: `client/src/components/seo/StructuredData.tsx`*
*Touch: `client/index.html` or inject via Helmet in `App.tsx`*

Structured data tells Google exactly what kind of organization this is, enabling rich results and Knowledge Panel entries.

#### 4.1 — Organization Schema (global, inject once in `App.tsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "House Of Humanity Charitable Trust",
  "alternateName": "HoH Trust",
  "url": "https://houseofhumanity.org",
  "logo": "https://houseofhumanity.org/images/logo.png",
  "description": "House of Humanity is a youth-led charitable trust dedicated to empowering communities through education, healthcare, nutrition, and sustainable livelihood programs across India.",
  "foundingDate": "2020",
  "email": "houseofhumanity2020@gmail.com",
  "sameAs": [
    "https://www.instagram.com/houseofhumanity_trust/",
    "https://www.linkedin.com/company/house-of-humanity"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "nonprofitStatus": "Nonprofit501c3"
}
```

#### 4.2 — WebSite Schema with Sitelinks Searchbox (global)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "House Of Humanity Charitable Trust",
  "url": "https://houseofhumanity.org",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://houseofhumanity.org/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

#### 4.3 — BreadcrumbList Schema (per-page, injected via Helmet)
Example for `/education`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houseofhumanity.org/" },
    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://houseofhumanity.org/projects" },
    { "@type": "ListItem", "position": 3, "name": "Education", "item": "https://houseofhumanity.org/education" }
  ]
}
```

#### 4.4 — DonateAction Schema (on `/donate-for-a-cause`)
```json
{
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "name": "Donate to House of Humanity",
  "recipient": {
    "@type": "NGO",
    "name": "House Of Humanity Charitable Trust",
    "url": "https://houseofhumanity.org"
  }
}
```

**Implementation approach:** Create a reusable `<StructuredData schema={...} />` component that renders a `<script type="application/ld+json">` inside a Helmet block. Inject global schemas (Organization + WebSite) once in `App.tsx`, and per-page schemas inside each page's Helmet.

---

### Phase 5 — OG Image Asset
*New file: `client/public/images/og-image.png`*

This is the **most visible SEO asset** for social sharing. When someone shares any page link on WhatsApp, Twitter, or LinkedIn, this image is what shows.

**Specifications:**
- Size: **1200 × 630 px** (standard OG image size)
- Format: PNG or JPG
- Content suggestion: HOH logo centered, tagline "Empowering Communities Through Compassion", clean background using brand colors
- Must be ≤ 1 MB

> This is a design task. The image should be created using Canva, Figma, or Photoshop and placed at `client/public/images/og-image.png`.

---

### Phase 6 — Google Search Console & Verification
*After deployment*

1. **Submit sitemap** at `https://search.google.com/search-console`
   - Go to Sitemaps → Add new sitemap → `https://houseofhumanity.org/sitemap.xml`

2. **Add Google Search Console verification meta tag** to `client/index.html`:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   (Code is obtained from Google Search Console → Settings → Ownership verification → HTML tag method)

3. **Request re-indexing** of key pages via URL Inspection tool after all changes are deployed.

4. **Test social sharing** using:
   - Facebook/OG: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

5. **Test structured data** using:
   - https://search.google.com/test/rich-results
   - https://validator.schema.org/

---

## Implementation Order (Step-by-Step)

```
Step 1  →  Create og-image.png (design task, needed before deployment)
Step 2  →  Update client/.env and .env.prod with VITE_SITE_URL
Step 3  →  Rewrite client/index.html with full <head> block
Step 4  →  Fix client/public/manifest.json branding
Step 5  →  Update client/public/robots.txt with sitemap URL + noindex paths
Step 6  →  Create client/public/sitemap.xml
Step 7  →  Create StructuredData component (Organization + WebSite JSON-LD)
Step 8  →  Inject global StructuredData in App.tsx via Helmet
Step 9  →  Add Helmet blocks to all 26 pages (23 pages need it, 3 already have it)
Step 10 →  Add noindex Helmet to /donation-success and /donation-failed
Step 11 →  Add BreadcrumbList + page-specific schema to key pages
Step 12 →  Deploy to Vercel
Step 13 →  Submit sitemap in Google Search Console
Step 14 →  Test OG tags, structured data, and rich results
Step 15 →  Request re-indexing for all key pages
```

---

## Files to Create / Modify

| File | Action | Phase |
|------|--------|-------|
| `client/.env` | Add `VITE_SITE_URL` | 1.1 |
| `client/.env.prod` | Add `VITE_SITE_URL` | 1.1 |
| `client/index.html` | Full `<head>` rewrite | 1.2 |
| `client/public/robots.txt` | Add sitemap + noindex paths | 1.3 |
| `client/public/manifest.json` | Replace CRA placeholder values | 1.4 |
| `client/public/sitemap.xml` | **Create new** | 3 |
| `client/public/images/og-image.png` | **Create new** (design) | 5 |
| `client/src/components/seo/StructuredData.tsx` | **Create new** | 4 |
| `client/src/App.tsx` | Inject global Helmet + StructuredData | 4.1 |
| `client/src/pages/Home.tsx` | Add Helmet | 2 |
| `client/src/pages/AboutUs.tsx` | Add Helmet | 2 |
| `client/src/pages/OurTeam.tsx` | Add Helmet | 2 |
| `client/src/pages/Sitaare.tsx` | Add Helmet | 2 |
| `client/src/pages/Projects.tsx` | Add Helmet | 2 |
| `client/src/pages/HealthCare.tsx` | Add Helmet | 2 |
| `client/src/pages/SustainableLivelihood.tsx` | Add Helmet | 2 |
| `client/src/pages/Education.tsx` | Add Helmet | 2 |
| `client/src/pages/Nutrition.tsx` | Add Helmet | 2 |
| `client/src/pages/HouseOfHappiness.tsx` | Add Helmet | 2 |
| `client/src/pages/Milestones.tsx` | Add Helmet | 2 |
| `client/src/pages/SuccessStories.tsx` | Add Helmet | 2 |
| `client/src/pages/OurPartners.tsx` | Add Helmet | 2 |
| `client/src/pages/DonateForACause.tsx` | Add Helmet + DonateAction schema | 2, 4.4 |
| `client/src/pages/GetInvolved.tsx` | Add Helmet | 2 |
| `client/src/pages/PartnerWithUs.tsx` | Add Helmet | 2 |
| `client/src/pages/ContributeMaterials.tsx` | Add Helmet | 2 |
| `client/src/pages/NewsEvents.tsx` | Add Helmet | 2 |
| `client/src/pages/Gallery.tsx` | Add Helmet | 2 |
| `client/src/pages/ContactUs.tsx` | Add Helmet | 2 |
| `client/src/pages/Testimonial.tsx` | Add Helmet | 2 |
| `client/src/pages/Instagram.tsx` | Add Helmet | 2 |
| `client/src/pages/DonationSuccess.tsx` | Add noindex Helmet | 2 |
| `client/src/pages/DonationFailed.tsx` | Add noindex Helmet | 2 |
| `client/src/pages/privacyPolicy.tsx` | Already done — add OG + canonical | 2 |
| `client/src/pages/CookiePolicy.tsx` | Already done — add OG + canonical | 2 |
| `client/src/pages/TermsOfService.tsx` | Already done — add OG + canonical | 2 |

---

## Important Notes

### SPA SEO Limitation
This is a **client-side rendered SPA**. Google's crawler does execute JavaScript, so React Helmet tags will be indexed — but this takes additional crawl budget and time vs. server-side rendering. The implementation above is the correct approach for the current Vite/React stack without requiring a migration to Next.js.

### `react-helmet` vs `react-helmet-async`
The project uses `react-helmet@6.1.0`. Consider upgrading to `react-helmet-async` for better support with concurrent React rendering (React 19 is installed):
```bash
npm install react-helmet-async
npm uninstall react-helmet @types/react-helmet
```
This is optional but recommended since React 19 uses concurrent mode by default.

### Domain Confirmation
The canonical domain is **`https://houseofhumanity.org`** (confirmed from Google Search result screenshot). The `.env.prod` previously had `https://hoh-demo-website.web.app` commented out — this is the old Firebase demo URL and should not be used.

### Priority Keywords to Target
- "house of humanity charitable trust"
- "NGO India education healthcare"
- "donate to NGO India"
- "youth-led NGO India"
- "humanitarian aid India"
- "volunteer NGO India"

---

## Google Search Console Setup Guide (Property + SEO Configuration)

This section explains how to set up Google Search Console correctly for `https://houseofhumanity.org` and connect it to the SEO work above.

### 1) Choose the right property type

Use **Domain property** as the primary setup because it tracks all variants:
- `https://houseofhumanity.org`
- `http://houseofhumanity.org`
- `https://www.houseofhumanity.org`
- `http://www.houseofhumanity.org`

Also add a **URL-prefix property** for `https://houseofhumanity.org/` as a secondary property when you need fast verification using HTML tag or to debug only this canonical version.

### 2) Add Domain property (recommended)

1. Open: `https://search.google.com/search-console`
2. Click **Add property**.
3. Select **Domain**.
4. Enter: `houseofhumanity.org` (without `https://`).
5. Google will give a DNS TXT record.
6. Add this TXT record in your domain DNS provider (GoDaddy, Namecheap, Cloudflare, etc.).
7. Wait for DNS propagation (often 5-30 minutes, sometimes longer).
8. Return to Search Console and click **Verify**.

### 3) Add URL-prefix property (optional but useful)

1. In Search Console, click **Add property**.
2. Select **URL prefix**.
3. Enter: `https://houseofhumanity.org/`
4. Verify with one of these methods:
  - HTML tag in `<head>` (best for this Vite SPA)
  - Google Analytics
  - Google Tag Manager

If using HTML tag method, add this to `client/index.html`:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

Deploy, then click **Verify** in Search Console.

### 4) Set canonical and indexing expectations

After verification, confirm these conditions in production:
- Canonical domain remains `https://houseofhumanity.org`
- `https://www.houseofhumanity.org` redirects to canonical host (if `www` exists)
- `/donation-success` and `/donation-failed` are excluded (`noindex` + robots disallow)
- `sitemap.xml` is publicly reachable

### 5) Submit sitemap

1. Open the verified property in Search Console.
2. Go to **Sitemaps**.
3. Add: `sitemap.xml`
4. Submit and confirm status is **Success**.

Expected URL: `https://houseofhumanity.org/sitemap.xml`

### 6) Request indexing of priority pages

Use **URL Inspection** and click **Request indexing** for:
- `/`
- `/about-us`
- `/projects`
- `/donate-for-a-cause`
- `/get-involved`
- `/contact-us`

Then request indexing for other key pages in batches.

### 7) Configure performance monitoring (first 30 days)

Monitor these reports weekly:
- **Pages**: check indexed vs. excluded URLs
- **Sitemaps**: ensure no fetch/parse errors
- **Performance**: impressions, clicks, CTR, average position by page/query
- **Enhancements / Rich results**: structured data validity

### 8) Troubleshooting checklist

If pages are not indexing correctly:
- Verify page returns `200 OK` and not blocked by robots or meta noindex
- Check canonical tag points to the same final URL
- Validate structured data in Rich Results Test
- Re-submit sitemap and inspect affected URL
- Confirm Vercel deployment is serving updated `index.html`

### 9) Ownership and access best practices

- Keep at least two verified owners (primary + backup account)
- Add team members as restricted/full users as needed
- Keep DNS verification record permanently (do not remove after verification)

