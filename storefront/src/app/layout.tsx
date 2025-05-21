import { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Mona_Sans, Dancing_Script } from "next/font/google"
import { getBaseURL } from "@lib/util/env"

import "../styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

const monaSans = Mona_Sans({
  preload: true,
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: "variable",
  variable: "--font-mona-sans",
})

const dancingScript = Dancing_Script({
  preload: true,
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-dancing-script",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className="antialiased">
      <body className={`${monaSans.className} ${dancingScript.variable}`}>
        <main className="relative">{props.children}</main>
        <SpeedInsights />
      </body>
    </html>
  )
}
