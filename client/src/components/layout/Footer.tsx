import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
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
            <p className="text-pink-100 text-sm leading-relaxed font-light">
            House of Humanity is a youth-led organization dedicated to empowering communities through education, humanitarian aid, and social impact initiatives that foster dignity, equality, and opportunity for all.
            </p>
            <div className="pt-4">
              <a
                href="#donate"
                className="inline-flex items-center bg-white text-pink-600 px-8 py-3 rounded-full font-semibold text-sm hover:bg-pink-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                DONATE NOW
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Contact
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white rounded-full mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-pink-100" />
                </div>
                <div className="text-pink-100 text-sm leading-relaxed">
                  <p className="font-medium text-white mb-1">Address</p>
                  <p>B1/44 Somdutt park, Near Rajesh tower, Gotri road, Vadodara - 390023</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-pink-100" />
                </div>
                <p className="text-pink-100 text-sm">+91 99741 91811</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-pink-100" />
                </div>
                <p className="text-pink-100 text-sm"> Info@houseofhumanity.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white rounded-full mt-2"></div>
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
                    className="flex items-center space-x-2 text-pink-100 hover:text-white transition-all duration-200 text-sm group hover:translate-x-1"
                  >
                    <ArrowRight className="w-3 h-3 text-pink-200 group-hover:text-white transition-colors duration-200" />
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Social Media
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white rounded-full mt-2"></div>
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
                  className="flex items-center space-x-3 text-pink-100 hover:text-white transition-all duration-200 group hover:translate-x-1"
                >
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{name}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-4 space-y-3">
              <p className="text-pink-100 text-sm font-medium">Stay Updated</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-white text-pink-600 rounded-lg text-sm font-semibold hover:bg-pink-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-pink-100 text-sm">
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
                className="text-pink-200 hover:text-white text-sm transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600"></div>
    </footer>
  );
};

export default Footer;