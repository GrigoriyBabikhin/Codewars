function solution(start, finish) {
  // Объявление функции с двумя параметрами: start и finish
  if (start > 0 && finish > 0) {
    // Проверяем, что и start, и finish больше нуля
    return Math.floor(((finish - start) % 3) + (finish - start) / 3); // Рассчитываем количество шагов для достижения значения finish от значения start
  }
}
console.log(solution(772, 1141)); // Вызываем функцию solution с аргументами 1 и 5 и выводим результат в консоль
