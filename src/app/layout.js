import React from 'react';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RNT v1",
  description: "React / Next / Tailwind projeto v1",
  iconHRef: "/favicon.ico",
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/github-mark.png" as="image" />
        <link rel="preload" href="/images/In-Blue-128.png" as="image" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
