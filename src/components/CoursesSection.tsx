import { Scale, TrendingUp, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CoursesSection() {
  const { t } = useLanguage();

  const courses = [
    { icon: Scale, titleKey: 'courses.1.title', descKey: 'courses.1.desc' },
    { icon: TrendingUp, titleKey: 'courses.2.title', descKey: 'courses.2.desc' },
    { icon: Building, titleKey: 'courses.3.title', descKey: 'courses.3.desc' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('courses.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t('courses.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="bg-[#001f5b] text-white p-6 rounded-full w-fit mb-6">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(course.titleKey)}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{t(course.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
