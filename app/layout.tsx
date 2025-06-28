import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LocaleProvider } from "@/hooks/use-locale"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ResumeBuilder - Professional Resume Creator",
  description: "Create professional resumes for global job markets with our easy-to-use builder.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
