//функция принимает 2 аргумента и возвращает количество букв.

//Мое решение
// function strCount(str, letter) {
//     let arr = [];
//     const strArray = str.split('');
//     for (let i = 0; i < strArray.length; i++) {
//         if (strArray[i] === letter) {
//             arr.push(i)
//         }
//     }
//     return arr.length
// }

//Можно и не переводить в массив.
// function strCount(str, letter) {
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             arr.push(i)
//         }
//     }
//     return arr.length
// }

function strCount(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter)
            count++;
    }
    return count;
}

console.log(strCount('Hello', 'l'))