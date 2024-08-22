export const add = (numbers) => {
  if (numbers.trim() === "") {
    return 0;
  }

  const numbersArray = numbers.split(",");
  const sum = numbersArray.reduce((total, number) => total + Number(number), 0);

  return sum;
};
