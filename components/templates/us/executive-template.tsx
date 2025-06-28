export function USExecutiveTemplate() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        {/* Executive Header */}
        <header className="border-b-4 border-blue-900 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">[Executive Name]</h1>
          <p className="text-xl text-blue-900 font-semibold mb-3">[C-Level Title]</p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>[Email] | [Phone]</span>
            <span>[Location] | [LinkedIn]</span>
          </div>
        </header>
  
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide">Executive Profile</h2>
          <p className="text-gray-700 leading-relaxed text-lg">[Executive-level summary with strategic focus]</p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide">Leadership Experience</h2>
          <p className="text-gray-500 italic">[C-suite and senior leadership roles]</p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
            Board Positions & Affiliations
          </h2>
          <p className="text-gray-500 italic">[Board memberships and professional affiliations]</p>
        </section>
      </div>
    )
  }
  