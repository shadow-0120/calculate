import { useState, useRef, useEffect } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { useTranslations } from '../hooks/useTranslations';
import { ChevronDown, DollarSign, Euro, Coins } from 'lucide-react';
import type { Currency } from '../types/currency';
import { CURRENCIES } from '../types/currency';

interface CurrencyDropdownProps {
  isDarkMode: boolean;
}

export default function CurrencyDropdown({ isDarkMode }: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { selectedCurrency, setSelectedCurrency, getCurrencyInfo } = useCurrency();
  const t = useTranslations();

  const currentCurrency = getCurrencyInfo();

  const getCurrencyIcon = (currency: Currency) => {
    switch (currency) {
      case 'USD':
        return DollarSign;
      case 'EUR':
        return Euro;
      case 'DZD':
        return Coins;
      default:
        return DollarSign;
    }
  };

  const getCurrencyColor = (currency: Currency) => {
    switch (currency) {
      case 'USD':
        return 'text-green-600 dark:text-green-400';
      case 'EUR':
        return 'text-blue-600 dark:text-blue-400';
      case 'DZD':
        return 'text-orange-600 dark:text-orange-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl ${
          isOpen ? 'bg-white/20' : ''
        }`}
        aria-label={t.selectCurrency}
      >
        <div className={`p-1.5 rounded-lg ${getCurrencyColor(selectedCurrency)}`}>
          {(() => {
            const Icon = getCurrencyIcon(selectedCurrency);
            return <Icon className="h-5 w-5" />;
          })()}
        </div>
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {currentCurrency.symbol} {currentCurrency.code}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {currentCurrency.name}
          </div>
        </div>
        <ChevronDown 
          className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl border backdrop-blur-xl z-50 ${
          isDarkMode 
            ? 'bg-gray-800/90 border-gray-700/50' 
            : 'bg-white/90 border-white/20'
        }`}>
          <div className="p-2">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
              {t.selectCurrency}
            </div>
            {Object.values(CURRENCIES).map((currency) => {
              const Icon = getCurrencyIcon(currency.code);
              const isSelected = selectedCurrency === currency.code;
              
              return (
                <button
                  key={currency.code}
                  onClick={() => handleCurrencyChange(currency.code)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${getCurrencyColor(currency.code)}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold">
                      {currency.symbol} {currency.code}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {currency.name}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
