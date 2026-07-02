import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLanguage', lng);
  };

  return (
    <div id="language-switcher" className="flex items-center gap-1">
      <div className="hidden sm:flex items-center gap-1 bg-stone-100 rounded-full p-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              i18n.language === lang.code
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
            title={lang.name}
          >
            <span>{lang.flag}</span>
            <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* Mobile dropdown */}
      <div className="sm:hidden">
        <select
          value={i18n.language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="p-2 rounded-lg bg-stone-100 text-stone-700 text-sm border border-stone-200 cursor-pointer focus:outline-none focus:border-brand-blue"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
