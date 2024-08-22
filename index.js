export const add = (numbers) => {
  if (numbers.trim() === "") {
    return 0;
  }

  return Number(numbers);
};
