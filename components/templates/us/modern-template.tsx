export function USModernTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">[Your Name]</h1>
        <p className="text-lg text-blue-600 mb-4">[Professional Title]</p>
        <div className="text-sm text-gray-600">[Email] | [Phone] | [Location] | [LinkedIn]</div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">Professional Summary</h2>
        <p className="text-gray-700">[ATS-optimized professional summary]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">Core Competencies</h2>
        <p className="text-gray-500 italic">[Keyword-rich skills section]</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-600 pb-1">
          Professional Experience
        </h2>
        <p className="text-gray-500 italic">[Achievement-focused experience]</p>
      </section>
    </div>
  )
}
