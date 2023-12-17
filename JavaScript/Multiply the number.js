//Джеку очень нравится его число пять: хитрость здесь в том, что вам нужно умножить
// каждое число на 5, возведенное в число цифр каждого числа.

function multiply(number) {  // Объявление функции "multiply" с параметром "number"
    let positiveNumber = Math.abs(number)  // Преобразование числа в положительное значение
    let numberOfDigits = positiveNumber.toString().length  // Получение количества цифр в числе
    return number * Math.pow(5, numberOfDigits)  // Возврат числа, умноженного на 5 в степени, равной количеству цифр в числе
}


