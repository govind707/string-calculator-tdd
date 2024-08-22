export const add = (numbers) => {
  let numberString = numbers.trim();

  if (numberString === "") {
    return 0;
  }

  let delimiter = ",";

  if (numberString.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numberString.substring(2, delimiterEndIndex);
    numberString = numberString.substring(delimiterEndIndex + 1);
  }

  const numbersArray = numberString.replace(/\n/g, delimiter).split(delimiter);
  const sum = numbersArray.reduce(
    (total, number) => total + (Number(number) || 0),
    0
  );

  return sum;
};
