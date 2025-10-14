import { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import DepreciationCalculator from './pages/DepreciationCalculator';
import LoanCalculator from './pages/LoanCalculator';
import VANCalculator from './pages/VANCalculator';
import { Calculator, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import { useTranslations } from './hooks/useTranslations';

type CalculatorType = 'depreciation' | 'loans' | 'van';

function AppContent() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('depreciation');
  const { isRTL } = useLanguage();
  const t = useTranslations();

  const calculators = [
    { id: 'depreciation' as CalculatorType, name: t.depreciationCalculator, icon: TrendingDown, color: 'from-blue-500 to-cyan-500' },
    { id: 'loans' as CalculatorType, name: t.loanCalculator, icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
    { id: 'van' as CalculatorType, name: t.vanCalculator, icon: BarChart3, color: 'from-purple-500 to-pink-500' }
  ];

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'depreciation':
        return <DepreciationCalculator />;
      case 'loans':
        return <LoanCalculator />;
      case 'van':
        return <VANCalculator />;
      default:
        return <DepreciationCalculator />;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 transition-all duration-500 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Calculator Selector */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-slate-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">{t.financialCalculators}</h1>
          </div>
          <div className={`flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {calculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <button
                  key={calc.id}
                  onClick={() => setActiveCalculator(calc.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    isRTL ? 'flex-row-reverse' : ''
                  } ${
                    activeCalculator === calc.id
                      ? `bg-gradient-to-r ${calc.color} text-white shadow-lg`
                      : 'bg-white/60 text-slate-700 hover:bg-white/80 hover:shadow-md'
                  }`}
                >
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">{calc.name}</span>
                  <span className="xs:hidden">{calc.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      {renderCalculator()}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <AppContent />
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default App;
