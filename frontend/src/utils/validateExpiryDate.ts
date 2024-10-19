// Function to validate if the expiry date is not in the past
export const validateExpiryDate = (value: any) => {
  if (!value) return false;

  const [month, year] = value.split('/');
  if (!month || !year) return false;

  // Get current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() is 0-indexed, so add 1
  const currentYear = currentDate.getFullYear() % 100; // Get last two digits of year

  // Convert the input values to numbers
  const expiryMonth = parseInt(month, 10);
  const expiryYear = parseInt(year, 10);

  // Check if the input month is between 1 and 12
  if (expiryMonth < 1 || expiryMonth > 12) {
    return false;
  }

  // Check if the expiry year and month are in the future
  if (
    expiryYear < currentYear ||
    (expiryYear === currentYear && expiryMonth < currentMonth)
  ) {
    return false;
  }

  return true;
};
