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
  let negativeNumbers = [];
  const sum = numbersArray.reduce((total, number) => {
    const currNumber = Number(number);
    if (currNumber < 0) {
      negativeNumbers.push(number);
    }

    return total + currNumber;
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return sum;
};
