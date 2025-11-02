import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Currency, CurrencyContextType, CurrencyInfo } from '../types/currency';
import { CURRENCIES } from '../types/currency';
import { convertCurrency, formatCurrencyAmount } from '../utils/currencyConversion';

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: ReactNode;
}

export function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('DZD');

  // Load saved currency preference from localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency') as Currency;
    if (savedCurrency && CURRENCIES[savedCurrency]) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  // Save currency preference to localStorage
  useEffect(() => {
    localStorage.setItem('selectedCurrency', selectedCurrency);
  }, [selectedCurrency]);

  const convertAmount = (amount: number, fromCurrency: Currency = 'DZD'): number => {
    return convertCurrency(amount, fromCurrency, selectedCurrency);
  };

  const formatCurrency = (amount: number, currency?: Currency): string => {
    const targetCurrency = currency || selectedCurrency;
    return formatCurrencyAmount(amount, targetCurrency);
  };

  const getCurrencyInfo = (currency?: Currency): CurrencyInfo => {
    return CURRENCIES[currency || selectedCurrency];
  };

  const value: CurrencyContextType = {
    selectedCurrency,
    setSelectedCurrency,
    convertAmount,
    formatCurrency,
    getCurrencyInfo
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
