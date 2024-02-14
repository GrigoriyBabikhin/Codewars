//Переданные параметры равны (2, 6), функция должна вернуть результат [2, 4, 6],
// поскольку 2, 4 и 6 кратны числам от 2 до 6.

//Первое решение
// function findMultiples(integer, limit) {
//   const arr = [];
//     for (let i = integer; i <= limit; i++){
//       if(i % integer === 0) {
//         arr.push(i)}
//     }
//     return arr
// }
//
// console.log(findMultiples(4, 27))//[ 4, 8, 12, 16, 20, 24 ]

//лучшее решение
// function findMultiples(int,limit){
//     let result = []
//
//     for (let i = int; i<=limit ; i+=int)
//         result.push(i)
//
//     return result
// }
// console.log(findMultiples(4, 27))