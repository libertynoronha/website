import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
  ];

  // Get current language active
  const currentLang = languages.find(lang => i18n.language && i18n.language.startsWith(lang.code)) || languages[0];

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLanguage', lng);
    setIsOpen(false);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id="language-switcher" className="relative inline-block text-left" ref={containerRef}>
      <button
        id="btn-language-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer border ${
          isScrolled
            ? 'bg-stone-200/80 hover:bg-stone-300/80 text-stone-900 border-stone-300/60 shadow-sm'
            : 'bg-black/35 hover:bg-black/50 text-white border-white/25'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-3.5 h-3.5" />
        {/* <span className="hidden sm:inline">{currentLang.name}</span>
        <span className="sm:hidden">{currentLang.code.toUpperCase()}</span> */}
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute right-0 mt-2 w-36 bg-white border border-stone-200/60 rounded-2xl shadow-xl z-[110] py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {languages.map((lang) => {
            const isActive = i18n.language ? i18n.language.startsWith(lang.code) : false;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-xs text-left transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-stone-50 text-brand-blue font-bold'
                    : 'text-stone-700 hover:bg-stone-100/70 hover:text-brand-blue'
                }`}
              >
                <span>{lang.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
