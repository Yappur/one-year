import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script } from "next/font/google";

import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const _dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Feliz Aniversario Mi Amor",
  description: "Diario de nuestro primer año juntos",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#f5ebe0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5ebe0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${_playfair.variable} ${_dancing.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
