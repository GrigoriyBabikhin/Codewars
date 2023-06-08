SELECT
    a,
    b,
    CAST(ROUND(CASE
        WHEN (b - a) % 3 = 0 THEN (b - a) / 3
        ELSE ((b - a) / 3.0) + 1
    END) AS INT) AS res
FROM
    jumps;