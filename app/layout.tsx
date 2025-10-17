import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tu palabra tiene poder - Nicole Coimbra Soria",
  description:
    "Convierte tu voz en tu mayor herramienta de éxito. Domina el miedo escénico, conquista los escenarios y comunica con autenticidad.",
  generator: "create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
