select id,
       CAST(CASE WHEN n % x = 0 AND n % y = 0 THEN 1 ELSE 0 END AS BOOLEAN)
       AS res
from kata