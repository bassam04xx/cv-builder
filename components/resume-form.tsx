"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ResumeData, Experience, Education } from "@/types/resume"
import { Plus, Trash2, User, Briefcase, GraduationCap } from "lucide-react"

interface ResumeFormProps {
  data: ResumeData
  onChange: (data: Partial<ResumeData>) => void
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  const [newSkill, setNewSkill] = useState("")
  const [skillCategory, setSkillCategory] = useState<"technical" | "management" | "leadership">("technical")

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    })
  }

  const addSkill = () => {
    if (newSkill.trim()) {
      onChange({
        skills: {
          ...data.skills,
          [skillCategory]: [...data.skills[skillCategory], newSkill.trim()],
        },
      })
      setNewSkill("")
    }
  }

  const removeSkill = (category: keyof typeof data.skills, index: number) => {
    onChange({
      skills: {
        ...data.skills,
        [category]: data.skills[category].filter((_, i) => i !== index),
      },
    })
  }

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: [],
    }
    onChange({
      experience: [...data.experience, newExp],
    })
  }

  const updateExperience = (id: string, field: string, value: any) => {
    onChange({
      experience: data.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    })
  }

  const removeExperience = (id: string) => {
    onChange({
      experience: data.experience.filter((exp) => exp.id !== id),
    })
  }

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      degree: "",
      school: "",
      location: "",
      startDate: "",
      endDate: "",
    }
    onChange({
      education: [...data.education, newEdu],
    })
  }

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      education: data.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    })
  }

  const removeEducation = (id: string) => {
    onChange({
      education: data.education.filter((edu) => edu.id !== id),
    })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={data.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                value={data.personalInfo.title}
                onChange={(e) => updatePersonalInfo("title", e.target.value)}
                placeholder="Senior Project Manager"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                placeholder="john.doe@email.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                placeholder="(416) 555-0123"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={data.personalInfo.location}
                onChange={(e) => updatePersonalInfo("location", e.target.value)}
                placeholder="Toronto, ON"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={data.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                placeholder="linkedin.com/in/johndoe"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={data.personalInfo.summary}
              onChange={(e) => updatePersonalInfo("summary", e.target.value)}
              placeholder="Write a brief professional summary..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Core Competencies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <select
              value={skillCategory}
              onChange={(e) => setSkillCategory(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="technical">Technical Skills</option>
              <option value="management">Management</option>
              <option value="leadership">Leadership</option>
            </select>
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill..."
              onKeyPress={(e) => e.key === "Enter" && addSkill()}
            />
            <Button onClick={addSkill}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category}>
              <h4 className="font-medium mb-2 capitalize">{category} Skills</h4>
              <div className="flex flex-wrap gap-2">
              {skills.map((skill: string, index: number) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <button
                      onClick={() => removeSkill(category as keyof typeof data.skills, index)}
                      className="ml-1 hover:text-red-500"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Work Experience
            </div>
            <Button onClick={addExperience} size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Experience
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium">Experience #{index + 1}</h4>
                <Button variant="outline" size="sm" onClick={() => removeExperience(exp.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label>Job Title</Label>
                  <Input
                    value={exp.title}
                    onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                    placeholder="Senior Project Manager"
                  />
                </div>
                <div>
                  <Label>Company</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label>Location</Label>
                  <Input
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                    placeholder="Toronto, ON"
                  />
                </div>
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    placeholder="March 2020"
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    placeholder="Present"
                    disabled={exp.current}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                  />
                  <span className="text-sm">Currently working here</span>
                </label>
              </div>
              <div>
                <Label>Job Description (one achievement per line)</Label>
                <Textarea
                  value={exp.description.join("\n")}
                  onChange={(e) => updateExperience(exp.id, "description", e.target.value.split("\n"))}
                  placeholder="• Led digital transformation initiatives&#10;• Managed cross-functional teams&#10;• Delivered projects on time and budget"
                  rows={4}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </div>
            <Button onClick={addEducation} size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Education
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={edu.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium">Education #{index + 1}</h4>
                <Button variant="outline" size="sm" onClick={() => removeEducation(edu.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Degree</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                    placeholder="Bachelor of Commerce"
                  />
                </div>
                <div>
                  <Label>School</Label>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                    placeholder="University of Toronto"
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                    placeholder="Toronto, ON"
                  />
                </div>
                <div>
                  <Label>Years</Label>
                  <Input
                    value={`${edu.startDate} - ${edu.endDate}`}
                    onChange={(e) => {
                      const [start, end] = e.target.value.split(" - ")
                      updateEducation(edu.id, "startDate", start || "")
                      updateEducation(edu.id, "endDate", end || "")
                    }}
                    placeholder="2011 - 2015"
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
