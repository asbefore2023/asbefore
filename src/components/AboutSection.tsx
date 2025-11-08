import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#001f5b] text-xl font-semibold mb-2">{t('about.pretitle')}</h2>
          <h3 className="text-5xl font-bold text-gray-900">{t('about.title')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-right space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.p1')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.p2')}</p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional consultation"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
