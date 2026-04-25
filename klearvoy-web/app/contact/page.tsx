import React from 'react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-heading text-primary mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-standard">
            <h3 className="text-xl font-semibold font-heading text-primary mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Factory Address</h4>
                <p className="text-gray-700">Block B, No.168, Yihe Industrial Zone, Lishui Town, Nanhai District, Foshan</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Phone / WhatsApp</h4>
                <p className="text-gray-700">+86 156 9241 5580</p>
                <div className="mt-3">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Scan to connect on WhatsApp</h5>
                  <Image
                    src="/assets/images/contact/whatsapp-qr-code.jpg"
                    alt="WhatsApp QR Code"
                    width={150}
                    height={150}
                    className="rounded-md shadow-md"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-medium text-primary">Email</h4>
                <p className="text-gray-700">info@klearvoy.com</p>
                <p className="text-gray-700">hudson.zheng@klearvoy.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-standard">
            <h3 className="text-xl font-semibold font-heading text-primary mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta transition-standard" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta transition-standard" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta transition-standard"></textarea>
              </div>
              <button type="submit" className="w-full bg-cta text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta transition-standard cursor-pointer">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;