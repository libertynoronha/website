import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
  ];

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLanguage', lng);
  };

  return (
    <div id="language-switcher" className="flex items-center gap-1">
      <div className="flex items-center gap-1 bg-stone-100/90 border border-stone-200/50 rounded-full p-1 shadow-sm">
        {languages.map((lang) => {
          const isActive = i18n.language ? i18n.language.startsWith(lang.code) : false;
          return (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${
                isActive
                  ? 'bg-brand-blue text-white shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-brand-blue hover:bg-stone-200/50'
              }`}
              title={lang.name}
            >
              <span>{lang.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

