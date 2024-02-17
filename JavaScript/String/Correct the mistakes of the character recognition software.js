//проверить и исправить числа в тексте
//Ваша задача — исправить ошибки в оцифрованном тексте. Вам придется справиться только со следующими ошибками:
// S неправильно интерпретируется как5
// O неправильно интерпретируется как0
// I неправильно интерпретируется как1

//мое решение
// function correct(string) {
//     const arr = [];
//     for (let i = 0; i < string.length; i++)
//         if (string[i] === '5') arr.push('S')
//         else if (string[i] === '0') arr.push('O')
//         else if (string[i] === '1') arr.push('I')
//         else arr.push(string[i])
//     return arr.join('')
// }

//На кодварс мне это понравилось
// function correct(string) {
//     const map = {
//         0: "O",
//         1: "I",
//         5: "S"
//     };
//
//     return string
//         .split("")
//         .map(c => map.hasOwnProperty(c) ? map[c] : c)
//         .join("");
// }

//Лучшее решение кодеварс
function correct(string) {
    return string.replace(/0/g, "O")
        .replace(/5/g, "S")
        .replace(/1/g, "I");
}

console.log(correct("L0ND0N"))
console.log(correct("DUBL1N"))
console.log(correct("51NGAP0RE"))
