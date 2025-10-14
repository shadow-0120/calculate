import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, DollarSign, Plus, Trash2, TrendingUp, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { useTranslations } from '../hooks/useTranslations';
import LanguageDropdown from '../components/LanguageDropdown';
import CurrencyDropdown from '../components/CurrencyDropdown';

interface CashFlow {
  id: string;
  year: number;
  amount: number;
  description: string;
}

interface VANInputs {
  initialInvestment: number;
  discountRate: number;
  cashFlows: CashFlow[];
}

interface VANResult {
  netPresentValue: number;
  presentValues: Array<{
    year: number;
    cashFlow: number;
    presentValue: number;
    cumulativeNPV: number;
  }>;
  paybackPeriod: number | null;
  profitabilityIndex: number;
}

const VANCalculator = () => {
  const [inputs, setInputs] = useState<VANInputs>({
    initialInvestment: 100000,
    discountRate: 10,
    cashFlows: [
      { id: '1', year: 1, amount: 30000, description: 'Year 1 Cash Flow' },
      { id: '2', year: 2, amount: 35000, description: 'Year 2 Cash Flow' },
      { id: '3', year: 3, amount: 40000, description: 'Year 3 Cash Flow' },
      { id: '4', year: 4, amount: 45000, description: 'Year 4 Cash Flow' },
      { id: '5', year: 5, amount: 50000, description: 'Year 5 Cash Flow' }
    ]
  });

  const [result, setResult] = useState<VANResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isRTL } = useLanguage();
  const { formatCurrency } = useCurrency();
  const t = useTranslations();

  const calculateVAN = (inputs: VANInputs): VANResult => {
    const { initialInvestment, discountRate, cashFlows } = inputs;
    const discountRateDecimal = discountRate / 100;

    const presentValues = cashFlows.map(cf => {
      const presentValue = cf.amount / Math.pow(1 + discountRateDecimal, cf.year);
      return {
        year: cf.year,
        cashFlow: cf.amount,
        presentValue,
        cumulativeNPV: 0 // Will be calculated below
      };
    });

    // Calculate cumulative NPV
    let cumulativeNPV = -initialInvestment;
    presentValues.forEach(pv => {
      cumulativeNPV += pv.presentValue;
      pv.cumulativeNPV = cumulativeNPV;
    });

    const netPresentValue = presentValues.reduce((sum, pv) => sum + pv.presentValue, 0) - initialInvestment;

    // Calculate payback period
    let paybackPeriod: number | null = null;
    let cumulativeCashFlow = -initialInvestment;
    for (let i = 0; i < presentValues.length; i++) {
      cumulativeCashFlow += presentValues[i].presentValue;
      if (cumulativeCashFlow >= 0) {
        paybackPeriod = i + 1;
        break;
      }
    }

    const profitabilityIndex = presentValues.reduce((sum, pv) => sum + pv.presentValue, 0) / initialInvestment;

    return {
      netPresentValue,
      presentValues,
      paybackPeriod,
      profitabilityIndex
    };
  };

  const handleCalculate = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const calculationResult = calculateVAN(inputs);
      setResult(calculationResult);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Error calculating VAN. Please check your inputs.');
    } finally {
      setIsLoading(false);
    }
  };

  const addCashFlow = () => {
    const newId = (inputs.cashFlows.length + 1).toString();
    const newYear = Math.max(...inputs.cashFlows.map(cf => cf.year)) + 1;
    setInputs({
      ...inputs,
      cashFlows: [
        ...inputs.cashFlows,
        { id: newId, year: newYear, amount: 0, description: `${t.year} ${newYear} ${t.cashFlow}` }
      ]
    });
  };

  const removeCashFlow = (id: string) => {
    setInputs({
      ...inputs,
      cashFlows: inputs.cashFlows.filter(cf => cf.id !== id)
    });
  };

  const updateCashFlow = (id: string, field: keyof CashFlow, value: any) => {
    setInputs({
      ...inputs,
      cashFlows: inputs.cashFlows.map(cf => 
        cf.id === id ? { ...cf, [field]: value } : cf
      )
    });
  };

  const formatCurrencyAmount = (amount: number) => {
    return formatCurrency(amount);
  };

  const exportToCSV = () => {
    if (!result) return;

    const headers = [t.year, t.cashFlow, t.presentValue, t.cumulativeNPV];
    const csvContent = [
      [t.initialInvestment, formatCurrencyAmount(-inputs.initialInvestment), '', ''],
      ...result.presentValues.map(pv => [
        pv.year.toString(),
        formatCurrencyAmount(pv.cashFlow),
        formatCurrencyAmount(pv.presentValue),
        formatCurrencyAmount(pv.cumulativeNPV)
      ]),
      [t.netPresentValue, '', formatCurrencyAmount(result.netPresentValue), ''],
      [t.paybackPeriod, result.paybackPeriod ? `${result.paybackPeriod} ${t.years}` : 'N/A', '', ''],
      [t.profitabilityIndex, result.profitabilityIndex.toFixed(2), '', '']
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'van_analysis.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className={`flex items-center justify-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h1 className="text-3xl font-bold text-slate-800">{t.vanTitle}</h1>
            <p className="text-slate-600">{t.vanSubtitle}</p>
          </div>
        </div>

        {/* Language Dropdown and Currency Dropdown */}
        <div className={`fixed top-6 z-50 flex gap-3 ${isRTL ? 'left-6' : 'right-6'}`}>
          <LanguageDropdown isDarkMode={false} />
          <CurrencyDropdown isDarkMode={false} />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
          >
            <h2 className={`text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <BarChart3 className="h-6 w-6 text-purple-600" />
              {t.investmentParameters}
            </h2>

            <div className="space-y-6">
              {/* Initial Investment */}
              <div>
                <label className={`block text-sm font-semibold text-slate-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.initialInvestment}
                </label>
                <div className="relative">
                  <DollarSign className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400`} />
                  <input
                    type="number"
                    value={inputs.initialInvestment}
                    onChange={(e) => setInputs({...inputs, initialInvestment: Number(e.target.value)})}
                    className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors`}
                    placeholder={t.initialInvestment}
                  />
                </div>
              </div>

              {/* Discount Rate */}
              <div>
                <label className={`block text-sm font-semibold text-slate-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.discountRate}
                </label>
                <div className="relative">
                  <TrendingUp className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400`} />
                  <input
                    type="number"
                    step="0.01"
                    value={inputs.discountRate}
                    onChange={(e) => setInputs({...inputs, discountRate: Number(e.target.value)})}
                    className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors`}
                    placeholder={t.discountRate}
                  />
                </div>
              </div>

              {/* Cash Flows */}
              <div>
                <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <label className={`text-sm font-semibold text-slate-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.cashFlows}
                  </label>
                  <button
                    onClick={addCashFlow}
                    className={`flex items-center gap-2 px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors text-sm font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <Plus className="h-4 w-4" />
                    {t.addYear}
                  </button>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {inputs.cashFlows.map((cf, index) => (
                    <div key={cf.id} className={`flex gap-2 items-center p-3 bg-slate-50 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <input
                        type="number"
                        value={cf.year}
                        onChange={(e) => updateCashFlow(cf.id, 'year', Number(e.target.value))}
                        className="w-16 px-2 py-1 border border-slate-300 rounded text-sm"
                        placeholder={t.year}
                      />
                      <input
                        type="number"
                        value={cf.amount}
                        onChange={(e) => updateCashFlow(cf.id, 'amount', Number(e.target.value))}
                        className="flex-1 px-3 py-1 border border-slate-300 rounded text-sm"
                        placeholder={t.amount}
                      />
                      {inputs.cashFlows.length > 1 && (
                        <button
                          onClick={() => removeCashFlow(cf.id)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isLoading ? t.calculatingVAN : t.calculateVAN}
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
                    <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-purple-600 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {result && !isLoading && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <DollarSign className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-semibold text-slate-600">{t.netPresentValue}</span>
                    </div>
                    <p className={`text-2xl font-bold ${result.netPresentValue >= 0 ? 'text-green-600' : 'text-red-600'} ${isRTL ? 'text-right' : 'text-left'}`}>
                      {formatCurrencyAmount(result.netPresentValue)}
                    </p>
                    <p className={`text-xs text-slate-500 mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {result.netPresentValue >= 0 ? t.profitableInvestment : t.notProfitable}
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-semibold text-slate-600">{t.profitabilityIndex}</span>
                    </div>
                    <p className={`text-2xl font-bold text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>{result.profitabilityIndex.toFixed(2)}</p>
                    <p className={`text-xs text-slate-500 mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {result.profitabilityIndex >= 1 ? t.acceptable : t.notAcceptable}
                    </p>
                  </div>
                </div>

                {/* Payback Period */}
                {result.paybackPeriod && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <BarChart3 className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-600">{t.paybackPeriod}</span>
                    </div>
                    <p className={`text-2xl font-bold text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>{result.paybackPeriod} {t.years}</p>
                  </div>
                )}

                {/* Cash Flow Analysis */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
                  <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <h3 className={`text-xl font-bold text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>{t.cashFlowAnalysis}</h3>
                    <button
                      onClick={exportToCSV}
                      className={`flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Download className="h-4 w-4" />
                      {t.exportCSV}
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className={`py-3 px-2 font-semibold text-slate-600 ${isRTL ? 'text-right' : 'text-left'}`}>{t.year}</th>
                          <th className={`py-3 px-2 font-semibold text-slate-600 ${isRTL ? 'text-left' : 'text-right'}`}>{t.cashFlow}</th>
                          <th className={`py-3 px-2 font-semibold text-slate-600 ${isRTL ? 'text-left' : 'text-right'}`}>{t.presentValue}</th>
                          <th className={`py-3 px-2 font-semibold text-slate-600 ${isRTL ? 'text-left' : 'text-right'}`}>{t.cumulativeNPV}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 bg-red-50">
                          <td className={`py-3 px-2 text-slate-700 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>{t.initial}</td>
                          <td className={`py-3 px-2 text-red-600 font-medium ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(-inputs.initialInvestment)}</td>
                          <td className={`py-3 px-2 text-red-600 font-medium ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(-inputs.initialInvestment)}</td>
                          <td className={`py-3 px-2 text-red-600 font-medium ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(-inputs.initialInvestment)}</td>
                        </tr>
                        {result.presentValues.map((pv) => (
                          <tr key={pv.year} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className={`py-3 px-2 text-slate-700 ${isRTL ? 'text-right' : 'text-left'}`}>{pv.year}</td>
                            <td className={`py-3 px-2 text-slate-700 ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(pv.cashFlow)}</td>
                            <td className={`py-3 px-2 text-slate-700 ${isRTL ? 'text-left' : 'text-right'}`}>{formatCurrencyAmount(pv.presentValue)}</td>
                            <td className={`py-3 px-2 font-medium ${isRTL ? 'text-left' : 'text-right'} ${pv.cumulativeNPV >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {formatCurrencyAmount(pv.cumulativeNPV)}
                            </td>
                          </tr>
                        ))}
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

export default VANCalculator;
