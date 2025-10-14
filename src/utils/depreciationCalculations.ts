import type { DepreciationInputs, DepreciationYear, DepreciationResult } from '../types/depreciation';

// Tax coefficient table (جدول المعامل الضريبي) for declining balance method
const TAX_COEFFICIENTS: Record<number, number> = {
  3: 1.5,   // 3 years: 1.5 coefficient
  4: 1.5,   // 4 years: 1.5 coefficient  
  5: 2.0,   // 5 years: 2.0 coefficient
  6: 2.0,   // 6 years: 2.0 coefficient
  7: 2.0,   // 7 years: 2.0 coefficient
  8: 2.0,   // 8 years: 2.0 coefficient
  9: 2.0,   // 9 years: 2.0 coefficient
  10: 2.0,  // 10 years: 2.0 coefficient
  11: 2.0,  // 11 years: 2.0 coefficient
  12: 2.0,  // 12 years: 2.0 coefficient
  13: 2.0,  // 13 years: 2.0 coefficient
  14: 2.0,  // 14 years: 2.0 coefficient
  15: 2.0,  // 15 years: 2.0 coefficient
  16: 2.0,  // 16 years: 2.0 coefficient
  17: 2.0,  // 17 years: 2.0 coefficient
  18: 2.0,  // 18 years: 2.0 coefficient
  19: 2.0,  // 19 years: 2.0 coefficient
  20: 2.0   // 20+ years: 2.0 coefficient
};

function getTaxCoefficient(usefulLife: number): number {
  return TAX_COEFFICIENTS[usefulLife] || 2.0; // Default to 2.0 for other values
}

export function calculateLinearDepreciation(inputs: DepreciationInputs): DepreciationResult {
  const { assetCost, usefulLife, salvageValue = 0 } = inputs;
  // Formula: D = (C - S) / n
  const annualDepreciation = (assetCost - salvageValue) / usefulLife;
  const schedule: DepreciationYear[] = [];
  
  let accumulatedDepreciation = 0;
  
  for (let year = 1; year <= usefulLife; year++) {
    const beginningValue = assetCost - accumulatedDepreciation;
    const depreciationExpense = annualDepreciation;
    accumulatedDepreciation += depreciationExpense;
    const endingValue = assetCost - accumulatedDepreciation;
    
    schedule.push({
      year,
      beginningValue: Math.round(beginningValue * 100) / 100,
      depreciationExpense: Math.round(depreciationExpense * 100) / 100,
      accumulatedDepreciation: Math.round(accumulatedDepreciation * 100) / 100,
      endingValue: Math.round(endingValue * 100) / 100
    });
  }
  
  return {
    method: 'linear',
    inputs: { ...inputs, salvageValue },
    schedule,
    totalDepreciation: Math.round(accumulatedDepreciation * 100) / 100
  };
}

export function calculateDecliningBalanceDepreciation(inputs: DepreciationInputs): DepreciationResult {
  const { assetCost, usefulLife, decliningBalanceRate, salvageValue = 0 } = inputs;
  
  // Calculate straight-line depreciation rate
  const straightLineRate = 1 / usefulLife;
  
  // Get tax coefficient from table
  const taxCoefficient = decliningBalanceRate || getTaxCoefficient(usefulLife);
  
  // Calculate declining balance rate = Straight-Line Rate × Tax Coefficient
  const decliningRate = straightLineRate * taxCoefficient;
  
  const schedule: DepreciationYear[] = [];
  let accumulatedDepreciation = 0;
  let bookValue = assetCost;
  let remainingYears = usefulLife;
  let switchedToLinear = false;
  
  for (let year = 1; year <= usefulLife; year++) {
    const beginningValue = bookValue;
    let depreciationExpense = 0;
    
    if (!switchedToLinear) {
      // Calculate what declining balance depreciation would be
      const decliningDepreciation = bookValue * decliningRate;
      
      // Calculate what linear depreciation would be for remaining years
      const linearDepreciation = bookValue / remainingYears;
      
      // Switch to linear if declining balance would be less than linear
      // This ensures we don't switch too early
      if (decliningDepreciation < linearDepreciation) {
        switchedToLinear = true;
        depreciationExpense = linearDepreciation;
      } else {
        // Use declining balance method
        depreciationExpense = decliningDepreciation;
      }
    } else {
      // Already switched to linear method
      depreciationExpense = bookValue / remainingYears;
    }
    
    // Ensure we don't depreciate below salvage value
    if (bookValue - depreciationExpense < salvageValue) {
      depreciationExpense = bookValue - salvageValue;
    }
    
    // Ensure we don't have negative depreciation
    depreciationExpense = Math.max(0, depreciationExpense);
    
    accumulatedDepreciation += depreciationExpense;
    bookValue -= depreciationExpense;
    remainingYears--;
    
    schedule.push({
      year,
      beginningValue: Math.round(beginningValue * 100) / 100,
      depreciationExpense: Math.round(depreciationExpense * 100) / 100,
      accumulatedDepreciation: Math.round(accumulatedDepreciation * 100) / 100,
      endingValue: Math.round(bookValue * 100) / 100
    });
  }
  
  return {
    method: 'declining-balance',
    inputs: { ...inputs, salvageValue },
    schedule,
    totalDepreciation: Math.round(accumulatedDepreciation * 100) / 100
  };
}

export function calculateSumOfYearsDigitsDepreciation(inputs: DepreciationInputs): DepreciationResult {
  const { assetCost, usefulLife, salvageValue = 0 } = inputs;
  // Formula: SY = n(n+1)/2
  const sumOfYears = (usefulLife * (usefulLife + 1)) / 2;
  // Formula: total depreciable amount = C - S
  const totalDepreciableAmount = assetCost - salvageValue;
  const schedule: DepreciationYear[] = [];
  
  let accumulatedDepreciation = 0;
  let bookValue = assetCost;
  
  for (let year = 1; year <= usefulLife; year++) {
    const beginningValue = bookValue;
    // Formula: Dt = (n-t+1)/SY × (C-S)
    const remainingLife = usefulLife - year + 1;
    const depreciationExpense = (remainingLife / sumOfYears) * totalDepreciableAmount;
    
    accumulatedDepreciation += depreciationExpense;
    bookValue -= depreciationExpense;
    
    schedule.push({
      year,
      beginningValue: Math.round(beginningValue * 100) / 100,
      depreciationExpense: Math.round(depreciationExpense * 100) / 100,
      accumulatedDepreciation: Math.round(accumulatedDepreciation * 100) / 100,
      endingValue: Math.round(bookValue * 100) / 100
    });
  }
  
  return {
    method: 'sum-of-years-digits',
    inputs: { ...inputs, salvageValue },
    schedule,
    totalDepreciation: Math.round(accumulatedDepreciation * 100) / 100
  };
}

export function calculateProgressiveDepreciation(inputs: DepreciationInputs): DepreciationResult {
  const { assetCost, usefulLife, salvageValue = 0 } = inputs;
  
  // Calculate sum of years digits: ∑N = 1 + 2 + ... + N = N(N+1)/2
  const sumOfYears = (usefulLife * (usefulLife + 1)) / 2;
  
  // Total depreciable amount (المبلغ القابل للإهتالك)
  const totalDepreciableAmount = assetCost - salvageValue;
  
  const schedule: DepreciationYear[] = [];
  let accumulatedDepreciation = 0;
  let bookValue = assetCost;
  
  for (let year = 1; year <= usefulLife; year++) {
    const beginningValue = bookValue;
    
    // Progressive depreciation rate for each year = year number / sum of years
    // معدل الإهتالك المتزايد لكل سنة = السنة رقم / مجموع أرقام سنوات المدة النفعية
    const progressiveRate = year / sumOfYears;
    
    // Annual depreciation expense = progressive rate × total depreciable amount
    // قسط الإهتالك السنوي = معدل الإهتالك المتزايد × المبلغ القابل للإهتالك
    const depreciationExpense = progressiveRate * totalDepreciableAmount;
    
    accumulatedDepreciation += depreciationExpense;
    bookValue = assetCost - accumulatedDepreciation;
    
    schedule.push({
      year,
      beginningValue: Math.round(beginningValue * 100) / 100,
      depreciationExpense: Math.round(depreciationExpense * 100) / 100,
      accumulatedDepreciation: Math.round(accumulatedDepreciation * 100) / 100,
      endingValue: Math.round(bookValue * 100) / 100
    });
  }
  
  return {
    method: 'progressive',
    inputs: { ...inputs, salvageValue },
    schedule,
    totalDepreciation: Math.round(accumulatedDepreciation * 100) / 100
  };
}

export function calculateDepreciation(inputs: DepreciationInputs): DepreciationResult {
  switch (inputs.method) {
    case 'linear':
      return calculateLinearDepreciation(inputs);
    case 'declining-balance':
      return calculateDecliningBalanceDepreciation(inputs);
    case 'sum-of-years-digits':
      return calculateSumOfYearsDigitsDepreciation(inputs);
    case 'progressive':
      return calculateProgressiveDepreciation(inputs);
    default:
      throw new Error('Invalid depreciation method');
  }
}
