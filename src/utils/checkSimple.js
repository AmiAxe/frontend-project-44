export default (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0 || number === 1) {
      return 'no';
    }
  }
  return 'yes';
};
