import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LANGUAGES } from '../types/language';

interface LanguageDropdownProps {
  isDarkMode: boolean;
}

export default function LanguageDropdown({ isDarkMode }: LanguageDropdownProps) {
  const { language, setLanguage, languageConfig } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: typeof language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isDarkMode
            ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/70 text-white'
            : 'bg-white/80 backdrop-blur-md border border-white/20 hover:bg-white/90 text-gray-800 shadow-lg hover:shadow-xl'
        }`}
        aria-label="Select language"
      >
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
          <span className="text-2xl">{languageConfig.flag}</span>
          <div className="text-left">
            <div className="font-semibold text-sm">{languageConfig.nativeName}</div>
            <div className="text-xs opacity-70">{languageConfig.name}</div>
          </div>
        </div>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-64 rounded-2xl shadow-2xl border backdrop-blur-xl z-50 ${
          isDarkMode
            ? 'bg-gray-800/90 border-gray-700/50'
            : 'bg-white/90 border-white/20'
        }`}>
          <div className="p-2">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                      : isDarkMode
                        ? 'hover:bg-gray-700/50 text-gray-300 hover:text-white'
                        : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-sm">{lang.nativeName}</div>
                    <div className="text-xs opacity-70">{lang.name}</div>
                  </div>
                  {isSelected && (
                    <Check className="h-4 w-4 text-blue-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
