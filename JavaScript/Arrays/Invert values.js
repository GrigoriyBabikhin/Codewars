//Учитывая набор чисел, верните аддитивную обратную величину каждого из них.
//Каждое положительное становится отрицательным, а отрицательное становится положительным.

//мое первое решение
// function invert(array) {
//     return array.map((n) => {
//         if (n < 0) {
//             return Math.abs(n);
//         } else {
//             return n * -1
//         }
//     })
// }

//мое решение с тернарным оператором
// function invert(array) {
//     return array.map((n) => n < 0 ? Math.abs(n) : n * -1)
// }
// console.log([1, -2, 3, -4, 5])
// console.log(invert([0]))

//Можно просто вернуть число с минусом.
function invert(array) {
    return array.map((n) => -n)
}
console.log([1, -2, 3, -4, 5])
console.log(invert([1, -2, 3, -4, 5]))
