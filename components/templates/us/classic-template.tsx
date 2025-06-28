export function USClassicTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans p-10">
      <header className="text-center mb-8 border-b border-gray-300 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">[Your Name]</h1>
        <p className="text-xl text-gray-700 mb-3">[Executive Title]</p>
        <div className="text-sm text-gray-600">[Email] • [Phone] • [Location] • [LinkedIn]</div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Executive Summary</h2>
        <p className="text-gray-700 leading-relaxed">[Executive-level summary]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Leadership Experience</h2>
        <p className="text-gray-500 italic">[Senior-level experience]</p>
      </section>
    </div>
  )
}
