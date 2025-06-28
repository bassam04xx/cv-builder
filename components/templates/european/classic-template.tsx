export function EuropeanClassicTemplate() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        <div className="flex">
          {/* Left Column with Photo */}
          <div className="w-1/3 bg-gray-100 p-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600 text-xs">[Photo]</span>
            </div>
            <h1 className="text-xl font-bold mb-1 text-center">[Your Name]</h1>
            <p className="text-gray-600 text-center mb-4 text-sm">[Professional Title]</p>
  
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold mb-2 text-gray-800">CONTACT</h3>
                <p className="text-gray-600">[Email]</p>
                <p className="text-gray-600">[Phone]</p>
                <p className="text-gray-600">[Address]</p>
              </div>
  
              <div>
                <h3 className="font-bold mb-2 text-gray-800">LANGUAGES</h3>
                <p className="text-gray-600">[Languages with levels]</p>
              </div>
  
              <div>
                <h3 className="font-bold mb-2 text-gray-800">SKILLS</h3>
                <p className="text-gray-600">[Technical skills]</p>
              </div>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">Professional Profile</h2>
              <p className="text-gray-700 text-sm">[European-style professional summary]</p>
            </section>
  
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">Work Experience</h2>
              <p className="text-gray-500 italic text-sm">[Detailed chronological experience]</p>
            </section>
  
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">Education & Training</h2>
              <p className="text-gray-500 italic text-sm">[Comprehensive education history]</p>
            </section>
          </div>
        </div>
      </div>
    )
  }
  