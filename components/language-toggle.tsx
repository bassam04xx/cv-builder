"use client"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/use-locale"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "fr" : "en")
  }

  return (
    <Button variant="outline" onClick={toggleLanguage} className="flex items-center gap-2 bg-transparent">
      <Globe className="w-4 h-4" />
      {locale === "en" ? "Français" : "English"}
    </Button>
  )
}
