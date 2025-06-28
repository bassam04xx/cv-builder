"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLocale } from "@/hooks/use-locale"
import { ArrowRight, Layout, Palette, Briefcase, Star, Zap, Crown } from "lucide-react"
import { Header } from "@/components/header"

// Empty template components for different resume types
import { CanadianModernTemplate } from "@/components/templates/canadian/modern-template"
import { CanadianClassicTemplate } from "@/components/templates/canadian/classic-template"
import { USModernTemplate } from "@/components/templates/us/modern-template"
import { USClassicTemplate } from "@/components/templates/us/classic-template"
import { EuropeanModernTemplate } from "@/components/templates/european/modern-template"
import { TunisianModernTemplate } from "@/components/templates/tunisian/modern-template"
import { CanadianCreativeTemplate } from "./templates/canadian/creative-template"
import { USExecutiveTemplate } from "./templates/us/executive-template"
import { EuropeanClassicTemplate } from "./templates/european/classic-template"
import { EuropeanCreativeTemplate } from "./templates/european/creative-template"
import { TunisianBilingualTemplate } from "./templates/tunisian/billingual-template"
import { TunisianClassicTemplate } from "./templates/tunisian/classic-template"


const templatesByType = {
  canadian: [
    { id: "modern", name: "Modern", component: CanadianModernTemplate, recommended: true, icon: Layout },
    { id: "classic", name: "Classic", component: CanadianClassicTemplate, recommended: false, icon: Palette },
    { id: "creative", name: "Creative", component: CanadianCreativeTemplate, recommended: false, icon: Zap },
  ],
  us: [
    { id: "modern", name: "ATS-Friendly", component: USModernTemplate, recommended: true, icon: Briefcase },
    { id: "classic", name: "Executive", component: USClassicTemplate, recommended: false, icon: Star },
    { id: "executive", name: "Premium", component: USExecutiveTemplate, recommended: false, icon: Crown },
  ],
  european: [
    { id: "modern", name: "Europass Style", component: EuropeanModernTemplate, recommended: true, icon: Layout },
    { id: "classic", name: "Traditional", component: EuropeanClassicTemplate, recommended: false, icon: Palette },
    { id: "creative", name: "Creative", component: EuropeanCreativeTemplate, recommended: false, icon: Zap },
  ],
  tunisian: [
    { id: "modern", name: "Modern", component: TunisianModernTemplate, recommended: true, icon: Layout },
    { id: "classic", name: "Classic", component: TunisianClassicTemplate, recommended: false, icon: Palette },
    { id: "bilingual", name: "Bilingual Pro", component: TunisianBilingualTemplate, recommended: false, icon: Star },
  ],
  international: [
    { id: "modern", name: "Global Modern", component: CanadianModernTemplate, recommended: true, icon: Layout },
    { id: "classic", name: "Universal", component: CanadianClassicTemplate, recommended: false, icon: Palette },
    { id: "creative", name: "International", component: CanadianCreativeTemplate, recommended: false, icon: Zap },
  ],
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
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <Header showBackButton onBack={handleBack} />

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.templateSelector.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.templateSelector.subtitle.replace("{type}", t.typeSelector.types[resumeType].name)}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {templates.map((template) => {
            const IconComponent = template.icon
            const TemplateComponent = template.component

            return (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-102 ${
                  selectedTemplate === template.id ? "ring-3 ring-blue-500 shadow-lg" : ""
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-900">{template.name}</h3>
                    </div>
                    {template.recommended && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        {t.templateSelector.recommended}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {t.templateSelector.descriptions[template.id as keyof typeof t.templateSelector.descriptions]}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-2 transform scale-50 origin-top h-32 overflow-hidden">
                    <TemplateComponent />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedTemplate}
            size="lg"
            className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
          >
            {t.templateSelector.continue}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
