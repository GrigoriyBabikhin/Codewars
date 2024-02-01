function solution(a, b) {
    let s = '', l = '';//создали переменную.

    if (a.length > b.length) {//то b+a+b.
        l = a;
        s = b;
    } else {// в остальных случаях a+b+a.
        s = a;
        l = b;
    }
    return `${s}${l}${s}`//выводим строку.
}

console.log(solution('45','1'))
