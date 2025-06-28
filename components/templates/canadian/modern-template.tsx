export function CanadianModernTemplate() {
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
        <span>[Email]</span>
        <span>[Phone]</span>
        <span>[Location]</span>
        <span>[LinkedIn]</span>
      </div>

      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 p-8 pr-4">
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide mb-4">Work Experience</h2>
          <p className="text-gray-500 italic">[Add your work experience]</p>
        </div>

        {/* Right Column */}
        <div className="w-1/3 bg-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide mb-4">Skills</h2>
          <p className="text-gray-500 italic text-sm">[Add your skills]</p>
        </div>
      </div>
    </div>
  )
}
