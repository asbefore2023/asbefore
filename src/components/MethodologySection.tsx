import { useLanguage } from '../contexts/LanguageContext';

export default function MethodologySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional handshake"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>

          <div className="order-1 lg:order-2 text-right space-y-8">
            <h2 className="text-5xl font-bold text-gray-900">{t('methodology.title')}</h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">{t('methodology.p1')}</p>
            </div>

            <div className="pt-8 border-t-2 border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('methodology.conclusion.title')}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{t('methodology.conclusion.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
