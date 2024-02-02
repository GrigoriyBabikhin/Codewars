//Кто помнит свое время на школьном дворе, когда девочки брали цветок и рвали
// его лепестки, произнося каждую из следующих фраз каждый раз, когда отрывали лепесток:
/*1-"I love you"
2- "a little"
3- "a lot"
4- "passionately"
5- "madly"
6- "not at all"*/
//Ваша цель в этом ката — определить, какую фразу сказали бы девушки на последнем лепестке
// цветка с заданным количеством лепестков. Количество лепестков всегда больше 0.

//Мое решение
/*function howMuchILoveYou(nbPetals) {
    switch (nbPetals % 6) {
        case 1:
            return "I love you";
            break;
        case 2:
            return "a little";
            break;
        case 3:
            return "a lot";
            break;
        case 4:
            return "passionately";
            break;
        case 5:
            return "madly";
            break;
        case 6:
            return "not at all"
            break;
        default:
            return "not at all"
    }
}

console.log(howMuchILoveYou(6))*/



// лучшее решение
// Задаем массив фраз, которые будут возвращаться в зависимости от значения n
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

// Определяем функцию howMuchILoveYou, которая возвращает соответствующую фразу из массива

function howMuchILoveYou(n) {
    // Используем остаток от деления на длину массива, чтобы обеспечить циклическое возвращение фраз
    return phrases[(n - 1) % phrases.length];
}

// Пример использования функции
console.log(howMuchILoveYou(7)); // Вывод: "I love you"
console.log(howMuchILoveYou(8)); // Вывод: "a little"
console.log(howMuchILoveYou(15)); // Вывод: "a lot"
