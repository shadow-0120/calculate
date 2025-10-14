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
    currency: 'USD',
    currencyCode: 'USD',
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
    year: 'Year',
    amount: 'Amount',
    description: 'Description'
  },
  
  ar: {
    // Header
    title: 'حاسبة الإهتلاك',
    subtitle: 'إدارة الأصول المهنية',
    description: 'احسب إهتلاك الأصول باستخدام ثلاث طرق :الاهتلاك الخطي  والرصيد المتناقص،  و المتزايد   .',
    description2: 'احصل على جداول مفصلة وقم بتصدير التقارير المهنية لاحتياجات عملك.',
    
    // Theme toggle
    toggleTheme: 'تبديل المظهر',
    
    // Form
    formTitle: 'حاسبة الإهتلاك',
    formSubtitle: 'اختر طريقتك وأدخل تفاصيل الأصل',
    selectMethod: 'اختر طريقة الإهتلاك',
    selectMethodDescription: 'اختر طريقة الإهلاك التي تناسب نوع أصلك',
    assetInformation: 'معلومات الأصل',
    assetInformationDescription: 'أدخل تفاصيل أصلك لحساب الإهلاك',
    
    // Methods
    linearMethod: 'الإهتلاك الخطي',
    linearDescription: 'إهلاك سنوي متساوٍ',
    decliningBalanceMethod: 'الإهتلاك المتناقص',
    decliningBalanceDescription: 'إهلاك أعلى في البداية',
    sumOfYearsDigitsMethod: 'الإهتلاك المتزايد (طريقة مجموع الأرقام)',
    sumOfYearsDigitsDescription: 'إهلاك متسارع',
    progressiveMethod: 'الإهتلاك المتزايد',
    progressiveDescription: 'إهلاك سنوي متزايد',
    
    // Form fields
    assetCost: 'تكلفة الأصل',
    salvageValue: 'قيمة الإنقاذ',
    usefulLife: 'العمر الإنتاجي',
    decliningBalanceRate: 'معدل الرصيد المتناقص',
    commonRates: 'المعدلات الشائعة: 1.5 (150%)، 2 (200%)، 2.5 (250%)',
    optional: 'اختياري',
    
    // Buttons
    calculateDepreciation: 'حساب الإهلاك',
    calculatingDepreciation: 'جاري حساب الإهلاك...',
    exportCSV: 'تصدير CSV',
    
    // Table headers
    year: 'السنة',
    beginningValue: 'القيمة الابتدائية',
    depreciationExpense: 'مصروف الإهلاك',
    accumulatedDepreciation: 'الإهلاك المتراكم',
    endingValue: 'القيمة النهائية',
    
    // Summary
    depreciationSchedule: 'جدول الإهلاك',
    method: 'الطريقة',
    totalDepreciation: 'إجمالي الإهلاك',
    summaryReport: 'تقرير ملخص',
    totalDepreciationPeriod: 'فترة الإهلاك الإجمالية',
    finalBookValue: 'القيمة الدفترية النهائية',
    averageAnnualDepreciation: 'متوسط الإهلاك السنوي',
    years: 'سنوات',
    
    // Loading
    calculatingSchedule: 'جاري حساب جدول الإهلاك...',
    thisMayTakeMoment: 'قد يستغرق هذا لحظة',
    
    // Footer
    professionalDepreciationCalculator: 'حاسبة الإهلاك المهنية',
    builtWith: 'مبني بـ React و TypeScript و Tailwind CSS',
    
    // Currency and units
    currency: 'دولار أمريكي',
    currencyCode: 'USD',
    percentage: '%',
    selectCurrency: 'اختر العملة',
    currencySettings: 'إعدادات العملة',
    
    // App Navigation
    financialCalculators: 'الحاسبات المالية',
    depreciationCalculator: 'حاسبة الإهتلاك',
    loanCalculator: 'حاسبة القروض',
    vanCalculator: 'حاسبة القيمة الحالية الصافية',
    
    // Loan Calculator
    loanTitle: 'حاسبة القروض',
    loanSubtitle: 'احسب أقساط القروض مع الفائدة المركبة',
    loanParameters: 'معايير القرض',
    principalAmount: 'مبلغ القرض الأساسي',
    annualInterestRate: 'معدل الفائدة السنوي (%)',
    loanTerm: 'مدة القرض (سنوات)',
    paymentFrequency: 'تكرار الدفع',
    monthly: 'شهري',
    quarterly: 'ربع سنوي',
    semiAnnually: 'نصف سنوي',
    annually: 'سنوي',
    calculateLoan: 'حساب القرض',
    calculatingLoan: 'جاري الحساب...',
    monthlyPayment: 'الدفعة الشهرية',
    totalInterest: 'إجمالي الفائدة',
    amortizationSchedule: 'جدول تسديد القرض',
    payment: 'الدفعة',
    principal: 'الأصل',
    interest: 'الفائدة',
    balance: 'الرصيد',
    morePayments: 'دفعات أخرى',
    
    // VAN Calculator
    vanTitle: 'حاسبة القيمة الحالية الصافية',
    vanSubtitle: 'احسب صافي القيمة الحالية لتحليل الاستثمار',
    investmentParameters: 'معايير الاستثمار',
    initialInvestment: 'الاستثمار الأولي',
    discountRate: 'معدل الخصم (%)',
    cashFlows: 'التدفقات النقدية',
    addYear: 'إضافة سنة',
    calculateVAN: 'حساب القيمة الحالية الصافية',
    calculatingVAN: 'جاري الحساب...',
    netPresentValue: 'صافي القيمة الحالية',
    profitableInvestment: 'استثمار مربح',
    notProfitable: 'غير مربح',
    profitabilityIndex: 'مؤشر الربحية',
    acceptable: 'مقبول',
    notAcceptable: 'غير مقبول',
    paybackPeriod: 'فترة الاسترداد',
    cashFlowAnalysis: 'تحليل التدفق النقدي',
    cashFlow: 'التدفق النقدي',
    presentValue: 'القيمة الحالية',
    cumulativeNPV: 'صافي القيمة الحالية المتراكم',
    initial: 'أولي',
    year: 'السنة',
    amount: 'المبلغ',
    description: 'الوصف'
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
    currency: 'USD',
    currencyCode: 'USD',
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
    year: 'Année',
    amount: 'Montant',
    description: 'Description'
  }
};
