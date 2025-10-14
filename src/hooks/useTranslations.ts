import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import type { Translations } from '../types/language';

export function useTranslations(): Translations {
  const { language } = useLanguage();
  return translations[language];
}
