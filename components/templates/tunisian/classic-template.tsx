export function TunisianClassicTemplate() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans" dir="ltr">
        <header className="text-center border-b-2 border-red-600 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">[Your Name] / [اسمك]</h1>
          <p className="text-lg text-red-600 mb-3">[Professional Title] / [المسمى الوظيفي]</p>
          <div className="text-sm text-gray-600">
            <p>[Email] | [Phone] | [Location]</p>
          </div>
        </header>
  
        <section className="mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-3 border-b border-red-200 pb-1">
            Profil Professionnel / Professional Profile
          </h2>
          <p className="text-gray-700 mb-2">[French professional summary]</p>
          <p className="text-gray-700" dir="rtl">
            [Arabic professional summary / الملخص المهني]
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-3 border-b border-red-200 pb-1">
            Expérience Professionnelle / Work Experience
          </h2>
          <p className="text-gray-500 italic">[Bilingual work experience]</p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-3 border-b border-red-200 pb-1">
            Formation / Education / التعليم
          </h2>
          <p className="text-gray-500 italic">[Education in multiple languages]</p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-bold text-red-600 mb-3 border-b border-red-200 pb-1">
            Compétences / Skills / المهارات
          </h2>
          <p className="text-gray-500 italic">[Trilingual skills section]</p>
        </section>
      </div>
    )
  }
  