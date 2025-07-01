import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, ArrowUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Set light mode as default
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference, default to light
    const savedTheme = typeof window !== 'undefined' ? window.sessionStorage?.getItem('theme') : null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
          
          .header-font {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .nav-item {
            position: relative;
            overflow: hidden;
          }
          
          .nav-item::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #EC4899, #BE185D);
            transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
            transform: translateX(-50%);
          }
          
          .nav-item:hover::before,
          .nav-item.active::before {
            width: 100%;
          }
          
          .glassmorphism {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .glassmorphism-dark {
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #EC4899 0%, #BE185D 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: #EC4899;
          }
          
          .donate-btn {
            background: linear-gradient(135deg, #EC4899 0%, #BE185D 100%);
            position: relative;
            overflow: hidden;
          }
          
          .donate-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          
          .donate-btn:hover::before {
            left: 100%;
          }
          
          .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #EC4899, #BE185D, #8B5CF6);
            z-index: 1000;
            transition: width 0.1s ease;
          }
          
          .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 1000;
          }
          
          .dropdown-item {
            transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
          }
          
          .dropdown-item:hover {
            transform: translateX(8px);
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(190, 24, 93, 0.1));
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'glassmorphism shadow-2xl shadow-pink-500/10 dark:glassmorphism-dark dark:shadow-fuchsia-500/20' 
            : 'bg-white/90 backdrop-blur-sm dark:bg-gray-900/90'
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
                  <div className="h-16 w-16 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-bold text-xl">
                    LOGO
                  </div>
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
                        ? 'active text-pink-600 bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg shadow-pink-500/20 dark:text-fuchsia-400 dark:bg-fuchsia-900/30 dark:shadow-fuchsia-500/30' 
                        : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-pink-50/50 hover:to-rose-50/50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-fuchsia-900/20'
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
                        className="absolute top-full left-0 mt-2 w-72 glassmorphism dark:glassmorphism-dark rounded-2xl shadow-2xl border border-white/20 dark:border-fuchsia-700/20 py-3 z-50 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 dark:from-fuchsia-500/10 dark:to-purple-500/10"></div>
                        {item.dropdown.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05, duration: 0.3 }}
                          >
                            <Link
                              to={subItem.path}
                              className="dropdown-item block px-5 py-3 text-sm text-slate-800 hover:text-slate-900 font-medium header-font rounded-lg mx-2 relative z-10 dark:text-gray-200 dark:hover:text-white dark:hover:bg-fuchsia-800/20"
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-white shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              {/* SITAARE Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/donate"
                  className="donate-btn relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10">SITAARE</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-200/80 dark:bg-slate-700/80 text-slate-700 dark:text-white shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-all duration-200"
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
              className="lg:hidden glassmorphism dark:glassmorphism-dark shadow-xl dark:shadow-fuchsia-900/30 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium header-font transition-colors duration-200 ${dropdownOpen === item.name ? 'bg-pink-100 text-pink-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-200 dark:hover:bg-slate-800 dark:hover:text-white'}`}
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
                                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white transition-colors duration-200"
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
                        className={`block px-3 py-2 rounded-md text-base font-medium header-font transition-colors duration-200 ${location.pathname === item.path ? 'bg-pink-100 text-pink-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-200 dark:hover:bg-slate-800 dark:hover:text-white'}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="donate-btn w-full text-center mt-4 relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group"
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
            className="back-to-top group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative p-4 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-fuchsia-500 dark:to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 float-animation group-hover:animate-none">
              <ArrowUp className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 dark:from-fuchsia-600 dark:to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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