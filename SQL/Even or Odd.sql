SELECT
  *, -- Выбираем все столбцы из таблицы numbers
  CASE
    WHEN number % 2 = 0 THEN 'Even' -- Если число четное, присваиваем столбцу is_even значение "Even"
    ELSE 'Odd' -- Если число нечетное, присваиваем столбцу is_even значение "Odd"
  END AS is_even -- Назначаем алиас "is_even" для CASE выражения
FROM
  numbers; -- Выбираем данные из таблицы numbers