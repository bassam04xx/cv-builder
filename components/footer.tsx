import { FileText } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"


export function Footer() {
    const { t } = useLocale()

  return (<footer className="bg-gray-900 text-white py-12">
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
  </footer>)
}