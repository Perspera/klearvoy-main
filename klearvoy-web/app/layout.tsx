import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Klearvoy | Professional Hardware Furniture Solutions',
  description: 'Durable, functional, and aesthetic hardware furniture solutions for commercial and residential spaces.',
  keywords: ['hardware furniture', 'office furniture', 'wardrobe hardware', 'furniture solutions'],
  authors: [{ name: 'Klearvoy' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}