// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const strNumber1 = Number(String(array1).replaceAll(",", "")),
      strNumber2 = Number(String(array2).replaceAll(",", ""));
  return strNumber1 + strNumber2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const strOfValue = String(value);
  let reversedStr = "";
  for (let i = strOfValue.length - 1; i >= 0; i--) {
    reversedStr += strOfValue[i];
  }
  return strOfValue === reversedStr;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === "") {
    return "Required field";
  }
  const number = Number(input);
  if (Number.isNaN(number) || number === 0) {
    return "Must be a number besides 0";
  }
  return "";
}
