export function EuropeanCreativeTemplate() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        {/* Creative Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-xs">[Photo]</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">[Your Name]</h1>
              <p className="text-purple-100">[Creative Professional]</p>
            </div>
          </div>
        </div>
  
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/3 bg-purple-50 p-6">
            <section className="mb-6">
              <h3 className="font-bold text-purple-700 mb-3">CONTACT</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>[Email]</p>
                <p>[Portfolio]</p>
                <p>[Behance/Dribbble]</p>
              </div>
            </section>
  
            <section className="mb-6">
              <h3 className="font-bold text-purple-700 mb-3">CREATIVE SKILLS</h3>
              <p className="text-gray-600 text-sm">[Design software & tools]</p>
            </section>
  
            <section className="mb-6">
              <h3 className="font-bold text-purple-700 mb-3">LANGUAGES</h3>
              <p className="text-gray-600 text-sm">[European languages]</p>
            </section>
          </div>
  
          {/* Main Content */}
          <div className="w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 mb-3">Creative Profile</h2>
              <p className="text-gray-700">[Creative professional summary]</p>
            </section>
  
            <section className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 mb-3">Experience</h2>
              <p className="text-gray-500 italic">[Creative work experience]</p>
            </section>
  
            <section className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 mb-3">Portfolio Highlights</h2>
              <p className="text-gray-500 italic">[Key projects and achievements]</p>
            </section>
          </div>
        </div>
      </div>
    )
  }
  