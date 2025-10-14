export type DepreciationMethod = 'linear' | 'declining-balance' | 'sum-of-years-digits' | 'progressive';

export interface DepreciationInputs {
  assetCost: number;
  salvageValue: number;
  usefulLife: number;
  method: DepreciationMethod;
  decliningBalanceRate?: number; // For declining balance method
}

export interface DepreciationYear {
  year: number;
  beginningValue: number;
  depreciationExpense: number;
  accumulatedDepreciation: number;
  endingValue: number;
}

export interface DepreciationResult {
  method: DepreciationMethod;
  inputs: DepreciationInputs;
  schedule: DepreciationYear[];
  totalDepreciation: number;
}
