import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray dark:bg-gray-900 text-off-white dark:text-gray-200 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-fresh-green rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warm-light-blue rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-3 group">
                <img
                  src="/HoHLogo.png"
                  alt="House of Humanity Logo"
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <p className="text-off-white text-sm leading-relaxed font-light">
            House of Humanity is a youth-led organization dedicated to empowering communities through education, humanitarian aid, and social impact initiatives that foster dignity, equality, and opportunity for all.
            </p>
            <div className="pt-4">
              <a
                href="#donate"
                className="inline-flex items-center bg-primary-blue text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-fresh-green hover:text-dark-gray hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                DONATE NOW
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-fresh-green group-hover:text-dark-gray" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-off-white relative">
              Contact
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-blue rounded-full mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-warm-light-blue rounded-lg backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                </div>
                <div className="text-off-white text-sm leading-relaxed">
                  <p className="font-medium text-off-white mb-1">Address</p>
                  <p>B1/44 Somdutt park, Near Rajesh tower, Gotri road, Vadodara - 390023</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-warm-light-blue rounded-lg backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-primary-blue" />
                </div>
                <p className="text-off-white text-sm">+91 99741 91811</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-warm-light-blue rounded-lg backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-primary-blue" />
                </div>
                <p className="text-off-white text-sm"> Info@houseofhumanity.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-off-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-blue rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/sitaare", text: "Our Programs" },
                { to: "/news-events", text: "Events" },
                { to: "/ways-to-donate", text: "Ways to Donate" },
                { to: "/milestones", text: "Impact" },
                { to: "/gallery", text: "Gallery" },
                { to: "/contact-us", text: "Contact Us" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.to} 
                    className="flex items-center space-x-2 text-off-white hover:text-primary-blue transition-all duration-200 text-sm group hover:translate-x-1"
                  >
                    <ArrowRight className="w-3 h-3 text-fresh-green group-hover:text-primary-blue transition-colors duration-200" />
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-off-white relative">
              Social Media
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-blue rounded-full mt-2"></div>
            </h3>
            <div className="space-y-4">
              {[
                { Icon: Facebook, name: "Facebook", href: "https://www.facebook.com/houseofhumanityfoundation/" },
                { Icon: Instagram, name: "Instagram", href: "https://www.instagram.com/houseofhumanitycharitabletrust/?hl=en" },
                { Icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/house-of-humanity-charitable-trust/?originalSubdomain=in" }
              ].map(({ Icon, name, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="flex items-center space-x-3 text-off-white hover:text-primary-blue transition-all duration-200 group hover:translate-x-1"
                >
                  <div className="p-2 bg-warm-light-blue rounded-lg backdrop-blur-sm group-hover:bg-fresh-green transition-all duration-200">
                    <Icon className="w-5 h-5 text-primary-blue group-hover:text-dark-gray" />
                  </div>
                  <span className="text-sm font-medium">{name}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-4 space-y-3">
              <p className="text-off-white text-sm font-medium">Stay Updated</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-warm-light-blue dark:bg-gray-700 backdrop-blur-sm border border-primary-blue/20 dark:border-gray-600 rounded-lg text-dark-gray dark:text-gray-100 placeholder-dark-gray dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-fresh-green text-dark-gray rounded-lg text-sm font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary-blue/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-off-white text-sm">
            © 2024 House of Humanity. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { href: "#privacy", text: "Privacy Policy" },
              { href: "#terms", text: "Terms of Service" },
              { href: "#cookies", text: "Cookie Policy" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-fresh-green hover:text-primary-blue text-sm transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-blue"></div>
    </footer>
  );
};

export default Footer;