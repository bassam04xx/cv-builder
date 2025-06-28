"use client"

import { FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "./language-toggle"
import { useLocale } from "@/hooks/use-locale"

interface HeaderProps {
  showBackButton?: boolean
  onBack?: () => void
}

export function Header({ showBackButton = false, onBack }: HeaderProps) {
  const { t } = useLocale()

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {showBackButton && onBack && (
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.common.back}
          </Button>
        )}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-lg p-2">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">ResumeBuilder</span>
        </div>
      </div>
      <LanguageToggle />
    </header>
  )
}
