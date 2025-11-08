import { MessageCircle, Accessibility } from 'lucide-react';
import ContactForm from './ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{t('hero.title')}</h1>
        <p className="text-2xl text-gray-700 mb-3">{t('hero.subtitle')}</p>
        <p className="text-xl text-gray-600 mb-12">{t('hero.cta')}</p>

        <a
          href="tel:0553070093"
          className="inline-block bg-[#001f5b] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#003080] transition-all shadow-lg hover:shadow-xl mb-16"
        >
          {t('hero.cta')}
        </a>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>

      <a
        href="https://wa.me/972553070093"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      <button
        className="fixed bottom-8 right-8 bg-white text-[#001f5b] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 border-2 border-[#001f5b]"
        aria-label="Accessibility"
      >
        <Accessibility size={32} />
      </button>
    </section>
  );
}
