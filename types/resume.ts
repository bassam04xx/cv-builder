export interface PersonalInfo {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  summary: string
}

export interface Skills {
  technical: string[]
  management: string[]
  leadership: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  startDate: string
  endDate: string
}

export interface Certification {
  id: string
  name: string
  organization: string
  date: string
}

export interface Volunteer {
  id: string
  title: string
  organization: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Language {
  id: string
  language: string
  proficiency: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  skills: Skills
  experience: Experience[]
  education: Education[]
  certifications: Certification[]
  volunteer: Volunteer[]
  languages: Language[]
}
