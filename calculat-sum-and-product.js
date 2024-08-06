let sum = 0;
let multiply = 1;
let average,
mediana,
min,
max;

function calculateSumAndProduct(arr) {
    
    for (let i of arr) {
        sum += i;
        multiply *= i;
    }
   
    if (arr.length % 2 == 0) {
        average = Math.floor(sum / arr.length);
        mediana = Math.floor((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2);
    } else {
        average = Math.floor(sum / arr.length);
        mediana = arr[Math.floor(arr.length / 2)];
    }

    min  = Math.min(...arr);
    max  = Math.max(...arr);
   
}
calculateSumAndProduct([1, 2, 3, 4, 5]);


console.log(`Сумма: ${sum}, Произведение: ${multiply}, Среднее:${average} , Медиана: ${mediana}, Наименьшее: ${min}, Наибольшее ${max}`);