export function TunisianBilingualTemplate() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg font-sans">
        <div className="flex">
          {/* French Side */}
          <div className="w-1/2 border-r-2 border-red-600">
            <div className="bg-red-600 text-white p-4">
              <h1 className="text-2xl font-bold">[Nom Complet]</h1>
              <p className="text-red-100">[Titre Professionnel]</p>
            </div>
  
            <div className="p-6">
              <section className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-3">Profil Professionnel</h2>
                <p className="text-gray-700 text-sm">[Résumé professionnel en français]</p>
              </section>
  
              <section className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-3">Expérience</h2>
                <p className="text-gray-500 italic text-sm">[Expérience professionnelle]</p>
              </section>
  
              <section className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-3">Formation</h2>
                <p className="text-gray-500 italic text-sm">[Formation et éducation]</p>
              </section>
            </div>
          </div>
  
          {/* Arabic Side */}
          <div className="w-1/2" dir="rtl">
            <div className="bg-red-600 text-white p-4">
              <h1 className="text-2xl font-bold">[الاسم الكامل]</h1>
              <p className="text-red-100">[المسمى الوظيفي]</p>
            </div>
  
            <div className="p-6">
              <section className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-3">الملف المهني</h2>
                <p className="text-gray-700 text-sm">[الملخص المهني باللغة العربية]</p>
              </section>
  
              <section className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-3">الخبرة المهنية</h2>
                <p className="text-gray-500 italic text-sm">[الخبرة العملية]</p>
              </section>
  
              <section className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-3">التعليم</h2>
                <p className="text-gray-500 italic text-sm">[التعليم والتدريب]</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
  