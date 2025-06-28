import Link from "next/link"
import { FileText } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-blue-600 rounded-lg p-2">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-gray-900">ResumeBuilder</span>
      </Link>
      <LanguageToggle />
    </header>
  )
}
