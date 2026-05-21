import React from "react";
import { Link } from "react-router-dom";
import { HardHat, Mail, Phone, MapPin, Share2, Send, Camera, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <HardHat className="h-8 w-8 text-orange" />
              </div>
              <span className="text-2xl font-heading font-extrabold text-white tracking-tight">
                BELMONT
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Building with Strength. Delivering with Trust. Belmont Construction is a leader in high-quality residential, commercial, and civil engineering projects.
            </p>
            <div className="flex space-x-4">
              {[Share2, Send, Camera, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-orange transition-colors">Latest Projects</Link>
              </li>
              <li>
                <Link to="/how-we-work" className="text-gray-400 hover:text-orange transition-colors">How We Work</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-orange transition-colors">News & Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Residential Construction</li>
              <li className="text-gray-400">Commercial Construction</li>
              <li className="text-gray-400">Civil Engineering</li>
              <li className="text-gray-400">Renovation & Remodeling</li>
              <li className="text-gray-400">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-orange shrink-0 mt-1" />
                <span>Belmont Plaza, 4th Floor, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-orange shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-orange shrink-0" />
                <span>info@belmontconstruction.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Belmont Construction Company. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;