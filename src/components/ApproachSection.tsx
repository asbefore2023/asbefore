import { Building, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ApproachSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('approach.title')}</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">{t('approach.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 text-right">
            <div className="bg-[#001f5b] text-white p-4 rounded-full w-fit mb-4 mr-auto">
              <Building size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('approach.gov.title')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('approach.gov.desc')}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-right">
            <div className="bg-[#001f5b] text-white p-4 rounded-full w-fit mb-4 mr-auto">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('approach.econ.title')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('approach.econ.desc')}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-right">
            <div className="bg-[#001f5b] text-white p-4 rounded-full w-fit mb-4 mr-auto">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('approach.civic.title')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('approach.civic.desc')}</p>
          </div>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1920')"
            }}
          />
          <div className="absolute inset-0 bg-[#001f5b]/90" />

          <div className="relative z-10 p-12 md:p-16 text-right text-white">
            <h2 className="text-4xl font-bold mb-8">{t('approach.method.title')}</h2>

            <div className="space-y-6 text-lg leading-relaxed max-w-4xl">
              <p>{t('approach.method.p1')}</p>
              <p>{t('approach.method.p2')}</p>
              <p>{t('approach.method.p3')}</p>
              <p>{t('approach.method.p4')}</p>
              <p>{t('approach.method.p5')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
