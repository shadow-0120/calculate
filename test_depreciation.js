// Test file to verify depreciation calculations match the provided examples
// C = 100,000; S = 0; n = 5

// Import the functions (we'll need to adjust this for the actual module system)
const { 
  calculateLinearDepreciation, 
  calculateDecliningBalanceDepreciation, 
  calculateSumOfYearsDigitsDepreciation 
} = require('./src/utils/depreciationCalculations.ts');

// Test data: C = 100,000; S = 0; n = 5
const testInputs = {
  assetCost: 100000,
  salvageValue: 0,
  usefulLife: 5,
  method: 'linear',
  decliningBalanceRate: 2
};

console.log('=== TESTING DEPRECIATION CALCULATIONS ===');
console.log('Input: C = 100,000; S = 0; n = 5');
console.log('');

// Test Linear Depreciation
console.log('1. LINEAR DEPRECIATION');
console.log('Expected: D = 100,000 / 5 = 20,000 per year');
console.log('Expected Book Values: 80,000 → 60,000 → 40,000 → 20,000 → 0');
console.log('');

try {
  const linearResult = calculateLinearDepreciation({ ...testInputs, method: 'linear' });
  console.log('Actual Results:');
  linearResult.schedule.forEach(year => {
    console.log(`Year ${year.year}: Beginning=${year.beginningValue}, Depreciation=${year.depreciationExpense}, Ending=${year.endingValue}`);
  });
  console.log(`Total Depreciation: ${linearResult.totalDepreciation}`);
  console.log('');
} catch (error) {
  console.log('Error testing linear depreciation:', error.message);
}

// Test Declining Balance (DDB)
console.log('2. DECLINING BALANCE (DDB)');
console.log('Expected: r = 2/5 = 0.4');
console.log('Expected: Year1: 40,000; Year2: 24,000; Year3: 14,400; Year4: 8,640; Year5: 5,184');
console.log('');

try {
  const ddbResult = calculateDecliningBalanceDepreciation({ ...testInputs, method: 'declining-balance' });
  console.log('Actual Results:');
  ddbResult.schedule.forEach(year => {
    console.log(`Year ${year.year}: Beginning=${year.beginningValue}, Depreciation=${year.depreciationExpense}, Ending=${year.endingValue}`);
  });
  console.log(`Total Depreciation: ${ddbResult.totalDepreciation}`);
  console.log('');
} catch (error) {
  console.log('Error testing declining balance:', error.message);
}

// Test Sum of Years Digits
console.log('3. SUM OF YEARS DIGITS');
console.log('Expected: SY = 5(5+1)/2 = 15');
console.log('Expected: Year1: 30,000; Year2: 24,000; Year3: 18,000; Year4: 12,000; Year5: 6,000');
console.log('');

try {
  const sydResult = calculateSumOfYearsDigitsDepreciation({ ...testInputs, method: 'sum-of-years-digits' });
  console.log('Actual Results:');
  sydResult.schedule.forEach(year => {
    console.log(`Year ${year.year}: Beginning=${year.beginningValue}, Depreciation=${year.depreciationExpense}, Ending=${year.endingValue}`);
  });
  console.log(`Total Depreciation: ${sydResult.totalDepreciation}`);
  console.log('');
} catch (error) {
  console.log('Error testing sum of years digits:', error.message);
}

