import type React from "react"
import { Geist } from "next/font/google"
import "./globals.css"
import { fredoka } from "@/lib/font"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <title>Modra - AI 3D Model Generator</title>
        <link rel="icon" href="/modra-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
<body className="scrollable bg-black text-white">{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };

    