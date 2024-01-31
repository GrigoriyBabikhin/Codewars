/*
Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
Пример [1,-4,7,12]=>1 + 7 + 12 = 20
Примечание. Если суммировать нечего, сумма по умолчанию равна 0.*/

function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > 0) {
            result += arr[i]
        }
    }
    return result;
}

console.log(positiveSum([1, 2, -3, 4, 5]))
