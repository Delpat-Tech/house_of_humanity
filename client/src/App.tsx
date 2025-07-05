import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Projects from "./pages/Projects"
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
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
