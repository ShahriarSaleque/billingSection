export const formatCardNumber = (event: any) => {
  const inputValue = event.target.value;
  if (!inputValue) {
    return;
  }

  const cardNumber = inputValue.replace(/[^\d]/g, '');
  const cardNumberChunks = cardNumber.match(/.{1,4}/g);
  return cardNumberChunks ? cardNumberChunks.join(' ') : cardNumber;
};
