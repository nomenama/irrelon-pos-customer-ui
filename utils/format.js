/**
 * Display the number with two digits
 * @param {string | number} number
 * @returns {string}
 */
export const twoDecimals = number => parseFloat(number).toFixed(2);