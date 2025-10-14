import type { Currency } from '../types/currency';
import { CURRENCIES } from '../types/currency';

// Real-time exchange rates (these would typically come from an API)
// For demo purposes, using approximate rates as of 2024
export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1.0,      // Base currency
  EUR: 0.85,     // 1 USD = 0.85 EUR
  DZD: 134.5     // 1 USD = 134.5 DZD
};

export function convertCurrency(
  amount: number, 
  fromCurrency: Currency, 
  toCurrency: Currency
): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  // Convert to USD first
  const amountInUSD = amount / EXCHANGE_RATES[fromCurrency];
  
  // Convert from USD to target currency
  return amountInUSD * EXCHANGE_RATES[toCurrency];
}

export function formatCurrencyAmount(
  amount: number, 
  currency: Currency, 
  locale?: string
): string {
  const currencyInfo = CURRENCIES[currency];
  const targetLocale = locale || currencyInfo.locale;

  // Special handling for DZD (Algerian Dinar) due to RTL text direction
  if (currency === 'DZD') {
    return `${amount.toLocaleString('ar-DZ', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} ${currencyInfo.symbol}`;
  }

  return new Intl.NumberFormat(targetLocale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export function getCurrencySymbol(currency: Currency): string {
  return CURRENCIES[currency].symbol;
}

export function getCurrencyName(currency: Currency): string {
  return CURRENCIES[currency].name;
}

// Function to update exchange rates (would typically fetch from API)
export function updateExchangeRates(newRates: Partial<Record<Currency, number>>): void {
  Object.assign(EXCHANGE_RATES, newRates);
}

// Function to get current exchange rate between two currencies
export function getExchangeRate(fromCurrency: Currency, toCurrency: Currency): number {
  if (fromCurrency === toCurrency) {
    return 1.0;
  }
  
  return EXCHANGE_RATES[toCurrency] / EXCHANGE_RATES[fromCurrency];
}
