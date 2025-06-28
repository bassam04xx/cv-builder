"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ResumeForm } from "@/components/resume-form"
import { ModernTemplate } from "@/components/templates/modern-template"
import { ClassicTemplate } from "@/components/templates/classic-template"
import type { ResumeData } from "@/types/resume"
import { Button } from "@/components/ui/button"
import { Download, Eye, EyeOff } from "lucide-react"

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    summary: "",
  },
  skills: {
    technical: [],
    management: [],
    leadership: [],
  },
  experience: [],
  education: [],
  certifications: [],
  volunteer: [],
  languages: [],
}

export function ResumeEditor() {
  const searchParams = useSearchParams()
  const template = (searchParams.get("template") as "modern" | "classic") || "modern"
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)
  const [isPreviewVisible, setIsPreviewVisible] = useState(true)

  const handleDataChange = (newData: Partial<ResumeData>) => {
    setResumeData((prev) => ({ ...prev, ...newData }))
  }

  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            <p className="text-gray-600">{template === "modern" ? "Modern" : "Classic"} Template</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => setIsPreviewVisible(!isPreviewVisible)} className="lg:hidden">
              {isPreviewVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {isPreviewVisible ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Form Panel */}
        <div className={`${isPreviewVisible ? "lg:w-1/2" : "w-full"} transition-all duration-300`}>
          <div className="h-[calc(100vh-80px)] overflow-y-auto">
            <ResumeForm data={resumeData} onChange={handleDataChange} />
          </div>
        </div>

        {/* Preview Panel */}
        {isPreviewVisible && (
          <div className="hidden lg:block lg:w-1/2 bg-white border-l border-gray-200">
            <div className="h-[calc(100vh-80px)] overflow-y-auto p-6">
              <div className="transform scale-90 origin-top">
                {template === "modern" ? <ModernTemplate data={resumeData} /> : <ClassicTemplate data={resumeData} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
