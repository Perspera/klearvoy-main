import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">KLEARVOY</h3>
            <p className="text-gray-400">
              Precision Crafted Hardware Furniture Solutions
            </p>
          </div>
          <div>
            <h4 className="font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-standard cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-standard cursor-pointer">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-standard cursor-pointer">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-standard cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-heading mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/download" className="text-gray-400 hover:text-white transition-standard cursor-pointer">Downloads</Link></li>
              <li><Link href="/cases" className="text-gray-400 hover:text-white transition-standard cursor-pointer">Cases</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-standard cursor-pointer">News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-heading mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Block B, No.168, Yihe Industrial Zone</li>
              <li>Lishui Town, Nanhai District, Foshan</li>
              <li>+86 156 9241 5580</li>
              <li>info@klearvoy.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Klearvoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;