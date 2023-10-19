--Напишите оператор выбора, который берет данные nameиз person таблицы и возвращает
--"Hello, <name> how are you doing today?"результаты в столбец с именем greeting
--
--Функция CONCAT() в SQL используется для объединения (конкатенации) двух или более строк в одну строку.

SELECT CONCAT('Hello, ',name,' how are you doing today?')
AS greeting
FROM person;