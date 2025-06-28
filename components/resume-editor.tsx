"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ResumeForm } from "@/components/resume-form"
import { ModernTemplate } from "@/components/templates/modern-template"
import { ClassicTemplate } from "@/components/templates/classic-template"
import type { ResumeData } from "@/types/resume"
import { Button } from "@/components/ui/button"
import { Download, Eye, EyeOff } from "lucide-react"
import { Header } from "./header"
import { Footer } from "./footer"

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
          <Header/>      
      

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
      {/* Footer */}
      <Footer/>
    </div>
  )
}
