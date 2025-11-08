import { Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-24 bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-right">{t('footer.contact')}</h2>
            <ContactForm />
          </div>

          <div className="text-right space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('footer.title')}</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{t('footer.subtitle')}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3 text-lg text-gray-700">
                <div className="text-right">
                  <a href="tel:0553070093" className="hover:text-[#001f5b] transition-colors font-medium">
                    0553070093
                  </a>
                  {' | '}
                  <a href="tel:+972553070093" className="hover:text-[#001f5b] transition-colors font-medium">
                    +972553070093
                  </a>
                </div>
                <Phone size={24} className="text-[#001f5b]" />
              </div>

              <div className="flex items-center justify-end gap-3 text-lg text-gray-700">
                <span>{t('footer.location')}</span>
                <MapPin size={24} className="text-[#001f5b]" />
              </div>

              <div className="flex items-center justify-end gap-3 text-lg text-gray-700">
                <span>{t('footer.hours')}</span>
                <Clock size={24} className="text-[#001f5b]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300 text-center space-y-2">
          <p className="text-gray-700 font-medium">{t('footer.rights')}</p>
          <p className="text-gray-600">{t('footer.copyright')}</p>
          <p className="text-gray-600 mt-4">
            Site web réalisé par{' '}
            <a
              href="https://www.webfityou.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#001f5b] hover:underline font-medium"
            >
              WebFitYou
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
