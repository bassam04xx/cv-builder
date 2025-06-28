export function TunisianModernTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans" dir="ltr">
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
        <h1 className="text-3xl font-bold mb-2">[Your Name] / [اسمك]</h1>
        <p className="text-xl text-red-100">[Professional Title] / [المسمى الوظيفي]</p>
      </header>

      <div className="p-8">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-600 pb-1">
            Profil Professionnel / Professional Profile
          </h2>
          <p className="text-gray-700 mb-2">[French summary]</p>
          <p className="text-gray-700" dir="rtl">
            [Arabic summary / الملخص المهني]
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-600 pb-1">
            Compétences / Skills / المهارات
          </h2>
          <p className="text-gray-500 italic">[Trilingual skills section]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-600 pb-1">
            Expérience Professionnelle / Work Experience
          </h2>
          <p className="text-gray-500 italic">[Bilingual work experience]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-red-600 pb-1">
            Formation / Education / التعليم
          </h2>
          <p className="text-gray-500 italic">[Education in multiple languages]</p>
        </section>
      </div>
    </div>
  )
}
