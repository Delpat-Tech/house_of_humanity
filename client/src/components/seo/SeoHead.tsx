import { Helmet } from 'react-helmet';
import StructuredData from './StructuredData';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  robots?: 'index, follow' | 'noindex, nofollow';
  breadcrumbs?: BreadcrumbItem[];
  schemas?: Record<string, unknown>[];
}

interface SeoHeadProps {
  config: SeoConfig;
  siteUrl: string;
}

function normalizeSiteUrl(siteUrl: string): string {
  return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
}

function toAbsoluteUrl(siteUrl: string, path: string): string {
  if (path === '/') {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path}`;
}

function SeoHead({ config, siteUrl }: SeoHeadProps) {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);
  const canonicalUrl = toAbsoluteUrl(normalizedSiteUrl, config.path);
  const ogImageUrl = toAbsoluteUrl(normalizedSiteUrl, '/images/og-image.png');
  const robots = config.robots ?? 'index, follow';

  const breadcrumbSchema = config.breadcrumbs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: config.breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: toAbsoluteUrl(normalizedSiteUrl, item.path),
        })),
      }
    : null;

  const pageSchemas = [
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...(config.schemas ?? []),
  ];

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="House Of Humanity Charitable Trust" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="House of Humanity - Empowering Communities" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content="House of Humanity - Empowering Communities" />
      </Helmet>

      {pageSchemas.map((schema, index) => (
        <StructuredData key={`${config.path}-schema-${index}`} schema={schema} />
      ))}
    </>
  );
}

export default SeoHead;
