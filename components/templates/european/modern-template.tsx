export function EuropeanModernTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
      <div className="flex">
        {/* Left Column with Photo */}
        <div className="w-1/3 bg-blue-900 text-white p-8">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-gray-600 text-sm">[Photo]</span>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center">[Your Name]</h1>
          <p className="text-blue-200 text-center mb-6">[Professional Title]</p>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold mb-2">CONTACT</h3>
              <p>[Email]</p>
              <p>[Phone]</p>
              <p>[Address]</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">LANGUAGES</h3>
              <p className="text-blue-200">[Add languages]</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 p-8">
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">Professional Profile</h2>
            <p className="text-gray-700">[Professional summary]</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">Work Experience</h2>
            <p className="text-gray-500 italic">[Detailed work experience]</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">Education</h2>
            <p className="text-gray-500 italic">[Comprehensive education history]</p>
          </section>
        </div>
      </div>
    </div>
  )
}
