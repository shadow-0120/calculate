import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Calendar, Percent, TrendingUp, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { useTranslations } from '../hooks/useTranslations';
// import LanguageDropdown from '../components/LanguageDropdown';
// import CurrencyDropdown from '../components/CurrencyDropdown';
import { calculateAlgerianLoan, type LoanInputs, type LoanResult } from '../utils/loanCalculations';

const LoanCalculator = () => {
  const [inputs, setInputs] = useState<LoanInputs>({
    principal: 100000,
    annualRate: 5.5,
    termYears: 30,
    paymentFrequency: 'monthly'
  });

  const [result, setResult] = useState<LoanResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isRTL } = useLanguage();
  const { formatCurrency } = useCurrency();
  const t = useTranslations();

  const calculateLoan = (inputs: LoanInputs): LoanResult => {
    // Use Algerian banking standard calculations
    return calculateAlgerianLoan(inputs);
  };

  const handleCalculate = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const calculationResult = calculateLoan(inputs);
      setResult(calculationResult);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Error calculating loan. Please check your inputs.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrencyAmount = (amount: number) => {
    return formatCurrency(amount);
  };

  const exportToCSV = () => {
    if (!result) return;

    const headers = [t.payment, t.monthlyPayment, t.principal, t.interest, t.balance];
    const csvContent = [
      headers.join(','),
      ...result.amortizationSchedule.map(payment => 
        `${payment.payment},${payment.principal.toFixed(2)},${payment.interest.toFixed(2)},${payment.balance.toFixed(2)}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loan_amortization_schedule.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-4 sm:py-8">
        {/* Header */}
        <div className={`flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
            <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <div className={`${isRTL ? 'text-right' : 'text-left'} max-w-xs sm:max-w-none`}>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">{t.loanTitle}</h1>
            <p className="text-sm sm:text-base text-slate-600">{t.loanSubtitle}</p>
          </div>
        </div>

        {/* Language Dropdown and Currency Dropdown */}
        <div className={`fixed top-4 sm:top-6 z-50 flex gap-2 sm:gap-3 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`}>
          {/* <LanguageDropdown isDarkMode={false} /> */}
          {/* <CurrencyDropdown isDarkMode={false} /> */}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50"
          >
            <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
              {t.loanParameters}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Principal Amount */}
              <div>
                <label className={`block text-sm font-semibold text-slate-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.principalAmount}
                </label>
                <div className="relative">
                  <DollarSign className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400`} />
                  <input
                    type="number"
                    value={inputs.principal}
                    onChange={(e) => setInputs({...inputs, principal: Number(e.target.value)})}
                    className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors mobile-btn`}
                    placeholder={t.principalAmount}
                  />
                </div>
              </div>

              {/* Annual Interest Rate */}
              <div>
                <label className={`block text-sm font-semibold text-slate-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.annualInterestRate}
                </label>
                <div className="relative">
                  <Percent className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400`} />
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.annualRate}
                    onChange={(e) => setInputs({...inputs, annualRate: Number(e.target.value)})}
                    className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors mobile-btn`}
                    placeholder={t.annualInterestRate}
                  />
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className={`block text-sm font-semibold text-slate-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.loanTerm}
                </label>
                <div className="relative">
                  <Calendar className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400`} />
                  <input
                    type="number"
                    value={inputs.termYears}
                    onChange={(e) => setInputs({...inputs, termYears: Number(e.target.value)})}
                    className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors mobile-btn`}
                    placeholder={t.loanTerm}
                  />
                </div>
              </div>

              {/* Payment Frequency */}
              <div>
                <label className={`block text-sm font-semibold text-slate-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.paymentFrequency}
                </label>
                <select
                  value={inputs.paymentFrequency}
                  onChange={(e) => setInputs({...inputs, paymentFrequency: e.target.value as any})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors mobile-btn"
                >
                  <option value="monthly">{t.monthly}</option>
                  <option value="quarterly">{t.quarterly}</option>
                  <option value="semi-annually">{t.semiAnnually}</option>
                  <option value="annually">{t.annually}</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl mobile-btn"
              >
                {isLoading ? t.calculatingLoan : t.calculateLoan}
              </button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {isLoading && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex items-center justify-center py-16">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calculator className="h-8 w-8 text-emerald-600 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {result && !isLoading && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50">
                    <div className={`flex items-center gap-2 sm:gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-600">{t.monthlyPayment}</span>
                    </div>
                    <p className={`text-lg sm:text-2xl font-bold text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>{formatCurrencyAmount(result.monthlyPayment)}</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50">
                    <div className={`flex items-center gap-2 sm:gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-600">{t.totalInterest}</span>
                    </div>
                    <p className={`text-lg sm:text-2xl font-bold text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>{formatCurrencyAmount(result.totalInterest)}</p>
                  </div>
                </div>

                {/* Amortization Schedule */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-white/50">
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <h3 className={`text-lg sm:text-xl font-bold text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>{t.amortizationSchedule}</h3>
                    <button
                      onClick={exportToCSV}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-xs sm:text-sm font-medium mobile-btn ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                      {t.exportCSV}
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm mobile-table">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className={`py-2 sm:py-3 px-1 sm:px-2 font-semibold text-slate-600 ${isRTL ? 'text-right' : 'text-left'}`}>{t.payment}</th>
                          <th className={`py-2 sm:py-3 px-1 sm:px-2 font-semibold text-slate-600 ${isRTL ? 'text-left' : 'text-right'}`}>{t.principal}</th>
                          <th className={`py-2 sm:py-3 px-1 sm:px-2 font-semibold text-slate-600 ${isRTL ? 'text-left' : 'text-right'}`}>{t.interest}</th>
                          <th className={`py-2 sm:py-3 px-1 sm:px-2 font-semibold text-slate-600 ${isRTL ? 'text-left' : 'text-right'}`}>{t.balance}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.amortizationSchedule.slice(0, 12).map((payment) => (
                          <tr key={payment.payment} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className={`py-2 sm:py-3 px-1 sm:px-2 text-slate-700 ${isRTL ? 'text-right' : 'text-left'}`}>{payment.payment}</td>
                            <td className={`py-2 sm:py-3 px-1 sm:px-2 text-slate-700 ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(payment.principal)}</td>
                            <td className={`py-2 sm:py-3 px-1 sm:px-2 text-slate-700 ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(payment.interest)}</td>
                            <td className={`py-2 sm:py-3 px-1 sm:px-2 text-slate-700 ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(payment.balance)}</td>
                          </tr>
                        ))}
                        {result.amortizationSchedule.length > 12 && (
                          <tr>
                            <td colSpan={4} className="py-2 sm:py-3 px-1 sm:px-2 text-center text-slate-500 text-xs sm:text-sm">
                              ... {t.morePayments} {result.amortizationSchedule.length - 12}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
