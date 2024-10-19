export const formatExpiryDate = (event: any) => {
  const value = event.target.value;

  if (!value) return value;

  // Remove all non-digit characters
  const cleanedValue = value.replace(/[^\d]/g, '');

  // Format the value as MM/YY
  if (cleanedValue.length <= 2) {
    return cleanedValue; // Just the month
  }
  return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}`; // MM/YY
};
