/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8; // 1 day -> 8 hours
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @returns {number} the number of days
 * @param {number} budget
 * @param {number} ratePerHour
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays
 * @param {number} discount
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const DayRate = dayRate(ratePerHour),
      BillableDaysPerMonth = 22, // 1 month -> 22 billable days
      OneCompletedMonthRate = DayRate * BillableDaysPerMonth,
      AllCompletedMonthsCounts = Math.floor(numDays / BillableDaysPerMonth),
      RemainderDays = numDays - AllCompletedMonthsCounts * BillableDaysPerMonth;
  return Math.ceil((OneCompletedMonthRate - OneCompletedMonthRate * discount) *
      AllCompletedMonthsCounts + RemainderDays * DayRate);
}
