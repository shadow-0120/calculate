import type { Translations, Language } from '../types/language';

export const translations: Record<Language, Translations> = {
  en: {
    // Header
    title: 'Depreciation Calculator',
    subtitle: 'Professional Asset Management',
    description: 'Calculate asset depreciation using three powerful methods: Linear, Declining Balance, and Sum-of-Years-Digits.',
    description2: 'Get detailed schedules and export professional reports for your business needs.',
    
    // Theme toggle
    toggleTheme: 'Toggle theme',
    
    // Form
    formTitle: 'Depreciation Calculator',
    formSubtitle: 'Choose your method and enter asset details',
    selectMethod: 'Select Depreciation Method',
    selectMethodDescription: 'Choose the depreciation method that best fits your asset type',
    assetInformation: 'Asset Information',
    assetInformationDescription: 'Enter the details of your asset for depreciation calculation',
    
    // Methods
    linearMethod: 'Linear (Straight-line)',
    linearDescription: 'Equal annual depreciation',
    decliningBalanceMethod: 'Declining Balance',
    decliningBalanceDescription: 'Higher early depreciation',
    sumOfYearsDigitsMethod: 'Sum-of-Years-Digits',
    sumOfYearsDigitsDescription: 'Accelerated depreciation',
    progressiveMethod: 'Progressive Depreciation',
    progressiveDescription: 'Increasing annual depreciation',
    
    // Form fields
    assetCost: 'Asset Cost',
    salvageValue: 'Salvage Value',
    usefulLife: 'Useful Life',
    decliningBalanceRate: 'Declining Balance Rate',
    commonRates: 'Common rates: 1.5 (150%), 2 (200%), 2.5 (250%)',
    optional: 'Optional',
    
    // Buttons
    calculateDepreciation: 'Calculate Depreciation',
    calculatingDepreciation: 'Calculating Depreciation...',
    exportCSV: 'Export CSV',
    
    // Table headers
    year: 'Year',
    beginningValue: 'Beginning Value',
    depreciationExpense: 'Depreciation Expense',
    accumulatedDepreciation: 'Accumulated Depreciation',
    endingValue: 'Ending Value',
    
    // Summary
    depreciationSchedule: 'Depreciation Schedule',
    method: 'Method',
    totalDepreciation: 'Total Depreciation',
    summaryReport: 'Summary Report',
    totalDepreciationPeriod: 'Total Depreciation Period',
    finalBookValue: 'Final Book Value',
    averageAnnualDepreciation: 'Average Annual Depreciation',
    years: 'years',
    
    // Loading
    calculatingSchedule: 'Calculating your depreciation schedule...',
    thisMayTakeMoment: 'This may take a moment',
    
    // Footer
    professionalDepreciationCalculator: 'Professional Depreciation Calculator',
    builtWith: 'Built with React, TypeScript & Tailwind CSS',
    
    // Currency and units
    currency: 'DZD',
    currencyCode: 'DZD',
    percentage: '%',
    selectCurrency: 'Select Currency',
    currencySettings: 'Currency Settings',
    
    // App Navigation
    financialCalculators: 'Financial Calculators',
    depreciationCalculator: 'Depreciation Calculator',
    loanCalculator: 'Loan Calculator',
    vanCalculator: 'VAN Calculator',
    
    // Loan Calculator
    loanTitle: 'Loan Calculator',
    loanSubtitle: 'Calculate loan payments with compound interest',
    loanParameters: 'Loan Parameters',
    principalAmount: 'Principal Amount',
    annualInterestRate: 'Annual Interest Rate (%)',
    loanTerm: 'Loan Term (Years)',
    paymentFrequency: 'Payment Frequency',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    semiAnnually: 'Semi-Annually',
    annually: 'Annually',
    calculateLoan: 'Calculate Loan',
    calculatingLoan: 'Calculating...',
    monthlyPayment: 'Monthly Payment',
    totalInterest: 'Total Interest',
    amortizationSchedule: 'Amortization Schedule',
    payment: 'Payment',
    principal: 'Principal',
    interest: 'Interest',
    balance: 'Balance',
    morePayments: 'more payments',
    
    // VAN Calculator
    vanTitle: 'VAN Calculator',
    vanSubtitle: 'Calculate Net Present Value for investment analysis',
    investmentParameters: 'Investment Parameters',
    initialInvestment: 'Initial Investment',
    discountRate: 'Discount Rate (%)',
    cashFlows: 'Cash Flows',
    addYear: 'Add Year',
    calculateVAN: 'Calculate VAN',
    calculatingVAN: 'Calculating...',
    netPresentValue: 'Net Present Value',
    profitableInvestment: 'Profitable Investment',
    notProfitable: 'Not Profitable',
    profitabilityIndex: 'Profitability Index',
    acceptable: 'Acceptable',
    notAcceptable: 'Not Acceptable',
    paybackPeriod: 'Payback Period',
    cashFlowAnalysis: 'Cash Flow Analysis',
    cashFlow: 'Cash Flow',
    presentValue: 'Present Value',
    cumulativeNPV: 'Cumulative NPV',
    initial: 'Initial',
    amount: 'Amount'
  },
  
 ar: {
  // Header
  title: 'حاسبة الإهتلاك',
  subtitle: 'إدارة احترافية للأصول',
  description: 'احسب إهتلاك الأصول تاعك بثلاث طرق دقيقة: الخطية، المتناقصة، ولا بطريقة مجموع الأرقام.',
  description2: 'تقدر تطلع على الجداول بالتفصيل وتخرج تقارير احترافية تساعدك في شغلك.',

  // Theme toggle
  toggleTheme: 'بدّل المظهر',

  // Form
  formTitle: 'حاسبة الإهتلاك',
  formSubtitle: 'اختار الطريقة ودخّل تفاصيل الأصل',
  selectMethod: 'اختيار طريقة الإهتلاك',
  selectMethodDescription: 'اختار الطريقة اللي تناسب نوع الأصل تاعك',
  assetInformation: 'معلومات على الأصل',
  assetInformationDescription: 'دخّل التفاصيل باش نحسبو الإهتلاك',

  // Methods
  linearMethod: 'الإهتلاك الخطي',
  linearDescription: 'إهتلاك ثابت كل عام',
  decliningBalanceMethod: 'الإهتلاك المتناقص',
  decliningBalanceDescription: 'إهتلاك كبير في السنوات الأولى',
  sumOfYearsDigitsMethod: 'طريقة مجموع الأرقام',
  sumOfYearsDigitsDescription: 'إهتلاك سريع في البداية',
  progressiveMethod: 'الإهتلاك المتزايد',
  progressiveDescription: 'إهتلاك يزيد كل عام',

  // Form fields
  assetCost: 'سعر الأصل',
  salvageValue: 'القيمة المتبقية',
  usefulLife: 'العمر الإنتاجي',
  decliningBalanceRate: 'نسبة الإهتلاك المتناقص',
  commonRates: 'النسب الشائعة: 1.5 (150%)، 2 (200%)، 2.5 (250%)',
  optional: 'اختياري',

  // Buttons
  calculateDepreciation: 'احسب الإهتلاك',
  calculatingDepreciation: 'جاري الحساب...',
  exportCSV: 'تصدير CSV',

  // Table headers
  year: 'السنة',
  beginningValue: 'القيمة في البداية',
  depreciationExpense: 'مصاريف الإهتلاك',
  accumulatedDepreciation: 'الإهتلاك المتراكم',
  endingValue: 'القيمة في النهاية',

  // Summary
  depreciationSchedule: 'جدول الإهتلاك',
  method: 'الطريقة',
  totalDepreciation: 'مجموع الإهتلاك',
  summaryReport: 'تقرير الملخص',
  totalDepreciationPeriod: 'مدة الإهتلاك الكاملة',
  finalBookValue: 'القيمة الدفترية الأخيرة',
  averageAnnualDepreciation: 'معدل الإهتلاك السنوي المتوسط',
  years: 'سنوات',

  // Loading
  calculatingSchedule: 'جاري إنشاء الجدول...',
  thisMayTakeMoment: 'استنى شوية، راهو يحسب',

  // Footer
  professionalDepreciationCalculator: 'حاسبة الإهتلاك الاحترافية',
  builtWith: 'مبنية بـ React و TypeScript و Tailwind CSS',

  // Currency and units
  currency: 'الدولار الأمريكي',
  currencyCode: 'DZD',
  percentage: '%',
  selectCurrency: 'اختار العملة',
  currencySettings: 'إعدادات العملة',

  // App Navigation
  financialCalculators: 'حاسبات مالية',
  depreciationCalculator: 'حاسبة الإهتلاك',
  loanCalculator: 'حاسبة القروض',
  vanCalculator: 'حاسبة القيمة الحالية الصافية',

  // Loan Calculator
  loanTitle: 'حاسبة القرض',
  loanSubtitle: 'احسب الأقساط تاع القرض بالفائدة المركبة',
  loanParameters: 'تفاصيل القرض',
  principalAmount: 'مبلغ القرض الأصلي',
  annualInterestRate: 'نسبة الفائدة السنوية (%)',
  loanTerm: 'مدة القرض (بالسنوات)',
  paymentFrequency: 'دورية الدفع',
  monthly: 'شهري',
  quarterly: 'كل ثلاثة أشهر',
  semiAnnually: 'كل ستة أشهر',
  annually: 'سنوي',
  calculateLoan: 'احسب القرض',
  calculatingLoan: 'جاري الحساب...',
  monthlyPayment: 'القسط الشهري',
  totalInterest: 'إجمالي الفائدة',
  amortizationSchedule: 'جدول التسديد',
  payment: 'الدفعة',
  principal: 'الأصل',
  interest: 'الفائدة',
  balance: 'الرصيد',
  morePayments: 'دفعات إضافية',

  // VAN Calculator
  vanTitle: 'حاسبة القيمة الحالية الصافية',
  vanSubtitle: 'احسب الجدوى المالية لأي استثمار',
  investmentParameters: 'تفاصيل الاستثمار',
  initialInvestment: 'الاستثمار الأولي',
  discountRate: 'نسبة الخصم (%)',
  cashFlows: 'التدفقات النقدية',
  addYear: 'زيد عام',
  calculateVAN: 'احسب القيمة الحالية الصافية',
  calculatingVAN: 'جاري الحساب...',
  netPresentValue: 'صافي القيمة الحالية',
  profitableInvestment: 'استثمار مربح',
  notProfitable: 'مش مربح',
  profitabilityIndex: 'مؤشر الربحية',
  acceptable: 'مقبول',
  notAcceptable: 'غير مقبول',
  paybackPeriod: 'مدة الاسترجاع',
  cashFlowAnalysis: 'تحليل التدفقات النقدية',
  cashFlow: 'التدفق النقدي',
  presentValue: 'القيمة الحالية',
  cumulativeNPV: 'صافي القيمة التراكمي',
  initial: 'أولي',
  amount: 'المبلغ'
},

  
  fr: {
    // Header
    title: 'Calculateur d\'Amortissement',
    subtitle: 'Gestion Professionnelle des Actifs',
    description: 'Calculez l\'amortissement des actifs en utilisant trois méthodes puissantes : Linéaire, Dégressif, et Somme des Chiffres d\'Années.',
    description2: 'Obtenez des calendriers détaillés et exportez des rapports professionnels pour vos besoins commerciaux.',
    
    // Theme toggle
    toggleTheme: 'Basculer le thème',
    
    // Form
    formTitle: 'Calculateur d\'Amortissement',
    formSubtitle: 'Choisissez votre méthode et entrez les détails de l\'actif',
    selectMethod: 'Sélectionner la Méthode d\'Amortissement',
    selectMethodDescription: 'Choisissez la méthode d\'amortissement qui convient le mieux à votre type d\'actif',
    assetInformation: 'Informations sur l\'Actif',
    assetInformationDescription: 'Entrez les détails de votre actif pour le calcul d\'amortissement',
    
    // Methods
    linearMethod: 'Linéaire (Ligne Droite)',
    linearDescription: 'Amortissement annuel égal',
    decliningBalanceMethod: 'Dégressif',
    decliningBalanceDescription: 'Amortissement plus élevé au début',
    sumOfYearsDigitsMethod: 'Somme des Chiffres d\'Années',
    sumOfYearsDigitsDescription: 'Amortissement accéléré',
    progressiveMethod: 'Amortissement Progressif',
    progressiveDescription: 'Amortissement annuel croissant',
    
    // Form fields
    assetCost: 'Coût de l\'Actif',
    salvageValue: 'Valeur de Récupération',
    usefulLife: 'Durée d\'Utilité',
    decliningBalanceRate: 'Taux Dégressif',
    commonRates: 'Taux courants : 1,5 (150%), 2 (200%), 2,5 (250%)',
    optional: 'Optionnel',
    
    // Buttons
    calculateDepreciation: 'Calculer l\'Amortissement',
    calculatingDepreciation: 'Calcul de l\'Amortissement...',
    exportCSV: 'Exporter CSV',
    
    // Table headers
    year: 'Année',
    beginningValue: 'Valeur Initiale',
    depreciationExpense: 'Charge d\'Amortissement',
    accumulatedDepreciation: 'Amortissement Cumulé',
    endingValue: 'Valeur Finale',
    
    // Summary
    depreciationSchedule: 'Calendrier d\'Amortissement',
    method: 'Méthode',
    totalDepreciation: 'Amortissement Total',
    summaryReport: 'Rapport de Résumé',
    totalDepreciationPeriod: 'Période d\'Amortissement Totale',
    finalBookValue: 'Valeur Comptable Finale',
    averageAnnualDepreciation: 'Amortissement Annuel Moyen',
    years: 'années',
    
    // Loading
    calculatingSchedule: 'Calcul de votre calendrier d\'amortissement...',
    thisMayTakeMoment: 'Cela peut prendre un moment',
    
    // Footer
    professionalDepreciationCalculator: 'Calculateur d\'Amortissement Professionnel',
    builtWith: 'Construit avec React, TypeScript & Tailwind CSS',
    
    // Currency and units
    currency: 'DZD',
    currencyCode: 'DZD',
    percentage: '%',
    selectCurrency: 'Sélectionner la Devise',
    currencySettings: 'Paramètres de Devise',
    
    // App Navigation
    financialCalculators: 'Calculateurs Financiers',
    depreciationCalculator: 'Calculateur d\'Amortissement',
    loanCalculator: 'Calculateur de Prêt',
    vanCalculator: 'Calculateur VAN',
    
    // Loan Calculator
    loanTitle: 'Calculateur de Prêt',
    loanSubtitle: 'Calculez les paiements de prêt avec intérêt composé',
    loanParameters: 'Paramètres du Prêt',
    principalAmount: 'Montant Principal',
    annualInterestRate: 'Taux d\'Intérêt Annuel (%)',
    loanTerm: 'Durée du Prêt (Années)',
    paymentFrequency: 'Fréquence de Paiement',
    monthly: 'Mensuel',
    quarterly: 'Trimestriel',
    semiAnnually: 'Semi-Annuel',
    annually: 'Annuel',
    calculateLoan: 'Calculer le Prêt',
    calculatingLoan: 'Calcul en cours...',
    monthlyPayment: 'Paiement Mensuel',
    totalInterest: 'Intérêt Total',
    amortizationSchedule: 'Calendrier d\'Amortissement',
    payment: 'Paiement',
    principal: 'Principal',
    interest: 'Intérêt',
    balance: 'Solde',
    morePayments: 'paiements supplémentaires',
    
    // VAN Calculator
    vanTitle: 'Calculateur VAN',
    vanSubtitle: 'Calculez la Valeur Actuelle Nette pour l\'analyse d\'investissement',
    investmentParameters: 'Paramètres d\'Investissement',
    initialInvestment: 'Investissement Initial',
    discountRate: 'Taux d\'Actualisation (%)',
    cashFlows: 'Flux de Trésorerie',
    addYear: 'Ajouter une Année',
    calculateVAN: 'Calculer VAN',
    calculatingVAN: 'Calcul en cours...',
    netPresentValue: 'Valeur Actuelle Nette',
    profitableInvestment: 'Investissement Rentable',
    notProfitable: 'Non Rentable',
    profitabilityIndex: 'Indice de Rentabilité',
    acceptable: 'Acceptable',
    notAcceptable: 'Non Acceptable',
    paybackPeriod: 'Période de Récupération',
    cashFlowAnalysis: 'Analyse des Flux de Trésorerie',
    cashFlow: 'Flux de Trésorerie',
    presentValue: 'Valeur Actuelle',
    cumulativeNPV: 'VAN Cumulée',
    initial: 'Initial',
    amount: 'Montant'
  }
};
