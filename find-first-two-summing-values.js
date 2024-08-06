function findFirstTwoSummingValues(arr, sum) {
  return arr.reduce((result, item, index, array) => {
    const complement = sum - item;
    if (!result && array.slice(index + 1).includes(complement)) {
      return [item, complement];
    }
    return result;
  }, null);
}

console.log(findFirstTwoSummingValues([11, 3, 7, 5], 10));
