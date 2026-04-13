const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const CLIENT_ROOT = path.join(REPO_ROOT, 'client');
const ROUTES_CONFIG_PATH = path.join(CLIENT_ROOT, 'src', 'config', 'routesConfig.ts');
const OUTPUT_PATH = path.join(CLIENT_ROOT, 'public', 'sitemap.xml');

const EXCLUDED_ROUTES = new Set(['/donation-success', '/donation-failed']);

const ROUTE_METADATA = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/about-us': { changefreq: 'monthly', priority: '0.8' },
  '/our-team': { changefreq: 'monthly', priority: '0.7' },
  '/sitaare': { changefreq: 'monthly', priority: '0.8' },
  '/projects': { changefreq: 'monthly', priority: '0.9' },
  '/health-care': { changefreq: 'monthly', priority: '0.8' },
  '/sustainable-livelihood': { changefreq: 'monthly', priority: '0.8' },
  '/education': { changefreq: 'monthly', priority: '0.8' },
  '/nutrition': { changefreq: 'monthly', priority: '0.8' },
  '/house-of-happiness': { changefreq: 'monthly', priority: '0.7' },
  '/milestones': { changefreq: 'monthly', priority: '0.7' },
  '/success-stories': { changefreq: 'weekly', priority: '0.8' },
  '/our-partners': { changefreq: 'monthly', priority: '0.7' },
  '/donate-for-a-cause': { changefreq: 'monthly', priority: '0.9' },
  '/get-involved': { changefreq: 'monthly', priority: '0.8' },
  '/partner-with-us': { changefreq: 'monthly', priority: '0.7' },
  '/contribute-materials': { changefreq: 'monthly', priority: '0.7' },
  '/news-events': { changefreq: 'weekly', priority: '0.8' },
  '/gallery': { changefreq: 'monthly', priority: '0.6' },
  '/contact-us': { changefreq: 'yearly', priority: '0.7' },
  '/testimonial': { changefreq: 'monthly', priority: '0.6' },
  '/instagram': { changefreq: 'weekly', priority: '0.5' },
  '/privacy-policy': { changefreq: 'yearly', priority: '0.3' },
  '/cookie-policy': { changefreq: 'yearly', priority: '0.3' },
  '/terms': { changefreq: 'yearly', priority: '0.3' },
};

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};

  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    value = value.replace(/^['"]|['"]$/g, '');
    env[key] = value;
  });

  return env;
}

function normalizeSiteUrl(siteUrl) {
  const normalized = siteUrl.trim().replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(normalized)) {
    throw new Error('VITE_SITE_URL must start with http:// or https://');
  }
  return normalized;
}

function resolveSiteUrl() {
  if (process.env.VITE_SITE_URL) {
    return normalizeSiteUrl(process.env.VITE_SITE_URL);
  }

  const envCandidates = [
    path.join(CLIENT_ROOT, '.env.production'),
    path.join(CLIENT_ROOT, '.env.prod'),
    path.join(CLIENT_ROOT, '.env'),
  ];

  for (const envPath of envCandidates) {
    const env = parseEnvFile(envPath);
    if (env.VITE_SITE_URL) {
      return normalizeSiteUrl(env.VITE_SITE_URL);
    }
  }

  throw new Error('VITE_SITE_URL not found. Set it in environment or client/.env');
}

function extractRoutesFromConfig(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Route config not found at ${filePath}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const routeMatches = source.matchAll(/path:\s*['"`]([^'"`]+)['"`]/g);
  const routes = [];

  for (const match of routeMatches) {
    routes.push(match[1]);
  }

  if (!routes.length) {
    throw new Error(`No routes found in ${filePath}`);
  }

  return Array.from(new Set(routes));
}

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeRoutePath(routePath) {
  if (!routePath || routePath === '/') {
    return '/';
  }

  const withLeadingSlash = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

function createUrlEntry(routePath, siteUrl, lastmod) {
  const normalizedPath = normalizeRoutePath(routePath);
  const loc = normalizedPath === '/' ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`;
  const meta = ROUTE_METADATA[normalizedPath] || { changefreq: 'monthly', priority: '0.7' };

  return [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${meta.changefreq}</changefreq>`,
    `    <priority>${meta.priority}</priority>`,
    '  </url>',
  ].join('\n');
}

function generateSitemapXml(routes, siteUrl) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = routes.map((route) => createUrlEntry(route, siteUrl, lastmod)).join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
    '',
  ].join('\n');
}

function main() {
  const siteUrl = resolveSiteUrl();
  const detectedRoutes = extractRoutesFromConfig(ROUTES_CONFIG_PATH)
    .map(normalizeRoutePath)
    .filter((routePath) => routePath.startsWith('/'))
    .filter((routePath) => !EXCLUDED_ROUTES.has(routePath));

  const uniqueRoutes = Array.from(new Set(detectedRoutes));
  if (!uniqueRoutes.includes('/')) {
    uniqueRoutes.unshift('/');
  }

  const rootFirstRoutes = ['/', ...uniqueRoutes.filter((routePath) => routePath !== '/')];
  const sitemapXml = generateSitemapXml(rootFirstRoutes, siteUrl);

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, sitemapXml, 'utf8');

  console.log(`[sitemap] Generated ${OUTPUT_PATH}`);
  console.log(`[sitemap] Base URL: ${siteUrl}`);
  console.log(`[sitemap] Route count: ${rootFirstRoutes.length}`);
}

try {
  main();
} catch (error) {
  console.error('[sitemap] Generation failed');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

