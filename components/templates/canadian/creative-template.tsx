export function CanadianCreativeTemplate() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        {/* Creative Header with Gradient */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold mb-1">[Your Name]</h1>
          <p className="text-lg text-teal-100">[Creative Professional Title]</p>
        </div>
  
        {/* Contact Bar */}
        <div className="bg-gray-800 text-white p-3 text-sm flex justify-between">
          <span>[Email]</span>
          <span>[Phone]</span>
          <span>[Portfolio]</span>
          <span>[LinkedIn]</span>
        </div>
  
        <div className="flex">
          {/* Left Column */}
          <div className="w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-xl font-bold text-teal-600 mb-3 border-b-2 border-teal-200 pb-1">Creative Summary</h2>
              <p className="text-gray-700 italic">[Creative professional summary]</p>
            </section>
  
            <section className="mb-6">
              <h2 className="text-xl font-bold text-teal-600 mb-3 border-b-2 border-teal-200 pb-1">Experience</h2>
              <p className="text-gray-500 italic">[Creative work experience]</p>
            </section>
          </div>
  
          {/* Right Column */}
          <div className="w-1/3 bg-teal-50 p-6">
            <section className="mb-6">
              <h3 className="font-bold text-teal-700 mb-3">Creative Skills</h3>
              <p className="text-gray-600 text-sm">[Design & creative skills]</p>
            </section>
          </div>
        </div>
      </div>
    )
  }
  