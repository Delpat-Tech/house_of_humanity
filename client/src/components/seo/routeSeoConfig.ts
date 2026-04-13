import type { SeoConfig } from './SeoHead';

const routeSeoConfig: Record<string, SeoConfig> = {
  '/': {
    title: 'House Of Humanity Charitable Trust | Empowering Communities',
    description:
      'Youth-led NGO empowering communities across India through education, healthcare, nutrition, and sustainable livelihood programs. Donate today.',
    path: '/',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/about-us': {
    title: 'About Us | House Of Humanity',
    description:
      "Learn about House of Humanity's mission, values, and story as a youth-led charitable trust working for social impact across India.",
    path: '/about-us',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about-us' },
    ],
  },
  '/our-team': {
    title: 'Our Team | House Of Humanity',
    description:
      'Meet the passionate team behind House of Humanity - founders, co-founders, and volunteers driving change across India.',
    path: '/our-team',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Team', path: '/our-team' },
    ],
  },
  '/sitaare': {
    title: 'Sitaare Initiative | House Of Humanity',
    description:
      "Sitaare is House of Humanity's flagship initiative empowering underprivileged children through creativity, mentorship, and education.",
    path: '/sitaare',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sitaare Initiative', path: '/sitaare' },
    ],
  },
  '/projects': {
    title: 'Our Projects | House Of Humanity',
    description:
      "Explore House of Humanity's programs in education, healthcare, nutrition, and sustainable livelihood that impact communities across India.",
    path: '/projects',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Projects', path: '/projects' },
    ],
  },
  '/health-care': {
    title: 'Healthcare Program | House Of Humanity',
    description:
      "House of Humanity's healthcare program provides free medical camps, health awareness, and aid to underserved communities across India.",
    path: '/health-care',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Healthcare Program', path: '/health-care' },
    ],
  },
  '/sustainable-livelihood': {
    title: 'Sustainable Livelihood | House Of Humanity',
    description:
      "House of Humanity's sustainable livelihood program equips individuals with skills and resources to achieve financial independence.",
    path: '/sustainable-livelihood',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Sustainable Livelihood', path: '/sustainable-livelihood' },
    ],
  },
  '/education': {
    title: 'Education Program | House Of Humanity',
    description:
      "House of Humanity's education initiative brings quality learning opportunities to underprivileged children and youth across India.",
    path: '/education',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Education Program', path: '/education' },
    ],
  },
  '/nutrition': {
    title: 'Nutrition Program | House Of Humanity',
    description:
      "House of Humanity's nutrition program combats malnutrition by delivering healthy meals and awareness to communities in need.",
    path: '/nutrition',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Nutrition Program', path: '/nutrition' },
    ],
  },
  '/house-of-happiness': {
    title: 'House of Happiness | House Of Humanity',
    description:
      'House of Happiness is our community welfare initiative bringing joy, resources, and support to underprivileged families.',
    path: '/house-of-happiness',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'House of Happiness', path: '/house-of-happiness' },
    ],
  },
  '/milestones': {
    title: 'Our Milestones | House Of Humanity',
    description:
      "Discover the key achievements, impact numbers, and milestones that define House of Humanity's journey since its founding.",
    path: '/milestones',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Milestones', path: '/milestones' },
    ],
  },
  '/success-stories': {
    title: 'Success Stories | House Of Humanity',
    description:
      "Read inspiring stories of individuals and communities transformed through House of Humanity's programs and volunteer efforts.",
    path: '/success-stories',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Success Stories', path: '/success-stories' },
    ],
  },
  '/our-partners': {
    title: 'Our Partners | House Of Humanity',
    description:
      'House of Humanity is proud to collaborate with organizations and individuals who share our vision of a compassionate society.',
    path: '/our-partners',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Partners', path: '/our-partners' },
    ],
  },
  '/donate-for-a-cause': {
    title: 'Donate For a Cause | House Of Humanity',
    description:
      'Support House of Humanity with a donation. Every rupee helps us provide education, healthcare, and nutrition to those in need.',
    path: '/donate-for-a-cause',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Donate For a Cause', path: '/donate-for-a-cause' },
    ],
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'DonateAction',
        name: 'Donate to House of Humanity',
        recipient: {
          '@type': 'NGO',
          name: 'House Of Humanity Charitable Trust',
          url: 'https://houseofhumanity.org',
        },
      },
    ],
  },
  '/get-involved': {
    title: 'Get Involved | House Of Humanity',
    description:
      'Join House of Humanity as a volunteer, donor, or partner. Together we can create lasting social change across India.',
    path: '/get-involved',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Get Involved', path: '/get-involved' },
    ],
  },
  '/partner-with-us': {
    title: 'Partner With Us | House Of Humanity',
    description:
      'Partner with House of Humanity to amplify your social impact. We welcome CSR partnerships, institutional collaborations, and more.',
    path: '/partner-with-us',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Partner With Us', path: '/partner-with-us' },
    ],
  },
  '/contribute-materials': {
    title: 'Contribute Materials | House Of Humanity',
    description:
      'Donate food, clothing, books, or other essentials to House of Humanity and directly support communities in need.',
    path: '/contribute-materials',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contribute Materials', path: '/contribute-materials' },
    ],
  },
  '/news-events': {
    title: 'News & Events | House Of Humanity',
    description:
      'Stay updated with the latest news, events, campaigns, and activities from House of Humanity Charitable Trust.',
    path: '/news-events',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'News & Events', path: '/news-events' },
    ],
  },
  '/gallery': {
    title: 'Gallery | House Of Humanity',
    description:
      "Browse photos from House of Humanity's events, programs, camps, and community activities across India.",
    path: '/gallery',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Gallery', path: '/gallery' },
    ],
  },
  '/contact-us': {
    title: 'Contact Us | House Of Humanity',
    description:
      'Get in touch with House of Humanity. Reach out for volunteering, donations, partnerships, or general inquiries.',
    path: '/contact-us',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact-us' },
    ],
  },
  '/testimonial': {
    title: 'Testimonials | House Of Humanity',
    description:
      'Hear from volunteers, donors, and community members about their experience with House of Humanity Charitable Trust.',
    path: '/testimonial',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Testimonials', path: '/testimonial' },
    ],
  },
  '/instagram': {
    title: 'Our Instagram | House Of Humanity',
    description:
      'Follow House of Humanity on Instagram for updates, stories, and behind-the-scenes from our community programs.',
    path: '/instagram',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Instagram', path: '/instagram' },
    ],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | House Of Humanity',
    description:
      'Read the House of Humanity privacy policy to understand how personal data is collected, used, and protected across our platform.',
    path: '/privacy-policy',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
  '/cookie-policy': {
    title: 'Cookie Policy | House Of Humanity',
    description:
      'Review House of Humanity cookie policy for details about cookies, tracking technologies, and visitor privacy preferences.',
    path: '/cookie-policy',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ],
  },
  '/terms': {
    title: 'Terms of Service | House Of Humanity',
    description:
      'Read the terms of service governing use of House of Humanity website, donations, and interactions with our charitable initiatives.',
    path: '/terms',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  },
  '/donation-success': {
    title: 'Donation Successful | House Of Humanity',
    description: 'Your donation was processed successfully. Thank you for supporting House of Humanity.',
    path: '/donation-success',
    robots: 'noindex, nofollow',
  },
  '/donation-failed': {
    title: 'Donation Failed | House Of Humanity',
    description:
      'The donation transaction could not be completed. Please retry securely from House of Humanity donation page.',
    path: '/donation-failed',
    robots: 'noindex, nofollow',
  },
};

const defaultSeoConfig = routeSeoConfig['/'];

export function getSeoConfig(pathname: string): SeoConfig {
  return routeSeoConfig[pathname] ?? {
    ...defaultSeoConfig,
    path: pathname,
  };
}
