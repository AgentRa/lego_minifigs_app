const generateUniqueRandomNumber = (existingNumbers: Set<number>) => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 423) + 1;
  } while (existingNumbers.has(randomNumber));

  return randomNumber;
};

const generateUniqueRandomArray = (length: number) => {
  const uniqueNumbers: Set<number> = new Set();
  const resultArray: number[] = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = generateUniqueRandomNumber(uniqueNumbers);
    uniqueNumbers.add(randomNumber);
    resultArray.push(randomNumber);
  }
  return resultArray;
};

export { generateUniqueRandomArray }
