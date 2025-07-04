"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageToggle } from "@/components/language-toggle"
import { useLocale } from "@/hooks/use-locale"
import { FileText, Zap, Download, Globe, ArrowRight, Sparkles } from "lucide-react"
import { ResumeTypeSelection } from "./resume-type-selector"

export function LandingPage() {
  const router = useRouter()
  const { t } = useLocale()

  const handleCreateResume = () => {
    const resumeTypeSection = document.getElementById("resume-type-section")
    if (resumeTypeSection) {
      resumeTypeSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-lg p-2">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">ResumeBuilder</span>
        </div>
        <LanguageToggle />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            {t.landing.badge}
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.landing.hero.title.split(" ").map((word, index) => (
              <span key={index} className={index === 1 ? "text-blue-600" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t.landing.hero.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleCreateResume}
              size="lg"
              className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t.landing.hero.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.landing.features.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.landing.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.landing.features.fast.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.landing.features.fast.description}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.landing.features.global.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.landing.features.global.description}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.landing.features.download.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.landing.features.download.description}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Type Selection */}
      <ResumeTypeSelection />

      {/* How It Works */}
      <section className=" py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.landing.howItWorks.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.landing.howItWorks.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: t.landing.howItWorks.steps.choose.title,
                desc: t.landing.howItWorks.steps.choose.desc,
              },
              {
                step: "2",
                title: t.landing.howItWorks.steps.select.title,
                desc: t.landing.howItWorks.steps.select.desc,
              },
              {
                step: "3",
                title: t.landing.howItWorks.steps.customize.title,
                desc: t.landing.howItWorks.steps.customize.desc,
              },
              {
                step: "4",
                title: t.landing.howItWorks.steps.download.title,
                desc: t.landing.howItWorks.steps.download.desc,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-blue-600 rounded-lg p-2">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">ResumeBuilder</span>
          </div>
          <p className="text-gray-400 mb-4">{t.landing.footer.tagline}</p>
          <p className="text-gray-500 text-sm">{t.landing.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
