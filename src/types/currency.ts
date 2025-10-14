export type Currency = 'USD' | 'EUR' | 'DZD';

export interface CurrencyInfo {
  code: Currency;
  name: string;
  symbol: string;
  locale: string;
  exchangeRate: number; // Rate relative to USD (base currency)
}

export interface CurrencyContextType {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  convertAmount: (amount: number, fromCurrency?: Currency) => number;
  formatCurrency: (amount: number, currency?: Currency) => string;
  getCurrencyInfo: (currency?: Currency) => CurrencyInfo;
}

export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    locale: 'en-US',
    exchangeRate: 1.0
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    locale: 'en-EU',
    exchangeRate: 0.85 // 1 USD = 0.85 EUR (example rate)
  },
  DZD: {
    code: 'DZD',
    name: 'Algerian Dinar',
    symbol: 'د.ج',
    locale: 'ar-DZ',
    exchangeRate: 134.5 // 1 USD = 134.5 DZD (example rate)
  }
};
