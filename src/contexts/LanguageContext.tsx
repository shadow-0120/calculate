import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, LanguageConfig } from '../types/language';
import { LANGUAGES } from '../types/language';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  languageConfig: LanguageConfig;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && LANGUAGES.some(lang => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const languageConfig = LANGUAGES.find(lang => lang.code === language) || LANGUAGES[0];
  const isRTL = languageConfig.direction === 'rtl';

  useEffect(() => {
    // Apply language direction to document
    document.documentElement.dir = languageConfig.direction;
    document.documentElement.lang = language;
  }, [language, languageConfig.direction]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    languageConfig,
    isRTL
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
