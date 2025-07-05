import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, ArrowUp } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 10);
      setShowBackToTop(scrollTop > 300);
      setScrollProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    {
      name: 'Who We Are',
      path: '/about',
      dropdown: [
        { name: 'About us', path: '/about-us' },
        { name: 'Our Team', path: '/our-team' },
      ]
    },
    {
      name: 'What We Do',
      path: '/what-we-do',
      dropdown: [
        { name: 'Sitaare', path: '/sitaare' },
        { name: 'Health Care', path: '/health-care' },
        { name: 'Sustianable Livelihood', path: '/sustainable-livelihood' },
        { name: 'Education', path: '/education' },
        { name: 'Nutrition', path: '/nutrition' },
        { name: 'House of Happiness', path: '/house-of-happiness' },
      ]
    },
    { name: 'Impact',
    path: '/milestones',
      dropdown: [
        { name: 'Milestones', path: '/milestones' },
        { name: 'Success Stories', path: '/success-stories' },
      ]
    },
    { name: 'Our Partners', path: '/our-partners' },

    {
      name: 'Collaborate',
      path: '/donate-for-a-cause',
      dropdown: [
        { name: 'Donate for a Cause', path: '/donate-for-a-cause' },
        { name: 'Get Involved', path: '/get-involved' },
        { name: 'Partner With Us', path: '/partner-with-us' },
        { name: 'Contribute Materials', path: '/contribute-materials' },
      ]
    },
    { name: 'News + Events', path: '/news-events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      {/* Add Google Fonts and Custom Styles */}
      {/* Google Fonts are loaded globally. All color and background styles are now Tailwind theme-based. */}

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[1000] bg-gradient-to-r from-primary via-secondary to-primary-dark transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl shadow-primary/10'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/HoHLogo.png"
                    alt="House of Humanity Logo"
                    className="h-16 w-auto"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => item.dropdown && setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    to={item.path}
                    className={`nav-item flex items-center space-x-1 px-4 py-3 rounded-xl text-sm font-medium header-font transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'active text-primary bg-primary/10 shadow-lg shadow-primary/20'
                        : 'text-primary-dark hover:text-primary bg-transparent hover:bg-primary/5'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <motion.div
                        animate={{ rotate: dropdownOpen === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
  {item.dropdown && dropdownOpen === item.name && (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-full left-0 mt-2 w-72 glassmorphism rounded-2xl shadow-2xl border border-white/20 py-3 z-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      {item.dropdown.map((subItem, subIndex) => (
        <div key={subItem.name}>
          <Link
            to={subItem.path}
            className="dropdown-item block px-5 py-3 text-sm text-primary-dark hover:text-primary font-medium header-font rounded-lg mx-2 relative z-10 bg-transparent hover:bg-primary/10"
          >
            {subItem.name}
          </Link>
        </div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
                </motion.div>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.button
                className="p-3 rounded-full bg-primary/10 text-primary-dark shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sun size={20} />
              </motion.button>
              
              {/* SITAARE Button using shared Button component */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/sitaare">
                  <Button
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group bg-gradient-to-r from-primary to-secondary"
                  >
                    <span className="relative z-10">SITAARE</span>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <motion.button
                className="p-2 rounded-full bg-primary/10 text-primary-dark shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sun size={20} />
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-dark hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200 bg-transparent hover:bg-primary/10"
                aria-expanded="false"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open main menu</span>
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="block h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden glassmorphism shadow-xl overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium header-font transition-colors duration-200 ${dropdownOpen === item.name ? 'bg-primary/10 text-primary' : 'text-primary-dark hover:bg-primary/5 hover:text-primary'}`}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: dropdownOpen === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: 'easeInOut' }}
                              className="pl-4 pr-2 mt-1 space-y-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-2 rounded-md text-sm font-medium text-primary-dark hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium header-font transition-colors duration-200 ${location.pathname === item.path ? 'bg-primary/10 text-primary' : 'text-primary-dark hover:bg-primary/5 hover:text-primary'}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center mt-4 relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group bg-gradient-to-r from-primary to-secondary"
                >
                  <span className="relative z-10">SITAARE</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[1000] group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative p-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 float-animation group-hover:animate-none">
              <ArrowUp className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Keyboard shortcuts handler */}
      <div className="hidden">
        {isOpen && (
          <div
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsOpen(false);
              }
            }}
            tabIndex={-1}
          />
        )}
      </div>
    </>
  );
};

export default Header;