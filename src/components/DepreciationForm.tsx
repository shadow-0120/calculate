import { useState } from 'react';
import type { DepreciationInputs, DepreciationMethod } from '../types/depreciation';
import { useTranslations } from '../hooks/useTranslations';
import { useCurrency } from '../contexts/CurrencyContext';
import { Calculator, DollarSign, Calendar, Percent, TrendingUp, BarChart3, Zap } from 'lucide-react';

interface DepreciationFormProps {
  onSubmit: (inputs: DepreciationInputs) => Promise<void>;
  isLoading: boolean;
  isDarkMode: boolean;
}

export default function DepreciationForm({ onSubmit, isLoading, isDarkMode }: DepreciationFormProps) {
  const t = useTranslations();
  const { getCurrencyInfo } = useCurrency();
  const [formData, setFormData] = useState<DepreciationInputs>({
    assetCost: 0,
    salvageValue: 0,
    usefulLife: 0,
    method: 'linear',
    decliningBalanceRate: 2
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.assetCost > 0 && formData.usefulLife > 0) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof DepreciationInputs, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? (value === '' ? 0 : parseFloat(value) || 0) : value
    }));
  };

  const handleMethodChange = (method: DepreciationMethod) => {
    console.log('Method changed to:', method); // Debug log
    setFormData(prev => ({
      ...prev,
      method: method
    }));
  };

  const methodConfigs = [
    { 
      value: 'linear', 
      label: t.linearMethod, 
      description: t.linearDescription,
      icon: TrendingUp,
      color: 'from-navy-500 to-navy-600',
      bgColor: 'bg-navy-50',
      borderColor: 'border-navy-500',
      textColor: 'text-navy-600'
    },
    { 
      value: 'declining-balance', 
      label: t.decliningBalanceMethod, 
      description: t.decliningBalanceDescription,
      icon: BarChart3,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-600'
    },
    { 
      value: 'sum-of-years-digits', 
      label: t.sumOfYearsDigitsMethod, 
      description: t.sumOfYearsDigitsDescription,
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-600'
    },
    { 
      value: 'progressive', 
      label: t.progressiveMethod, 
      description: t.progressiveDescription,
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 bg-white/90 backdrop-blur-xl border border-slate-200">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500/5 via-emerald-500/5 to-amber-500/5 animate-pulse"></div>
      
      <div className="relative p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500 to-emerald-600 rounded-xl blur-lg opacity-75 animate-pulse"></div>
            <div className="relative p-3 bg-gradient-to-r from-navy-500 to-emerald-600 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-navy-600 to-emerald-600 bg-clip-text text-transparent">
              {t.formTitle}
            </h2>
            <p className="text-slate-600 mt-1">
              {t.formSubtitle}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Method Selection */}
          <div className="space-y-6">
            <div className="text-center">
              <label className="block text-2xl font-bold text-slate-800 mb-2">
                {t.selectMethod}
              </label>
              <p className="text-slate-600">
                {t.selectMethodDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {methodConfigs.map((method) => {
                const Icon = method.icon;
                const isSelected = formData.method === method.value;
                
                return (
                  <label
                    key={method.value}
                    className={`group relative flex flex-col p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      isSelected
                        ? `${method.bgColor} ${method.borderColor} border-2 shadow-xl scale-105`
                        : `bg-white/80 border-2 border-slate-200 hover:border-slate-300 hover:bg-white/90`
                    }`}
                    onClick={() => handleMethodChange(method.value as DepreciationMethod)}
                  >
                    <input
                      type="radio"
                      name="method"
                      value={method.value}
                      checked={isSelected}
                      onChange={(e) => handleMethodChange(e.target.value as DepreciationMethod)}
                      className="sr-only"
                    />
                    
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto ${
                      isSelected 
                        ? `bg-gradient-to-r ${method.color} text-white shadow-lg` 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    } transition-all duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center space-y-2">
                      <div className={`font-bold text-lg ${
                        isSelected ? method.textColor : 'text-slate-800'
                      }`}>
                        {method.label}
                      </div>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        {method.description}
                      </div>
                    </div>
                    
                    {/* Selection indicator */}
                    {isSelected && (
                      <div className={`absolute top-3 right-3 w-7 h-7 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg`}>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {t.assetInformation}
              </h3>
              <p className="text-slate-600">
                {t.assetInformationDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Asset Cost */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-base font-semibold text-slate-700">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  {t.assetCost}
                </label>
                <div className="relative group">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.assetCost || ''}
                    onChange={(e) => handleInputChange('assetCost', e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 focus-ring text-lg bg-white/90 border-slate-200 text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:shadow-lg"
                    placeholder={t.assetCost}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-slate-500 font-medium">{getCurrencyInfo().code}</span>
                  </div>
                </div>
              </div>

              {/* Salvage Value */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-base font-semibold text-slate-700">
                  <div className="p-2 bg-navy-100 rounded-lg">
                    <DollarSign className="h-5 w-5 text-navy-600" />
                  </div>
                  {t.salvageValue}
                </label>
                <div className="relative group">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.salvageValue || ''}
                    onChange={(e) => handleInputChange('salvageValue', e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 focus-ring text-lg bg-white/90 border-slate-200 text-slate-900 placeholder-slate-500 focus:border-navy-500 focus:bg-white focus:shadow-lg"
                    placeholder={`${t.salvageValue} (${t.optional})`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-slate-500 font-medium">{getCurrencyInfo().code}</span>
                  </div>
                </div>
              </div>

              {/* Useful Life */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-base font-semibold text-slate-700">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  {t.usefulLife}
                </label>
                <div className="relative group">
                  <input
                    type="number"
                    min="1"
                    value={formData.usefulLife || ''}
                    onChange={(e) => handleInputChange('usefulLife', e.target.value)}
                    className="w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 focus-ring text-lg bg-white/90 border-slate-200 text-slate-900 placeholder-slate-500 focus:border-amber-500 focus:bg-white focus:shadow-lg"
                    placeholder={`${t.usefulLife} (${t.years})`}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <span className="text-slate-500 font-medium">{t.years}</span>
                  </div>
                </div>
              </div>

              {/* Declining Balance Rate - Only show when method is selected */}
              {formData.method === 'declining-balance' && (
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-base font-semibold text-slate-700">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Percent className="h-5 w-5 text-emerald-600" />
                    </div>
                    {t.decliningBalanceRate}
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="3"
                      value={formData.decliningBalanceRate || ''}
                      onChange={(e) => handleInputChange('decliningBalanceRate', e.target.value)}
                      className="w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 focus-ring text-lg bg-white/90 border-slate-200 text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:bg-white focus:shadow-lg"
                      placeholder={t.decliningBalanceRate}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <span className="text-slate-500 font-medium">{t.percentage}</span>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <p className="text-sm text-emerald-700">
                      <strong>{t.commonRates}</strong>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 focus:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl ${
                isLoading
                  ? 'bg-slate-400 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-navy-600 via-emerald-600 to-amber-600 text-white hover:from-navy-700 hover:via-emerald-700 hover:to-amber-700 hover:shadow-2xl animate-pulse-glow'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-4">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t.calculatingDepreciation}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <Calculator className="h-6 w-6" />
                  <span>{t.calculateDepreciation}</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
