import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Calculator } from 'lucide-react';
import type { DepreciationInputs, DepreciationResult } from '../types/depreciation';
import { calculateDepreciation } from '../utils/depreciationCalculations';
import DepreciationForm from '../components/DepreciationForm';
import DepreciationTable from '../components/DepreciationTable';
// import LanguageDropdown from '../components/LanguageDropdown';
// import CurrencyDropdown from '../components/CurrencyDropdown';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';

const DepreciationCalculator = () => {
  const [result, setResult] = useState<DepreciationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isRTL } = useLanguage();
  const t = useTranslations();

  const handleCalculate = async (inputs: DepreciationInputs): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate a brief loading state for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      const calculationResult = calculateDepreciation(inputs);
      setResult(calculationResult);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Error calculating depreciation. Please check your inputs.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-4 sm:py-8">
        {/* Header */}
        <div className={`flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
            <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <div className={`${isRTL ? 'text-right' : 'text-left'} max-w-xs sm:max-w-none`}>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">{t.title}</h1>
            <p className="text-sm sm:text-base text-slate-600">{t.description}</p>
          </div>
        </div>

        {/* Language Dropdown and Currency Dropdown */}
        <div className={`fixed top-4 sm:top-6 z-50 flex gap-2 sm:gap-3 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`}>
          {/* <LanguageDropdown isDarkMode={false} /> */}
          {/* <CurrencyDropdown isDarkMode={false} /> */}
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <DepreciationForm onSubmit={handleCalculate} isLoading={isLoading} />
            
            {isLoading && (
              <div className="flex justify-center items-center py-16">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-emerald-600 animate-pulse" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-slate-700">
                    {t.calculatingSchedule}
                  </p>
                  <p className="text-sm text-slate-500">
                    {t.thisMayTakeMoment}
                  </p>
                </div>
              </div>
            )}
            
            {result && !isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="animate-fadeInUp"
              >
                <DepreciationTable result={result} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DepreciationCalculator;
