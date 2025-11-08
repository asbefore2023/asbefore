import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Préparer les données du template
      const templateParams = {
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        institution: formData.institution,
        date: new Date().toLocaleString('he-IL', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }),
        language: language === 'he' ? 'עברית' :
                  language === 'en' ? 'English' :
                  language === 'fr' ? 'Français' :
                  language === 'es' ? 'Español' :
                  language === 'ru' ? 'Русский' : language
      };

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        alert(t('form.success'));
        setFormData({ name: '', phone: '', email: '', institution: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email error:', error);
      alert('שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר טלפוני.');
    } finally {
      setSending(false);
    }
  };

  const isRTL = language === 'he';

  return (
    <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder={t('form.name')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b] ${isRTL ? 'text-right' : 'text-left'}`}
          required
          disabled={sending}
        />
        <input
          type="tel"
          placeholder={t('form.phone')}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b] ${isRTL ? 'text-right' : 'text-left'}`}
          required
          disabled={sending}
        />
        <input
          type="email"
          placeholder={t('form.email')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b] ${isRTL ? 'text-right' : 'text-left'}`}
          required
          disabled={sending}
        />
        <input
          type="text"
          placeholder={t('form.institution')}
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
          className={`px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b] ${isRTL ? 'text-right' : 'text-left'}`}
          required
          disabled={sending}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full md:w-auto bg-[#001f5b] text-white px-12 py-3 rounded-lg text-lg font-semibold hover:bg-[#003080] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>שולח...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>{t('form.submit')}</span>
          </>
        )}
      </button>
    </form>
  );
}
