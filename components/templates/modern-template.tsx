import type { ResumeData } from "@/types/resume"
import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, User } from "lucide-react"

interface ModernTemplateProps {
  data?: ResumeData
}

export function ModernTemplate({ data }: ModernTemplateProps) {
  if (!data) {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        {/* Header */}
        <div className="p-8 pb-4">
          <h1 className="text-4xl font-light text-gray-800 mb-2">[Your Name]</h1>
          <p className="text-lg text-teal-600 font-medium">[Professional Title]</p>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-700 text-white p-6 mx-8 mb-6">
          <p className="text-sm leading-relaxed">[Professional Summary]</p>
        </div>

        {/* Contact Bar */}
        <div className="bg-teal-500 text-white p-4 mx-8 mb-6 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>[email@example.com]</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>[Phone Number]</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>[Location]</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span>[LinkedIn Profile]</span>
          </div>
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="w-2/3 p-8 pr-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-800 rounded-full p-2">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Work Experience</h2>
            </div>
            <p className="text-gray-500 italic">[Add your work experience]</p>
          </div>

          {/* Right Column */}
          <div className="w-1/3 bg-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-800 rounded-full p-2">
                <User className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Skills</h2>
            </div>
            <p className="text-gray-500 italic text-sm">[Add your skills]</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
      {/* Header */}
      <div className="p-8 pb-4">
        <h1 className="text-4xl font-light text-gray-800 mb-2">{data.personalInfo.fullName || "[Your Name]"}</h1>
        <p className="text-lg text-teal-600 font-medium">{data.personalInfo.title || "[Professional Title]"}</p>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-700 text-white p-6 mx-8 mb-6">
        <p className="text-sm leading-relaxed">{data.personalInfo.summary || "[Professional Summary]"}</p>
      </div>

      {/* Contact Bar */}
      <div className="bg-teal-500 text-white p-4 mx-8 mb-6 flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{data.personalInfo.email || "[email@example.com]"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{data.personalInfo.phone || "[Phone Number]"}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{data.personalInfo.location || "[Location]"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          <span>{data.personalInfo.linkedin || "[LinkedIn Profile]"}</span>
        </div>
      </div>

      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 p-8 pr-4">
          {/* Work Experience */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-800 rounded-full p-2">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Work Experience</h2>
            </div>

            {data.experience.length > 0 ? (
              data.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-teal-600">
                      <p className="italic">{exp.location}</p>
                      <p>
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {exp.description.map((desc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1.5 text-xs">●</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">[Add your work experience]</p>
            )}
          </div>

          {/* Education */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-800 rounded-full p-2">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Education</h2>
            </div>

            {data.education.length > 0 ? (
              data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-700 font-medium">{edu.school}</p>
                    </div>
                    <div className="text-right text-sm text-teal-600">
                      <p>
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">[Add your education]</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 bg-gray-100 p-6">
          {/* Areas of Expertise */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-800 rounded-full p-2">
                <User className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Skills</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(data.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-800 capitalize mb-2">{category}</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    {skills.map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
