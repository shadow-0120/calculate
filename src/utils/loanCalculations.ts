/**
 * Algerian Banking Standard Loan Calculations
 * Based on international compound interest laws with Algerian banking adjustments
 */

export interface LoanInputs {
  principal: number;
  annualRate: number;
  termYears: number;
  paymentFrequency: 'monthly' | 'quarterly' | 'semi-annually' | 'annually';
}

export interface LoanResult {
  monthlyPayment: number;
  totalPayments: number;
  totalInterest: number;
  amortizationSchedule: Array<{
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

/**
 * Algerian Banking Standard: Compound Interest Law
 * A = P × (1 + r/n)^(n×t)
 * where:
 * A: Total amount after term
 * P: Principal amount (borrowed capital)
 * r: Annual interest rate declared by bank
 * n: Number of compounding periods per year (usually 12 for monthly)
 * t: Number of years
 */
export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  termYears: number,
  compoundingFrequency: number = 12
): number {
  const periodicRate = annualRate / 100 / compoundingFrequency;
  const totalPeriods = termYears * compoundingFrequency;
  
  return principal * Math.pow(1 + periodicRate, totalPeriods);
}

/**
 * Algerian Banking Standard: Amortized Loan Formula
 * PMT = P × rm / (1 - (1 + rm)^(-N))
 * where:
 * PMT: Monthly payment amount
 * P: Original loan amount
 * rm = r/12: Monthly interest rate
 * N = 12 × t: Total number of months
 */
export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  termYears: number,
  paymentFrequency: 'monthly' | 'quarterly' | 'semi-annually' | 'annually'
): number {
  const paymentsPerYear = {
    'monthly': 12,
    'quarterly': 4,
    'semi-annually': 2,
    'annually': 1
  }[paymentFrequency];

  const totalPayments = termYears * paymentsPerYear;
  const periodicRate = annualRate / 100 / paymentsPerYear;

  // PMT = P × rm / (1 - (1 + rm)^(-N))
  return principal * 
    (periodicRate * Math.pow(1 + periodicRate, totalPayments)) / 
    (Math.pow(1 + periodicRate, totalPayments) - 1);
}

/**
 * Algerian Banking Standard: Remaining Balance Formula
 * Bk = P(1 + rm)^k - PMT × ((1 + rm)^k - 1) / rm
 * where:
 * Bk: Remaining balance after k months
 * P: Original loan amount
 * rm: Monthly interest rate
 * PMT: Monthly payment
 * k: Number of payments made
 */
export function calculateRemainingBalance(
  principal: number,
  monthlyPayment: number,
  monthlyRate: number,
  paymentsMade: number
): number {
  const k = paymentsMade;
  const remainingBalance = principal * Math.pow(1 + monthlyRate, k) - 
    monthlyPayment * (Math.pow(1 + monthlyRate, k) - 1) / monthlyRate;
  
  return Math.max(0, remainingBalance);
}

/**
 * Calculate complete loan amortization using Algerian banking standards
 */
export function calculateAlgerianLoan(inputs: LoanInputs): LoanResult {
  const { principal, annualRate, termYears, paymentFrequency } = inputs;
  
  // Calculate payment frequency per year
  const paymentsPerYear = {
    'monthly': 12,
    'quarterly': 4,
    'semi-annually': 2,
    'annually': 1
  }[paymentFrequency];

  const totalPayments = termYears * paymentsPerYear;
  const periodicRate = annualRate / 100 / paymentsPerYear;

  // Calculate monthly payment using Algerian formula
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termYears, paymentFrequency);

  // Generate amortization schedule using Algerian banking formulas
  const amortizationSchedule = [];
  let balance = principal;

  for (let i = 0; i < totalPayments; i++) {
    const interestPayment = balance * periodicRate;
    const principalPayment = monthlyPayment - interestPayment;
    
    // Update balance by subtracting principal payment
    balance = Math.max(0, balance - principalPayment);

    amortizationSchedule.push({
      payment: i + 1,
      principal: principalPayment,
      interest: interestPayment,
      balance: balance
    });
  }

  // Calculate total interest for amortized loan
  // Total Interest = (Monthly Payment × Total Payments) - Principal
  const totalInterest = monthlyPayment * totalPayments - principal;

  return {
    monthlyPayment,
    totalPayments,
    totalInterest,
    amortizationSchedule
  };
}

/**
 * Calculate interest amount using Algerian compound interest law
 * I = A - P
 */
export function calculateTotalInterest(
  principal: number,
  annualRate: number,
  termYears: number,
  compoundingFrequency: number = 12
): number {
  const totalAmount = calculateCompoundInterest(principal, annualRate, termYears, compoundingFrequency);
  return totalAmount - principal;
}
