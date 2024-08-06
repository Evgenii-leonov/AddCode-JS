function arrayToString(arr) {
    return arr.join(',');
}


console.log(`${arrayToString([1, 2, 3, 4])} , ${typeof(arrayToString([1, 2, 3, 4]))}`);