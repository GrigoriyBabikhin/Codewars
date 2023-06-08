SELECT n, m, CASE WHEN n < 0 or m < 0 THEN 0 ELSE n * m END AS res
FROM paperwork;