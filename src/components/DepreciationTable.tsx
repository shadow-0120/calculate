import type { DepreciationResult } from '../types/depreciation';
import { useTranslations } from '../hooks/useTranslations';
import { useCurrency } from '../contexts/CurrencyContext';
import { Table, Download, FileText, TrendingDown, BarChart3, PieChart, ArrowUpRight } from 'lucide-react';

interface DepreciationTableProps {
  result: DepreciationResult | null;
  isDarkMode: boolean;
}

export default function DepreciationTable({ result, isDarkMode }: DepreciationTableProps) {
  const t = useTranslations();
  const { formatCurrency } = useCurrency();
  
  if (!result) {
    return null;
  }

  const formatCurrencyAmount = (amount: number) => {
    return formatCurrency(amount);
  };

  const exportToCSV = () => {
    const headers = [t.year, t.beginningValue, t.depreciationExpense, t.accumulatedDepreciation, t.endingValue];
    const csvContent = [
      headers.join(','),
      ...result.schedule.map(year => [
        year.year,
        year.beginningValue,
        year.depreciationExpense,
        year.accumulatedDepreciation,
        year.endingValue
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `depreciation-${result.method}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getMethodDisplayName = (method: string) => {
    switch (method) {
      case 'linear': return t.linearMethod;
      case 'declining-balance': return t.decliningBalanceMethod;
      case 'sum-of-years-digits': return t.sumOfYearsDigitsMethod;
      default: return method;
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'linear': return 'from-navy-500 to-navy-600';
      case 'declining-balance': return 'from-emerald-500 to-emerald-600';
      case 'sum-of-years-digits': return 'from-amber-500 to-amber-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'linear': return TrendingDown;
      case 'declining-balance': return BarChart3;
      case 'sum-of-years-digits': return PieChart;
      default: return Table;
    }
  };

  const MethodIcon = getMethodIcon(result.method);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl border border-slate-200">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-navy-500/5 to-amber-500/5 animate-pulse"></div>
      
      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${getMethodColor(result.method)} rounded-xl blur-lg opacity-75 animate-pulse`}></div>
              <div className={`relative p-3 bg-gradient-to-r ${getMethodColor(result.method)} rounded-xl`}>
                <MethodIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-navy-600 bg-clip-text text-transparent">
                {t.depreciationSchedule}
              </h3>
              <p className="text-slate-600 mt-1">
                {getMethodDisplayName(result.method)}
              </p>
            </div>
          </div>
          
          <button
            onClick={exportToCSV}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-navy-600 text-white rounded-xl hover:from-emerald-600 hover:to-navy-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="h-5 w-5 group-hover:animate-bounce" />
            <span className="font-semibold">{t.exportCSV}</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-navy-50 border border-navy-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-navy-500 rounded-lg">
                <TrendingDown className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-navy-600">{t.method}</span>
            </div>
            <p className="text-lg font-bold text-slate-800">
              {getMethodDisplayName(result.method)}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-emerald-600">{t.assetCost}</span>
            </div>
            <p className="text-lg font-bold text-slate-800">
              {formatCurrencyAmount(result.inputs.assetCost)}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-500 rounded-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-amber-600">{t.salvageValue}</span>
            </div>
            <p className="text-lg font-bold text-slate-800">
              {formatCurrencyAmount(result.inputs.salvageValue)}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-slate-500 rounded-lg">
                <PieChart className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-600">{t.totalDepreciation}</span>
            </div>
            <p className="text-lg font-bold text-emerald-600">
              {formatCurrencyAmount(result.totalDepreciation)}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.year}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.beginningValue}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.depreciationExpense}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.accumulatedDepreciation}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.endingValue}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {result.schedule.map((year, index) => (
                  <tr 
                    key={year.year} 
                    className={`group hover:bg-slate-50 transition-colors duration-200 ${
                      index % 2 === 0 
                        ? 'bg-white' 
                        : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-navy-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {year.year}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {formatCurrencyAmount(year.beginningValue)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
                      -{formatCurrencyAmount(year.depreciationExpense)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {formatCurrencyAmount(year.accumulatedDepreciation)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">
                      {formatCurrencyAmount(year.endingValue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enhanced Summary */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-navy-50 to-emerald-50 border border-navy-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-navy-500 to-emerald-600 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-navy-800">{t.summaryReport}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <p className="text-slate-600">{t.totalDepreciationPeriod}</p>
              <p className="text-2xl font-bold text-slate-800">
                {result.schedule.length} {t.years}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-600">{t.finalBookValue}</p>
              <p className="text-2xl font-bold text-emerald-600">
                {formatCurrencyAmount(result.schedule[result.schedule.length - 1].endingValue)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-600">{t.averageAnnualDepreciation}</p>
              <p className="text-2xl font-bold text-amber-600">
                {formatCurrencyAmount(result.totalDepreciation / result.schedule.length)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
