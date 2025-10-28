import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kavya Shethiya</h3>
            <p className="text-gray-400 dark:text-gray-500">
              B.Tech Mechatronics Student
              <br />
              UAV Designer | Robotics Engineer
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:kavyashethiya@gmail.com"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                kavyashethiya@gmail.com
              </a>
              <a
                href="tel:+919638200432"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 9638200432
              </a>
              <a
                href="https://linkedin.com/in/kavya-shethiya-462b132b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-400 dark:text-gray-600">
          <p>&copy; {new Date().getFullYear()} Kavya Shethiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;