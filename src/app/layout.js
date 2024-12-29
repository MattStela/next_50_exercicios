"use client";
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { metadata } from './metadata';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const initialMode = localStorage.getItem('darkMode') === 'true';
      console.log('Initial dark mode from localStorage:', initialMode);
      return initialMode;
    }
    return false;
  });
  const footerRef = useRef(null);

  useEffect(() => {
    console.log('Applying dark mode:', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = (event) => {
    event.preventDefault();
    console.log('Current dark mode:', darkMode);
    const newDarkMode = !darkMode;
    console.log('Toggling dark mode to:', newDarkMode);
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (footerRef.current) {
      console.log('Scrolling into view');
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Footer ref is null');
    }
  };

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.iconHRef} />
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/github-mark.png" as="image" />
        <link rel="preload" href="/images/In-Blue-128.png" as="image" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header darkMode={darkMode} />
        <main>{children}</main>
        <div ref={footerRef}>
          <Footer onClick={toggleDarkMode} darkMode={darkMode} />
        </div>
      </body>
    </html>
  );
}
