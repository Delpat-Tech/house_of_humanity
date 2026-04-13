import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './shared/contexts/ThemeContext';
import { ScrollToTop } from './shared/components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Projects from './pages/Projects';
import Sitaare from './pages/Sitaare';
import HealthCare from './pages/HealthCare';
import SustainableLivelihood from './pages/SustainableLivelihood';
import Education from './pages/Education';
import Nutrition from './pages/Nutrition';
import HouseOfHappiness from './pages/HouseOfHappiness';
import Milestones from './pages/Milestones';
import SuccessStories from './pages/SuccessStories';
import OurPartners from './pages/OurPartners';
import DonateForACause from './pages/DonateForACause';
import GetInvolved from './pages/GetInvolved';
import PartnerWithUs from './pages/PartnerWithUs';
import ContributeMaterials from './pages/ContributeMaterials';
import NewsEvents from './pages/NewsEvents';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Testimonial from './pages/Testimonial';
import Home from './pages/Home';
import DonationSuccess from './pages/DonationSuccess';
import DonationFailed from './pages/DonationFailed';
import Instagram from './pages/Instagram';
import PrivacyPolicy from './pages/privacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import FloatingActionButtons from './components/layout/FloatingActionButtons';
import SeoHead from './components/seo/SeoHead';
import StructuredData from './components/seo/StructuredData';
import { getSeoConfig } from './components/seo/routeSeoConfig';

function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderGone, setLoaderGone] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://houseofhumanity.org';
  const normalizedSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  const seoConfig = getSeoConfig(location.pathname);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
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
    nonprofitStatus: 'Nonprofit501c3',
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'House Of Humanity Charitable Trust',
    url: normalizedSiteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${normalizedSiteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

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
          <Route path="/" element={<Home showLoader={showLoader} loaderGone={loaderGone} onFadeOut={handleFadeOut} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/sitaare" element={<Sitaare />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/health-care" element={<HealthCare />} />
          <Route path="/sustainable-livelihood" element={<SustainableLivelihood />} />
          <Route path="/education" element={<Education />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/house-of-happiness" element={<HouseOfHappiness />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/donate-for-a-cause" element={<DonateForACause />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/contribute-materials" element={<ContributeMaterials />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/donation-failed" element={<DonationFailed />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
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

