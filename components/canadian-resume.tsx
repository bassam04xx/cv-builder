import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Heart, Award, Globe, User } from "lucide-react"

export function CanadianResume() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
      {/* Header */}
      <div className="p-8 pb-4">
        <h1 className="text-4xl font-light text-gray-800 mb-2">Sarah Michelle Thompson</h1>
        <p className="text-lg text-teal-600 font-medium">
          Senior Project Manager - Digital Transformation Professional
        </p>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-700 text-white p-6 mx-8 mb-6">
        <p className="text-sm leading-relaxed">
          Results-driven Senior Project Manager with 8+ years of experience leading cross-functional teams in technology
          and digital transformation initiatives. Proven track record of delivering complex projects on time and within
          budget while driving operational excellence and stakeholder satisfaction across diverse industries including
          financial services and e-commerce. Demonstrated success delivering key consumer insights, digital innovation
          strategy and tactical campaign support to propel pacesetting gains to web traffic, customer acquisition and
          eCommerce revenues.
        </p>
      </div>

      {/* Contact Bar */}
      <div className="bg-teal-500 text-white p-4 mx-8 mb-6 flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>sarah.thompson@email.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>416 555 0123</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Toronto, ON</span>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          <span>linkedin.com/in/sarah.thompson</span>
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

            {/* Job 1 */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Senior Project Manager</h3>
                  <p className="text-gray-700 font-medium">Royal Bank of Canada</p>
                </div>
                <div className="text-right text-sm text-teal-600">
                  <p className="italic">Toronto, ON</p>
                  <p>03/2020 - Present</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Optimized digital transformation campaigns, reducing wasted spend, expanding brand awareness, and
                    improving conversion rate, <strong>resulting in $2.5MM in revenue in 2023</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Oversee various digital banking channels, collaborating with Engineering and Design in
                    conceptualizing marketing strategies with digital elements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Set in motion new technologies and digital elements, integrating them into banking and sales
                    campaigns which <strong>increased customer engagement by 38%</strong> over the past 3 quarters.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Administered innovative concepts on online to offline event & marketing plans, in coordination with
                    clients' Marketing, Public Relations, and Operation teams.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Build, plan, and implement the overall digital and social media marketing strategy, aligning content
                    with short-term and long-term marketing goals.
                  </span>
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Project Manager</h3>
                  <p className="text-gray-700 font-medium">Shopify Inc.</p>
                </div>
                <div className="text-right text-sm text-teal-600">
                  <p className="italic">Ottawa, ON</p>
                  <p>06/2018 - 02/2020</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Successfully boosted merchant platform followers by 80% via maximization of social media, nurturing
                    new online communities for the company.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Improved platform advantage and brand effectiveness via customized features for merchants,{" "}
                    <strong>resulting in a 50% revenue increase</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Enhanced user efficiency by 30% via the implementation of professional user programs and
                    streamlining portal content management systems.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Collaborated with team members, and key management in building a strategic and creative single or
                    multi-platform media plan, exceeding quality project delivery over and above clients' expectations,
                    efficiently maximizing timelines, budgets, and resources.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Volunteer Experience */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-800 rounded-full p-2">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Volunteer Experience</h2>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Technology Committee Chair</h3>
                  <p className="text-gray-700 font-medium">United Way Greater Toronto</p>
                </div>
                <div className="text-right text-sm text-teal-600">
                  <p className="italic">Toronto, ON</p>
                  <p>2019 - Present</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 text-xs">●</span>
                  <span>
                    Hold a volunteer position as a Technology Chair, developing & implementing all targeted digital
                    transformation initiatives for various community platforms.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-800 rounded-full p-2">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Education</h2>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Bachelor of Commerce (Honours in Management Information Systems)
                  </h3>
                  <p className="text-gray-700 font-medium">University of Toronto</p>
                </div>
                <div className="text-right text-sm text-teal-600">
                  <p>09/2011 - 06/2015</p>
                </div>
              </div>
            </div>
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
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Areas of Expertise</h2>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Project Management (Agile, Scrum)</p>
              <p>Digital Transformation</p>
              <p>Strategic Planning</p>
              <p>Risk Management</p>
              <p>Stakeholder Engagement</p>
              <p>Budget Management</p>
              <p>Team Leadership</p>
              <p>Process Improvement</p>
              <p>Vendor Management</p>
              <p>Quality Assurance</p>
              <p>Microsoft Project</p>
              <p>Jira & Confluence</p>
              <p>Salesforce CRM</p>
            </div>
          </div>

          {/* Courses & Training */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-800 rounded-full p-2">
                <Award className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Courses & Training</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-800">Project Management Professional - PMP (2019)</p>
                <p className="text-teal-600 italic text-xs">Project Management Institute</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Certified Scrum Master & Agile Leadership (2018)</p>
                <p className="text-teal-600 italic text-xs">Scrum Alliance</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Salesforce Administrator Certification (2020)</p>
                <p className="text-teal-600 italic text-xs">Salesforce</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Digital Transformation Leadership (2021)</p>
                <p className="text-teal-600 italic text-xs">MIT Professional Education</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-800 rounded-full p-2">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Languages</h2>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-gray-800">English</p>
                <p className="text-teal-600 italic text-xs">Native or Bilingual Proficiency</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">French</p>
                <p className="text-teal-600 italic text-xs">Full Professional Proficiency</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Spanish</p>
                <p className="text-teal-600 italic text-xs">Limited Working Proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
