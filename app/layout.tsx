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
      <head>
        <link rel="icon" href="/Mahalaxmi Infra new Logo.png" />
        <title>Mahalaxmi Infra</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17972228512"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17972228512');
            `,
          }}
        ></script>
      </head>
      <body >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
