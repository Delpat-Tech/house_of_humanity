import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUp } from "lucide-react";
import TrapeziumButton from "../ui/TrapeziumButton";
import { ThemeToggle } from "../../shared/components/ThemeToggle";

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
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setIsScrolled(scrollTop > 10);
      setShowBackToTop(scrollTop > 300);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Who We Are",
      path: "/about",
      dropdown: [
        { name: "About us", path: "/about-us" },
        { name: "Our Team", path: "/our-team" },
      ],
    },
    {
      name: "What We Do",
      path: "/what-we-do",
      dropdown: [
        { name: "Projects", path: "/projects" },
        { name: "Sitaare", path: "/sitaare" },
        { name: "Health Care", path: "/health-care" },
        { name: "Sustainable Livelihood", path: "/sustainable-livelihood" },
        { name: "Education", path: "/education" },
        { name: "Nutrition", path: "/nutrition" },
        { name: "House of Happiness", path: "/house-of-happiness" },
      ],
    },
    {
      name: "Impact",
      path: "/milestones",
      dropdown: [
        { name: "Milestones", path: "/milestones" },
        { name: "Success Stories", path: "/success-stories" },
      ],
    },
    { name: "Our Partners", path: "/our-partners" },

    {
      name: "Collaborate",
      path: "/donate-for-a-cause",
      dropdown: [
        { name: "Donate for a Cause", path: "/donate-for-a-cause" },
        { name: "Get Involved", path: "/get-involved" },
        { name: "Partner With Us", path: "/partner-with-us" },
        { name: "Contribute Materials", path: "/contribute-materials" },
      ],
    },
    { name: "News + Events", path: "/news-events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact-us" },
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
            background: #0098DB;
            transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
            transform: translateX(-50%);
          }
          
          .nav-item:hover::before,
          .nav-item.active::before {
            width: 100%;
          }
          
          .glassmorphism {
            background: rgba(233, 247, 250, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(233, 247, 250, 0.2);
          }
          
          .dark .glassmorphism {
            background: rgba(17, 24, 39, 0.95);
            border: 1px solid rgba(55, 65, 81, 0.2);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #0098DB 0%, #70BF44 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: #0098DB;
          }
          
          .donate-btn {
            background: linear-gradient(135deg, #70BF44 0%, #5A9E35 100%);
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
            background: linear-gradient(90deg, rgba(0,152,219,0.85) 0%, rgba(112,191,68,0.85) 100%);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 6px;
            border: 1px solid rgba(255,255,255,0.15);
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
            background: #E0F7FA;
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
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "glassmorphism shadow-2xl shadow-primary-blue/10"
            : "bg-off-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
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
                  onMouseEnter={() =>
                    item.dropdown && setDropdownOpen(item.name)
                  }
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {item.dropdown ? (
                    <span
                      className={`nav-item flex items-center space-x-1 px-4 py-3 rounded-xl text-xs font-medium header-font transition-all duration-300 cursor-default select-none ${
                        dropdownOpen === item.name
                          ? "active text-primary-blue bg-warm-light-blue dark:bg-gray-700 shadow-lg shadow-primary-blue/20 border border-primary-blue/20"
                          : "text-dark-gray dark:text-gray-200 hover:text-primary-blue hover:bg-warm-light-blue dark:hover:bg-gray-700 hover:border hover:border-primary-blue/20"
                      }`}
                      onMouseEnter={() => setDropdownOpen(item.name)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        animate={{
                          rotate: dropdownOpen === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-fresh-green" />
                      </motion.div>
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-item flex items-center space-x-1 px-4 py-3 rounded-xl text-xs font-medium header-font transition-all duration-300 ${
                        location.pathname === item.path
                          ? "active text-primary-blue bg-warm-light-blue dark:bg-gray-700 shadow-lg shadow-primary-blue/20 border border-primary-blue/20"
                          : "text-dark-gray dark:text-gray-200 hover:text-primary-blue hover:bg-warm-light-blue dark:hover:bg-gray-700 hover:border hover:border-primary-blue/20"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && dropdownOpen === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-warm-light-blue dark:border-gray-600 py-3 z-50 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-fresh-green/5"></div>
                        {item.dropdown.map((subItem, subIndex) => (
                          <div key={subItem.name}>
                            <Link
                              to={subItem.path}
                              className="dropdown-item block px-5 py-3 text-xs text-dark-gray dark:text-gray-200 hover:text-primary-blue font-medium header-font rounded-lg mx-2 relative z-10"
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
              <ThemeToggle size="md" variant="default" />

              {/* SITAARE Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/sitaare">
                  <TrapeziumButton
                    label="SITAARE"
                    variant="sitaare"
                    className="donate-btn relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle size="sm" variant="default" />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary-blue hover:text-fresh-green hover:bg-warm-light-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue transition-all duration-200"
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
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden glassmorphism shadow-xl overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === item.name ? null : item.name
                            )
                          }
                          className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-sm font-medium header-font transition-colors duration-200 ${
                            dropdownOpen === item.name
                              ? "bg-warm-light-blue dark:bg-gray-700 text-primary-blue"
                              : "text-dark-gray dark:text-gray-200 hover:bg-warm-light-blue dark:hover:bg-gray-700 hover:text-primary-blue"
                          }`}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{
                              rotate: dropdownOpen === item.name ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="pl-4 pr-2 mt-1 space-y-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-2 rounded-md text-xs font-medium text-dark-gray dark:text-gray-200 hover:bg-warm-light-blue dark:hover:bg-gray-700 hover:text-primary-blue transition-colors duration-200"
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
                        className={`block px-3 py-2 rounded-md text-sm font-medium header-font transition-colors duration-200 ${
                          location.pathname === item.path
                            ? "bg-warm-light-blue dark:bg-gray-700 text-primary-blue"
                            : "text-dark-gray dark:text-gray-200 hover:bg-warm-light-blue dark:hover:bg-gray-700 hover:text-primary-blue"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/sitaare"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center mt-4"
                >
                  <TrapeziumButton
                    label="SITAARE"
                    variant="sitaare"
                    className="donate-btn w-full text-center relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group"
                  />
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
            <div className="relative p-4 bg-primary-blue dark:bg-primary-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 float-animation group-hover:animate-none">
              <ArrowUp className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-fresh-green rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Keyboard shortcuts handler */}
      <div className="hidden">
        {isOpen && (
          <div
            onKeyDown={(e) => {
              if (e.key === "Escape") {
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
