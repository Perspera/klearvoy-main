import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt="About Klearvoy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">About Us</h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">Our Story</p>
              <h2 className="text-4xl font-heading text-primary mb-8 leading-tight">
                Building Excellence Since 2010
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Klearvoy is a leading manufacturer of high-quality hardware furniture, integrating R&D, design, production, and global sales. We specialize in durable, ergonomic, and cost-effective solutions for offices, hotels, schools, hospitals, and residential environments.
              </p>
              <p className="text-secondary leading-relaxed">
                With state-of-the-art production facilities and a strict quality control system, we ensure every product meets international standards for stability, corrosion resistance, and environmental safety.
              </p>
            </div>
            <div className="relative h-[450px]">
              <Image
                src="/assets/images/team/global-sales-team.png"
                alt="Klearvoy Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">Why Choose Us</p>
            <h2 className="text-4xl font-heading text-primary">Our Strengths</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading text-primary mb-4">Quality Assurance</h3>
              <p className="text-secondary leading-relaxed">
                Strict quality control system ensuring every product meets international standards.
              </p>
            </div>
            
            <div className="bg-white p-10 hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading text-primary mb-4">Custom Solutions</h3>
              <p className="text-secondary leading-relaxed">
                Tailored hardware furniture solutions to meet your specific project requirements.
              </p>
            </div>
            
            <div className="bg-white p-10 hover:shadow-lg transition-smooth">
              <div className="w-16 h-16 bg-accent/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading text-primary mb-4">Global Support</h3>
              <p className="text-secondary leading-relaxed">
                Dedicated sales team providing exceptional service and support worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading text-primary mb-6">Work With Us</h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Partner with Klearvoy for your next hardware furniture project
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;