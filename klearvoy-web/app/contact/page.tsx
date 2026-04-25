import React from 'react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">Get In Touch</p>
              <h2 className="text-4xl font-heading text-primary mb-8">Let's Discuss Your Project</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">Factory Address</h3>
                  <p className="text-secondary leading-relaxed">
                    Block B, No.168, Yihe Industrial Zone<br />
                    Lishui Town, Nanhai District, Foshan
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">Phone / WhatsApp</h3>
                  <p className="text-secondary">+86 156 9241 5580</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">Email</h3>
                  <p className="text-secondary">info@klearvoy.com</p>
                  <p className="text-secondary">hudson.zheng@klearvoy.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">WhatsApp</h3>
                  <div className="mt-3">
                    <Image
                      src="/assets/images/contact/whatsapp-qr-code.jpg"
                      alt="WhatsApp QR Code"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card-bg p-10">
              <h3 className="text-2xl font-heading text-primary mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-border focus:border-accent-dark focus:outline-none transition-smooth"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-border focus:border-accent-dark focus:outline-none transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border focus:border-accent-dark focus:outline-none transition-smooth resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;