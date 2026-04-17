import { lazy, Suspense, useState, useEffect, useCallback, type ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './shared/contexts/ThemeContext';
import { ScrollToTop } from './shared/components/ScrollToTop';
import FloatingActionButtons from './components/layout/FloatingActionButtons';
import SeoHead from './components/seo/SeoHead';
import StructuredData from './components/seo/StructuredData';
import { getSeoConfig } from './components/seo/routeSeoConfig';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const Projects = lazy(() => import('./pages/Projects'));
const Sitaare = lazy(() => import('./pages/Sitaare'));
const HealthCare = lazy(() => import('./pages/HealthCare'));
const SustainableLivelihood = lazy(() => import('./pages/SustainableLivelihood'));
const Education = lazy(() => import('./pages/Education'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const HouseOfHappiness = lazy(() => import('./pages/HouseOfHappiness'));
const Milestones = lazy(() => import('./pages/Milestones'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const OurPartners = lazy(() => import('./pages/OurPartners'));
const DonateForACause = lazy(() => import('./pages/DonateForACause'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const PartnerWithUs = lazy(() => import('./pages/PartnerWithUs'));
const ContributeMaterials = lazy(() => import('./pages/ContributeMaterials'));
const NewsEvents = lazy(() => import('./pages/NewsEvents'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const DonationSuccess = lazy(() => import('./pages/DonationSuccess'));
const DonationFailed = lazy(() => import('./pages/DonationFailed'));
const Instagram = lazy(() => import('./pages/Instagram'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderGone, setLoaderGone] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://houseofhumanity.org';
  const normalizedSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  const seoConfig = getSeoConfig(location.pathname);
  const organizationId = `${normalizedSiteUrl}/#organization`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': organizationId,
    name: 'House Of Humanity Charitable Trust',
    alternateName: 'HoH Trust',
    url: normalizedSiteUrl,
    logo: `${normalizedSiteUrl}/images/logo.png`,
    description:
      'House of Humanity is a youth-led charitable trust dedicated to empowering communities through education, healthcare, nutrition, and sustainable livelihood programs across India.',
    foundingDate: '2020',
    email: 'houseofhumanity2020@gmail.com',
    sameAs: [
      'https://www.instagram.com/houseofhumanity_trust/',
      'https://www.linkedin.com/company/house-of-humanity',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'houseofhumanity2020@gmail.com',
        telephone: '+91-99741-91811',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${normalizedSiteUrl}/#website`,
    name: 'House Of Humanity Charitable Trust',
    url: normalizedSiteUrl,
    publisher: {
      '@id': organizationId,
    },
  };

  const routeElement = (element: ReactElement) => (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900" />}>
      {element}
    </Suspense>
  );

  useEffect(() => {
    if (isHomePage) {
      // Show loader only on homepage
      const timer = setTimeout(() => setShowLoader(false), 1500);
      return () => clearTimeout(timer);
    } else {
      // Skip loader for other pages
      setShowLoader(false);
      setLoaderGone(true);
    }
  }, [isHomePage]);

  const handleFadeOut = useCallback(() => {
    setLoaderGone(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <SeoHead config={seoConfig} siteUrl={normalizedSiteUrl} />
      <StructuredData schema={organizationSchema} />
      <StructuredData schema={webSiteSchema} />
      {loaderGone && <Header />}
      {loaderGone && <FloatingActionButtons />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={routeElement(<Home showLoader={showLoader} loaderGone={loaderGone} onFadeOut={handleFadeOut} />)} />
          <Route path="/about-us" element={routeElement(<AboutUs />)} />
          <Route path="/our-team" element={routeElement(<OurTeam />)} />
          <Route path="/sitaare" element={routeElement(<Sitaare />)} />
          <Route path="/projects" element={routeElement(<Projects />)} />
          <Route path="/health-care" element={routeElement(<HealthCare />)} />
          <Route path="/sustainable-livelihood" element={routeElement(<SustainableLivelihood />)} />
          <Route path="/education" element={routeElement(<Education />)} />
          <Route path="/nutrition" element={routeElement(<Nutrition />)} />
          <Route path="/house-of-happiness" element={routeElement(<HouseOfHappiness />)} />
          <Route path="/milestones" element={routeElement(<Milestones />)} />
          <Route path="/success-stories" element={routeElement(<SuccessStories />)} />
          <Route path="/our-partners" element={routeElement(<OurPartners />)} />
          <Route path="/donate-for-a-cause" element={routeElement(<DonateForACause />)} />
          <Route path="/get-involved" element={routeElement(<GetInvolved />)} />
          <Route path="/partner-with-us" element={routeElement(<PartnerWithUs />)} />
          <Route path="/contribute-materials" element={routeElement(<ContributeMaterials />)} />
          <Route path="/news-events" element={routeElement(<NewsEvents />)} />
          <Route path="/gallery" element={routeElement(<Gallery />)} />
          <Route path="/contact-us" element={routeElement(<ContactUs />)} />
          <Route path="/testimonial" element={routeElement(<Testimonial />)} />
          <Route path="/donation-success" element={routeElement(<DonationSuccess />)} />
          <Route path="/donation-failed" element={routeElement(<DonationFailed />)} />
          <Route path="/instagram" element={routeElement(<Instagram />)} />
          <Route path="/privacy-policy" element={routeElement(<PrivacyPolicy />)} />
          <Route path="/cookie-policy" element={routeElement(<CookiePolicy />)} />
          <Route path="/terms" element={routeElement(<TermsOfService />)} />
        </Routes>
      </AnimatePresence>
      <ToastContainer />
      {loaderGone && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

