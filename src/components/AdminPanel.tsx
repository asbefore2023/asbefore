import { useState, useEffect } from 'react';
import { X, Save, LogOut, RefreshCw } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import { useLanguage } from '../contexts/LanguageContext';

interface AdminPanelProps {
  onClose: () => void;
}

const TRANSLATION_KEYS = [
  'header.bsd',
  'hero.title',
  'hero.subtitle',
  'hero.cta',
  'form.name',
  'form.phone',
  'form.email',
  'form.institution',
  'form.submit',
  'form.success',
  'advantages.1',
  'advantages.2',
  'advantages.3',
  'advantages.4',
  'about.pretitle',
  'about.title',
  'about.p1',
  'about.p2',
  'methodology.title',
  'methodology.p1',
  'methodology.conclusion.title',
  'methodology.conclusion.text',
  'courses.title',
  'courses.subtitle',
  'courses.1.title',
  'courses.1.desc',
  'courses.2.title',
  'courses.2.desc',
  'courses.3.title',
  'courses.3.desc',
  'approach.title',
  'approach.subtitle',
  'approach.gov.title',
  'approach.gov.desc',
  'approach.econ.title',
  'approach.econ.desc',
  'approach.civic.title',
  'approach.civic.desc',
  'approach.method.title',
  'approach.method.p1',
  'approach.method.p2',
  'approach.method.p3',
  'approach.method.p4',
  'approach.method.p5',
  'footer.contact',
  'footer.title',
  'footer.subtitle',
  'footer.location',
  'footer.hours',
  'footer.rights',
  'footer.copyright',
];

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { logout } = useAdmin();
  const { language, setLanguage, t } = useLanguage();
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadTranslations();
  }, [language]);

  const loadTranslations = () => {
    const stored = localStorage.getItem(`translations_${language}`);
    if (stored) {
      try {
        setTranslations(JSON.parse(stored));
      } catch {
        loadDefaultTranslations();
      }
    } else {
      loadDefaultTranslations();
    }
  };

  const loadDefaultTranslations = () => {
    const initial: Record<string, string> = {};
    TRANSLATION_KEYS.forEach(key => {
      initial[key] = t(key);
    });
    setTranslations(initial);
  };

  const handleChange = (key: string, value: string) => {
    setTranslations(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      localStorage.setItem(`translations_${language}`, JSON.stringify(translations));
      setHasChanges(false);

      window.dispatchEvent(new CustomEvent('translationsUpdated', {
        detail: { language, translations }
      }));

      alert('Traductions sauvegardées avec succès! Rechargez la page pour voir les changements.');
    } catch (error) {
      alert('Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    if (confirm('Voulez-vous vraiment réinitialiser toutes les traductions à leurs valeurs par défaut ?')) {
      localStorage.removeItem(`translations_${language}`);
      loadDefaultTranslations();
      setHasChanges(false);
      alert('Traductions réinitialisées!');
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Panel - Translations</h2>
            <p className="text-gray-600">Edit translations for all languages</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="text-sm font-medium text-gray-700">Language:</label>
            <select
              value={language}
              onChange={(e) => {
                if (hasChanges) {
                  if (confirm('Vous avez des modifications non sauvegardées. Voulez-vous continuer ?')) {
                    setLanguage(e.target.value as any);
                    setHasChanges(false);
                  }
                } else {
                  setLanguage(e.target.value as any);
                }
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b]"
            >
              <option value="he">עברית (Hebrew)</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="ru">Русский</option>
            </select>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-orange-700 hover:bg-orange-50 rounded-lg transition-colors border border-orange-300"
            >
              <RefreshCw size={18} />
              Reset
            </button>

            {hasChanges && (
              <button
                onClick={handleSave}
                disabled={saving}
                className="ml-auto flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all disabled:opacity-50"
              >
                <Save size={20} />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {TRANSLATION_KEYS.map(key => (
              <div key={key} className="border border-gray-200 rounded-lg p-4 hover:border-[#001f5b] transition-colors">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {key}
                </label>
                {(translations[key]?.includes('\n') || translations[key]?.length > 100) ? (
                  <textarea
                    value={translations[key] || ''}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b] min-h-[120px] font-mono text-sm"
                    dir={language === 'he' ? 'rtl' : 'ltr'}
                    placeholder={`Enter ${key} translation...`}
                  />
                ) : (
                  <input
                    type="text"
                    value={translations[key] || ''}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b]"
                    dir={language === 'he' ? 'rtl' : 'ltr'}
                    placeholder={`Enter ${key} translation...`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
