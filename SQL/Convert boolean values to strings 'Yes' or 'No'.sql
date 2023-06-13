-- дана таблица 'booltoword' со столбцом 'bool',верните таблицу со столбцом 'bool' и ваш результат в столбце с именем 'res'.
SELECT bool,
    CASE
        WHEN bool = true THEN 'Yes'
        ELSE 'No'
    END AS res
FROM
    booltoword;