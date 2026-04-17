/**
 * prerender.mjs
 *
 * Generates per-route static HTML files in dist/ so search engines and social
 * media crawlers receive route-specific <head> metadata (title, description,
 * canonical, OG, Twitter, robots) in raw HTML without executing JavaScript.
 *
 * Runs as the last step of `npm run build`.
 *
 * Route data must stay in sync with:
 *   client/src/components/seo/routeSeoConfig.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST      = path.resolve(__dirname, '../client/dist');
const SITE_URL  = 'https://houseofhumanity.org';

// ---------------------------------------------------------------------------
// Route SEO data — mirrors routeSeoConfig.ts
// ---------------------------------------------------------------------------
const routes = [
  {
    path: '/about-us',
    title: 'About Us | House Of Humanity',
    description: "Learn about House of Humanity's mission, values, and story as a youth-led charitable trust working for social impact across India.",
  },
  {
    path: '/our-team',
    title: 'Our Team | House Of Humanity',
    description: 'Meet the passionate team behind House of Humanity — founders, co-founders, and volunteers driving change across India.',
  },
  {
    path: '/sitaare',
    title: 'Sitaare Initiative | House Of Humanity',
    description: "Sitaare is House of Humanity's flagship initiative empowering underprivileged children through creativity, mentorship, and education.",
  },
  {
    path: '/projects',
    title: 'Our Projects | House Of Humanity',
    description: "Explore House of Humanity's programs in education, healthcare, nutrition, and sustainable livelihood that impact communities across India.",
  },
  {
    path: '/health-care',
    title: 'Healthcare Program | House Of Humanity',
    description: "House of Humanity's healthcare program provides free medical camps, health awareness, and aid to underserved communities across India.",
  },
  {
    path: '/sustainable-livelihood',
    title: 'Sustainable Livelihood | House Of Humanity',
    description: "House of Humanity's sustainable livelihood program equips individuals with skills and resources to achieve financial independence.",
  },
  {
    path: '/education',
    title: 'Education Program | House Of Humanity',
    description: "House of Humanity's education initiative brings quality learning opportunities to underprivileged children and youth across India.",
  },
  {
    path: '/nutrition',
    title: 'Nutrition Program | House Of Humanity',
    description: "House of Humanity's nutrition program combats malnutrition by delivering healthy meals and awareness to communities in need.",
  },
  {
    path: '/house-of-happiness',
    title: 'House of Happiness | House Of Humanity',
    description: 'House of Happiness is our community welfare initiative bringing joy, resources, and support to underprivileged families.',
  },
  {
    path: '/milestones',
    title: 'Our Milestones | House Of Humanity',
    description: "Discover the key achievements, impact numbers, and milestones that define House of Humanity's journey since its founding.",
  },
  {
    path: '/success-stories',
    title: 'Success Stories | House Of Humanity',
    description: "Read inspiring stories of individuals and communities transformed through House of Humanity's programs and volunteer efforts.",
  },
  {
    path: '/our-partners',
    title: 'Our Partners | House Of Humanity',
    description: 'House of Humanity is proud to collaborate with organizations and individuals who share our vision of a compassionate society.',
  },
  {
    path: '/donate-for-a-cause',
    title: 'Donate For a Cause | House Of Humanity',
    description: 'Support House of Humanity with a donation. Every rupee helps us provide education, healthcare, and nutrition to those in need.',
  },
  {
    path: '/get-involved',
    title: 'Get Involved | House Of Humanity',
    description: 'Join House of Humanity as a volunteer, donor, or partner. Together we can create lasting social change across India.',
  },
  {
    path: '/partner-with-us',
    title: 'Partner With Us | House Of Humanity',
    description: 'Partner with House of Humanity to amplify your social impact. We welcome CSR partnerships, institutional collaborations, and more.',
  },
  {
    path: '/contribute-materials',
    title: 'Contribute Materials | House Of Humanity',
    description: 'Donate food, clothing, books, or other essentials to House of Humanity and directly support communities in need.',
  },
  {
    path: '/news-events',
    title: 'News & Events | House Of Humanity',
    description: 'Stay updated with the latest news, events, campaigns, and activities from House of Humanity Charitable Trust.',
  },
  {
    path: '/gallery',
    title: 'Gallery | House Of Humanity',
    description: "Browse photos from House of Humanity's events, programs, camps, and community activities across India.",
  },
  {
    path: '/contact-us',
    title: 'Contact Us | House Of Humanity',
    description: 'Get in touch with House of Humanity. Reach out for volunteering, donations, partnerships, or general inquiries.',
  },
  {
    path: '/testimonial',
    title: 'Testimonials | House Of Humanity',
    description: 'Hear from volunteers, donors, and community members about their experience with House of Humanity Charitable Trust.',
  },
  {
    path: '/instagram',
    title: 'Our Instagram | House Of Humanity',
    description: 'Follow House of Humanity on Instagram for updates, stories, and behind-the-scenes from our community programs.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | House Of Humanity',
    description: 'Read the House of Humanity privacy policy to understand how personal data is collected, used, and protected across our platform.',
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy | House Of Humanity',
    description: 'Review House of Humanity cookie policy for details about cookies, tracking technologies, and visitor privacy preferences.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | House Of Humanity',
    description: 'Read the terms of service governing use of House of Humanity website, donations, and interactions with our charitable initiatives.',
  },
  {
    path: '/donation-success',
    title: 'Donation Successful | House Of Humanity',
    description: 'Your donation was processed successfully. Thank you for supporting House of Humanity.',
    noindex: true,
  },
  {
    path: '/donation-failed',
    title: 'Donation Failed | House Of Humanity',
    description: 'The donation transaction could not be completed. Please retry securely from the House of Humanity donation page.',
    noindex: true,
  },
];

// ---------------------------------------------------------------------------
// HTML generation helpers
// ---------------------------------------------------------------------------

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Injects route-specific meta values into a copy of the base HTML string.
 * Regex uses the `s` flag so multiline attributes (as Vite emits them) match.
 */
function applyRouteMeta(baseHtml, route) {
  const canonicalUrl = `${SITE_URL}${route.path}`;
  const robots       = route.noindex ? 'noindex, nofollow' : 'index, follow';
  const title        = escapeAttr(route.title);
  const desc         = escapeAttr(route.description || '');

  return baseHtml
    // <title>
    .replace(/(<title>)[^<]*(<\/title>)/s, `$1${title}$2`)
    // description
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${desc}$2`)
    // robots
    .replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/s, `$1${robots}$2`)
    // canonical
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/s, `$1${canonicalUrl}$2`)
    // og:title
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/s, `$1${title}$2`)
    // og:description
    .replace(/(<meta\s+property="og:description"[\s\S]*?content=")[^"]*(")/s, `$1${desc}$2`)
    // og:url
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/s, `$1${canonicalUrl}$2`)
    // twitter:title
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/s, `$1${title}$2`)
    // twitter:description
    .replace(/(<meta\s+name="twitter:description"[\s\S]*?content=")[^"]*(")/s, `$1${desc}$2`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const baseHtmlPath = path.join(DIST, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('[prerender] dist/index.html not found — run vite build first');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');
let count = 0;

for (const route of routes) {
  const dir  = path.join(DIST, route.path);
  const file = path.join(dir, 'index.html');

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, applyRouteMeta(baseHtml, route), 'utf8');
  count++;
}

console.log(`[prerender] Generated ${count} route HTML files in ${DIST}`);
