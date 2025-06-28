"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LanguageToggle } from "@/components/language-toggle"
import { useLocale } from "@/hooks/use-locale"
import { ArrowLeft, ArrowRight, FileText, Layout, Palette, Briefcase, Star } from "lucide-react"

// Empty template components for different resume types
import { CanadianModernTemplate } from "@/components/templates/canadian/modern-template"
import { CanadianClassicTemplate } from "@/components/templates/canadian/classic-template"
import { USModernTemplate } from "@/components/templates/us/modern-template"
import { USClassicTemplate } from "@/components/templates/us/classic-template"
import { EuropeanModernTemplate } from "@/components/templates/european/modern-template"
import { TunisianModernTemplate } from "@/components/templates/tunisian/modern-template"

const templatesByType = {
  canadian: [
    { id: "modern", name: "Modern", component: CanadianModernTemplate, recommended: true, icon: Layout },
    { id: "classic", name: "Classic", component: CanadianClassicTemplate, recommended: false, icon: Palette },
  ],
  us: [
    { id: "modern", name: "ATS-Friendly", component: USModernTemplate, recommended: true, icon: Briefcase },
    { id: "classic", name: "Executive", component: USClassicTemplate, recommended: false, icon: Star },
  ],
  european: [
    { id: "modern", name: "Europass Style", component: EuropeanModernTemplate, recommended: true, icon: Layout },
  ],
  tunisian: [{ id: "modern", name: "Bilingual", component: TunisianModernTemplate, recommended: true, icon: Layout }],
  international: [{ id: "modern", name: "Global", component: CanadianModernTemplate, recommended: true, icon: Layout }],
}

export function TemplateSelector() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useLocale()
  const resumeType = (searchParams.get("type") as keyof typeof templatesByType) || "canadian"
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const templates = templatesByType[resumeType] || templatesByType.canadian

  const handleContinue = () => {
    if (selectedTemplate) {
      router.push(`/editor?type=${resumeType}&template=${selectedTemplate}`)
    }
  }

  const handleBack = () => {
    router.push("/select-type")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.common.back}
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-lg p-2">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">ResumeBuilder</span>
          </div>
        </div>
        <LanguageToggle />
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.templateSelector.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.templateSelector.subtitle.replace("{type}", t.typeSelector.types[resumeType].name)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {templates.map((template) => {
            const IconComponent = template.icon
            const TemplateComponent = template.component

            return (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedTemplate === template.id ? "ring-4 ring-blue-500 shadow-xl" : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                    </div>
                    {template.recommended && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {t.templateSelector.recommended}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {t.templateSelector.descriptions[template.id as keyof typeof t.templateSelector.descriptions]}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 transform scale-75 origin-top">
                    <TemplateComponent />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button onClick={handleContinue} disabled={!selectedTemplate} size="lg" className="px-8 py-3 text-lg">
            {t.templateSelector.continue}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
