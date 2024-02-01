function paperwork(n, m) {
  if (n < 0 || m < 0) {
    // Проверяем, что n и m больше или равны нулю
    return 0; // Если n или m меньше нуля, возвращаем 0
  }
  return n * m; // Возвращаем результат умножения n на m
}

console.log(paperwork(5, 0)); // Вывод: 0, так как m равно 0
console.log(paperwork(5, 5)); // Вывод: 25, так как n и m равны 5
