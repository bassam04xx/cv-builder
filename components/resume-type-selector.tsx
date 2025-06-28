"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLocale } from "@/hooks/use-locale"
import { ArrowRight, MapPin } from "lucide-react"

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

export function ResumeTypeSelection() {
  const router = useRouter()
  const { t } = useLocale()

  const handleTypeSelect = (type: string) => {
    router.push(`/select-template?type=${type}`)
  }

  // Split into top row (first 3) and bottom row (last 2)
  const topRowTypes = resumeTypes.slice(0, 3)
  const bottomRowTypes = resumeTypes.slice(3)

  return (
    <section id="resume-type-section" className="container mx-auto px-4 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.typeSelector.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.typeSelector.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Top Row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {topRowTypes.map((type) => (
            <Card
              key={type.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-300 group h-full flex flex-col"
              onClick={() => handleTypeSelect(type.id)}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{type.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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

                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {t.typeSelector.types[type.id as keyof typeof t.typeSelector.types].description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-medium text-gray-700">{t.typeSelector.features}:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {t.typeSelector.featureLabels[feature as keyof typeof t.typeSelector.featureLabels]}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                  {t.typeSelector.select}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bottomRowTypes.map((type) => (
            <Card
              key={type.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-300 group h-full flex flex-col"
              onClick={() => handleTypeSelect(type.id)}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{type.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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

                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {t.typeSelector.types[type.id as keyof typeof t.typeSelector.types].description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-medium text-gray-700">{t.typeSelector.features}:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {t.typeSelector.featureLabels[feature as keyof typeof t.typeSelector.featureLabels]}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                  {t.typeSelector.select}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">{t.typeSelector.help}</p>
      </div>
    </section>
  )
}
