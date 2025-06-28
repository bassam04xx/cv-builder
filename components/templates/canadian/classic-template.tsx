export function CanadianClassicTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans p-10">
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
        <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Professional Experience</h2>
        <p className="text-gray-500 italic">[Add your work experience]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Education</h2>
        <p className="text-gray-500 italic">[Add your education]</p>
      </section>
    </div>
  )
}
