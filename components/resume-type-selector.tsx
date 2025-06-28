"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LanguageToggle } from "@/components/language-toggle"
import { useLocale } from "@/hooks/use-locale"
import { ArrowLeft, ArrowRight, FileText, MapPin } from "lucide-react"

const resumeTypes = [
  {
    id: "canadian",
    flag: "🇨🇦",
    popular: true,
    features: ["bilingual", "skills", "volunteer"],
  },
  {
    id: "us",
    flag: "🇺🇸",
    popular: true,
    features: ["ats", "achievements", "keywords"],
  },
  {
    id: "european",
    flag: "🇪🇺",
    popular: false,
    features: ["photo", "languages", "europass"],
  },
  {
    id: "tunisian",
    flag: "🇹🇳",
    popular: false,
    features: ["arabic", "french", "local"],
  },
  {
    id: "international",
    flag: "🌍",
    popular: false,
    features: ["global", "flexible", "multicultural"],
  },
]

export function ResumeTypeSelector() {
  const router = useRouter()
  const { t } = useLocale()

  const handleTypeSelect = (type: string) => {
    router.push(`/select-template?type=${type}`)
  }

  const handleBack = () => {
    router.push("/")
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.typeSelector.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.typeSelector.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resumeTypes.map((type) => (
            <Card
              key={type.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-300"
              onClick={() => handleTypeSelect(type.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{type.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {t.typeSelector.types[type.id as keyof typeof t.typeSelector.types].name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {t.typeSelector.types[type.id as keyof typeof t.typeSelector.types].region}
                      </p>
                    </div>
                  </div>
                  {type.popular && (
                    <Badge className="bg-green-100 text-green-700 border-green-200">{t.typeSelector.popular}</Badge>
                  )}
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {t.typeSelector.types[type.id as keyof typeof t.typeSelector.types].description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-gray-700">{t.typeSelector.features}:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {t.typeSelector.featureLabels[feature as keyof typeof t.typeSelector.featureLabels]}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full flex items-center justify-center gap-2">
                  {t.typeSelector.select}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">{t.typeSelector.help}</p>
        </div>
      </div>
    </div>
  )
}
