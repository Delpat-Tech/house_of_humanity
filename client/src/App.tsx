<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutUs from './components/pages/AboutUs';
import OurTeam from './components/pages/OurTeam';
import Sitaare from './components/pages/Sitaare';
import HealthCare from './components/pages/HealthCare';
import SustainableLivelihood from './components/pages/SustainableLivelihood';
import Education from './components/pages/Education';
import Nutrition from './components/pages/Nutrition';
import HouseOfHappiness from './components/pages/HouseOfHappiness';
import Milestones from './components/pages/Milestones';
import SuccessStories from './components/pages/SuccessStories';
import OurPartners from './components/pages/OurPartners';
import DonateForACause from './components/pages/DonateForACause';
import GetInvolved from './components/pages/GetInvolved';
import PartnerWithUs from './components/pages/PartnerWithUs';
import ContributeMaterials from './components/pages/ContributeMaterials';
import NewsEvents from './components/pages/NewsEvents';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';


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
>>>>>>> e1a84bf61f678aaf7ae6497ec2bd00170d8a6370
