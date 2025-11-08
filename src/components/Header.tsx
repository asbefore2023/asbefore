import { ChevronDown, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAdmin } from '../contexts/AdminContext';
import { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { isAdmin } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const languages = [
    { code: 'he' as const, name: 'עברית', flag: '🇮🇱' },
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const handleAdminClick = () => {
    if (isAdmin) {
      setShowAdminPanel(true);
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg font-medium text-gray-800">{t('header.bsd')}</div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleAdminClick}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-[#001f5b] transition-colors"
              title="Admin"
            >
              <Settings size={20} />
              <span className="text-sm font-medium">Admin</span>
            </button>

            <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity bg-gray-50 px-4 py-2 rounded-lg"
          >
            <span className="text-xl">{currentLang.flag}</span>
            <span className="text-sm font-medium text-gray-700">{currentLang.name}</span>
            <ChevronDown size={16} className="text-gray-700" />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[160px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                    language === lang.code ? 'bg-blue-50 text-[#001f5b] font-semibold' : 'text-gray-700'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
            </div>
          </div>
        </div>
      </header>

      {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
      {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
    </>
  );
}
