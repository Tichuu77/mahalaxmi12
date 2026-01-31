import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

 

export const metadata: Metadata = {
  title: "Mahalaxmi Infra",
  description: "Mahalaxmi  Infra - NMRDA & RL Residential Plotted Project",
  generator: "v0.app",
  icons: "/Mahalaxmi Infra new Logo.png",
  keywords: [
    "Plots near MIHAN Nagpur",
    "NMRDA plots Wardha Road Nagpur",
    "Plots near AIIMS Nagpur",
    "Samruddhi Mahamarg residential plots",
    "Residential plots in Sumthana Nagpur",
    "Plots near D-Mart Wardha Road",
    "Mahalaxmi Nagar 45 Nagpur",
    "Property near NCI Nagpur",
    "Plots near Samruddhi Mahamarg Interchange",
    "Budget plots on Wardha Road Nagpur"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
