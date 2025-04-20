export function compareNumbersWithDifference(num1, num2) {
  const difference = num1 - num2;

  if (difference > 0) {
    return `+${difference}`;
  } else if (difference < 0) {
    return `-${Math.abs(difference)}`;
  } else {
    return "0";
  }
}
