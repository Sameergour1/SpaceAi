import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-6 w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-cyan-400">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#features" className="hover:text-cyan-300 transition-all duration-200">Features</a></li>
            <li><a href="#applications" className="hover:text-cyan-300 transition-all duration-200">Applications</a></li>
            <li><a href="#team" className="hover:text-cyan-300 transition-all duration-200">Team</a></li>
            <li><a href="#contact" className="hover:text-cyan-300 transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-cyan-400">AI World</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bringing intelligence to innovation. Join us in reshaping the world with cutting-edge AI technologies and collaborative solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-cyan-400">Contact Us</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: <a href="mailto:support@aihub.com" className="hover:text-white">support@aihub.com</a></li>
            <li>Phone: +91 000000000</li>
            <li>Location: Delhi, India</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-cyan-400">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/5 hover:bg-cyan-500 text-white hover:text-black p-3 rounded-lg transition duration-300 shadow-md">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/5 hover:bg-pink-500 text-white hover:text-white p-3 rounded-lg transition duration-300 shadow-md">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white/5 hover:bg-sky-400 text-white hover:text-black p-3 rounded-lg transition duration-300 shadow-md">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white/5 hover:bg-blue-700 text-white hover:text-white p-3 rounded-lg transition duration-300 shadow-md">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500 px-4 sm:px-6">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-medium">AI World</span>. All rights reserved By Md Sameer Gour.
      </div>
    </footer>
  );
};

export default Footer;
