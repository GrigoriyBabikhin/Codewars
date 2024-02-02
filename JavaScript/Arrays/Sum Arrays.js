//Напишите функцию, которая принимает массив чисел и возвращает
//сумму чисел. Числа могут быть отрицательными или нецелыми.
//Если массив не содержит чисел, вам следует вернуть 0.


//мое решение
/*function sum(numbers) {
    "use strict";
    let result = 0

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result
};
console.log(sum([1, -2, 9, 7.5, 0, 3]))*/


//лучшее решение

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([1, -2, 9, 7.5, 0, 3]))