const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const mergedArray1 = [...firstArray, ...secondArray];
const mergedArray2 = firstArray.concat(secondArray);

console.log(mergedArray1);
console.log(mergedArray2);
