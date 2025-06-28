import type { ResumeData } from "@/types/resume"

interface ClassicTemplateProps {
  data?: ResumeData
}

export function ClassicTemplate({ data }: ClassicTemplateProps) {
  if (!data) {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        <header className="text-center mb-8 border-b-2 border-gray-200 pb-5">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">[Your Name]</h1>
          <div className="text-sm text-gray-600 mb-1">[Location] • [Phone] • [Email]</div>
          <div className="text-sm text-gray-600">[LinkedIn Profile]</div>
        </header>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Professional Summary</h2>
          <p className="text-gray-700 italic">[Professional Summary]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Core Competencies</h2>
          <p className="text-gray-500 italic">[Add your skills]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          <p className="text-gray-500 italic">[Add your work experience]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Education</h2>
          <p className="text-gray-500 italic">[Add your education]</p>
        </section>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans p-10">
      <header className="text-center mb-8 border-b-2 border-gray-200 pb-5">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{data.personalInfo.fullName || "[Your Name]"}</h1>
        <div className="text-sm text-gray-600 mb-1">
          {data.personalInfo.location || "[Location]"} • {data.personalInfo.phone || "[Phone]"} •{" "}
          {data.personalInfo.email || "[Email]"}
        </div>
        <div className="text-sm text-gray-600">{data.personalInfo.linkedin || "[LinkedIn Profile]"}</div>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Professional Summary</h2>
        <p className="text-gray-700 italic">{data.personalInfo.summary || "[Professional Summary]"}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Core Competencies</h2>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-700 capitalize mb-2">{category}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Professional Experience</h2>
        {data.experience.length > 0 ? (
          data.experience.map((exp) => (
            <article key={exp.id} className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-gray-800">{exp.title}</div>
                  <div className="text-gray-600">{exp.company}</div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  {exp.location}
                  <br />
                  {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                </div>
              </div>
              <ul className="ml-5 mt-2 space-y-1">
                {exp.description.map((desc, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {desc}
                  </li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p className="text-gray-500 italic">[Add your work experience]</p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Education</h2>
        {data.education.length > 0 ? (
          data.education.map((edu) => (
            <article key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-gray-800">{edu.degree}</div>
                  <div className="text-gray-600">{edu.school}</div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  {edu.location}
                  <br />
                  {edu.startDate} – {edu.endDate}
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="text-gray-500 italic">[Add your education]</p>
        )}
      </section>
    </div>
  )
}
