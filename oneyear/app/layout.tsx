import React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Dancing_Script } from "next/font/google"

import "./globals.css"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const _dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Diary of Our Memories",
  description: "A romantic anniversary celebration",
}

export const viewport = {
  themeColor: "#f5ebe0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${_playfair.variable} ${_dancing.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
