export type Language = 'en' | 'ar' | 'fr';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    direction: 'rtl'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    direction: 'ltr'
  }
];

export interface Translations {
  // Header
  title: string;
  subtitle: string;
  description: string;
  description2: string;
  
  // Theme toggle
  toggleTheme: string;
  
  // Form
  formTitle: string;
  formSubtitle: string;
  selectMethod: string;
  selectMethodDescription: string;
  assetInformation: string;
  assetInformationDescription: string;
  
  // Methods
  linearMethod: string;
  linearDescription: string;
  decliningBalanceMethod: string;
  decliningBalanceDescription: string;
  sumOfYearsDigitsMethod: string;
  sumOfYearsDigitsDescription: string;
  progressiveMethod: string;
  progressiveDescription: string;
  
  // Form fields
  assetCost: string;
  salvageValue: string;
  usefulLife: string;
  decliningBalanceRate: string;
  commonRates: string;
  optional: string;
  
  // Buttons
  calculateDepreciation: string;
  calculatingDepreciation: string;
  exportCSV: string;
  
  // Table headers
  year: string;
  beginningValue: string;
  depreciationExpense: string;
  accumulatedDepreciation: string;
  endingValue: string;
  
  // Summary
  depreciationSchedule: string;
  method: string;
  totalDepreciation: string;
  summaryReport: string;
  totalDepreciationPeriod: string;
  finalBookValue: string;
  averageAnnualDepreciation: string;
  years: string;
  
  // Loading
  calculatingSchedule: string;
  thisMayTakeMoment: string;
  
  // Footer
  professionalDepreciationCalculator: string;
  builtWith: string;
  
  // Currency and units
  currency: string;
  currencyCode: string;
  percentage: string;
  selectCurrency: string;
  currencySettings: string;
  
  // App Navigation
  financialCalculators: string;
  depreciationCalculator: string;
  loanCalculator: string;
  vanCalculator: string;
  
  // Loan Calculator
  loanTitle: string;
  loanSubtitle: string;
  loanParameters: string;
  principalAmount: string;
  annualInterestRate: string;
  loanTerm: string;
  paymentFrequency: string;
  monthly: string;
  quarterly: string;
  semiAnnually: string;
  annually: string;
  calculateLoan: string;
  calculatingLoan: string;
  monthlyPayment: string;
  totalInterest: string;
  amortizationSchedule: string;
  payment: string;
  principal: string;
  interest: string;
  balance: string;
  morePayments: string;
  
  // VAN Calculator
  vanTitle: string;
  vanSubtitle: string;
  investmentParameters: string;
  initialInvestment: string;
  discountRate: string;
  cashFlows: string;
  addYear: string;
  calculateVAN: string;
  calculatingVAN: string;
  netPresentValue: string;
  profitableInvestment: string;
  notProfitable: string;
  profitabilityIndex: string;
  acceptable: string;
  notAcceptable: string;
  paybackPeriod: string;
  cashFlowAnalysis: string;
  cashFlow: string;
  presentValue: string;
  cumulativeNPV: string;
  initial: string;
  amount: string;
  description: string;
}
