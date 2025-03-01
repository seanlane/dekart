export const snowflakeKeywords = [
  // Reserved Keywords
  { name: 'ACCOUNT', value: 'ACCOUNT', meta: 'keyword' },
  { name: 'ALL', value: 'ALL', meta: 'keyword' },
  { name: 'ALTER', value: 'ALTER', meta: 'keyword' },
  { name: 'AND', value: 'AND', meta: 'keyword' },
  { name: 'ANY', value: 'ANY', meta: 'keyword' },
  { name: 'AS', value: 'AS', meta: 'keyword' },
  { name: 'BETWEEN', value: 'BETWEEN', meta: 'keyword' },
  { name: 'BY', value: 'BY', meta: 'keyword' },
  { name: 'CASE', value: 'CASE', meta: 'keyword' },
  { name: 'CAST', value: 'CAST', meta: 'keyword' },
  { name: 'CHECK', value: 'CHECK', meta: 'keyword' },
  { name: 'COLUMN', value: 'COLUMN', meta: 'keyword' },
  { name: 'CONNECT', value: 'CONNECT', meta: 'keyword' },
  { name: 'CONSTRAINT', value: 'CONSTRAINT', meta: 'keyword' },
  { name: 'CREATE', value: 'CREATE', meta: 'keyword' },
  { name: 'CROSS', value: 'CROSS', meta: 'keyword' },
  { name: 'CURRENT', value: 'CURRENT', meta: 'keyword' },
  { name: 'CURRENT_DATE', value: 'CURRENT_DATE', meta: 'keyword' },
  { name: 'CURRENT_TIME', value: 'CURRENT_TIME', meta: 'keyword' },
  { name: 'CURRENT_TIMESTAMP', value: 'CURRENT_TIMESTAMP', meta: 'keyword' },
  { name: 'CURRENT_USER', value: 'CURRENT_USER', meta: 'keyword' },
  { name: 'DATABASE', value: 'DATABASE', meta: 'keyword' },
  { name: 'DELETE', value: 'DELETE', meta: 'keyword' },
  { name: 'DISTINCT', value: 'DISTINCT', meta: 'keyword' },
  { name: 'DROP', value: 'DROP', meta: 'keyword' },
  { name: 'ELSE', value: 'ELSE', meta: 'keyword' },
  { name: 'EXISTS', value: 'EXISTS', meta: 'keyword' },
  { name: 'FALSE', value: 'FALSE', meta: 'keyword' },
  { name: 'FOLLOWING', value: 'FOLLOWING', meta: 'keyword' },
  { name: 'FOR', value: 'FOR', meta: 'keyword' },
  { name: 'FROM', value: 'FROM', meta: 'keyword' },
  { name: 'FULL', value: 'FULL', meta: 'keyword' },
  { name: 'GRANT', value: 'GRANT', meta: 'keyword' },
  { name: 'GROUP', value: 'GROUP', meta: 'keyword' },
  { name: 'HAVING', value: 'HAVING', meta: 'keyword' },
  { name: 'ILIKE', value: 'ILIKE', meta: 'keyword' },
  { name: 'IN', value: 'IN', meta: 'keyword' },
  { name: 'INCREMENT', value: 'INCREMENT', meta: 'keyword' },
  { name: 'INNER', value: 'INNER', meta: 'keyword' },
  { name: 'INSERT', value: 'INSERT', meta: 'keyword' },
  { name: 'INTERSECT', value: 'INTERSECT', meta: 'keyword' },
  { name: 'INTO', value: 'INTO', meta: 'keyword' },
  { name: 'IS', value: 'IS', meta: 'keyword' },
  { name: 'JOIN', value: 'JOIN', meta: 'keyword' },
  { name: 'LATERAL', value: 'LATERAL', meta: 'keyword' },
  { name: 'LEFT', value: 'LEFT', meta: 'keyword' },
  { name: 'LIKE', value: 'LIKE', meta: 'keyword' },
  { name: 'LOCALTIME', value: 'LOCALTIME', meta: 'keyword' },
  { name: 'LOCALTIMESTAMP', value: 'LOCALTIMESTAMP', meta: 'keyword' },
  { name: 'MINUS', value: 'MINUS', meta: 'keyword' },
  { name: 'NATURAL', value: 'NATURAL', meta: 'keyword' },
  { name: 'NOT', value: 'NOT', meta: 'keyword' },
  { name: 'NULL', value: 'NULL', meta: 'keyword' },
  { name: 'OF', value: 'OF', meta: 'keyword' },
  { name: 'ON', value: 'ON', meta: 'keyword' },
  { name: 'OR', value: 'OR', meta: 'keyword' },
  { name: 'ORDER', value: 'ORDER', meta: 'keyword' },
  { name: 'QUALIFY', value: 'QUALIFY', meta: 'keyword' },
  { name: 'REGEXP', value: 'REGEXP', meta: 'keyword' },
  { name: 'REVOKE', value: 'REVOKE', meta: 'keyword' },
  { name: 'RIGHT', value: 'RIGHT', meta: 'keyword' },
  { name: 'RLIKE', value: 'RLIKE', meta: 'keyword' },
  { name: 'ROW', value: 'ROW', meta: 'keyword' },
  { name: 'ROWS', value: 'ROWS', meta: 'keyword' },
  { name: 'SAMPLE', value: 'SAMPLE', meta: 'keyword' },
  { name: 'SCHEMA', value: 'SCHEMA', meta: 'keyword' },
  { name: 'SELECT', value: 'SELECT', meta: 'keyword' },
  { name: 'SET', value: 'SET', meta: 'keyword' },
  { name: 'SOME', value: 'SOME', meta: 'keyword' },
  { name: 'START', value: 'START', meta: 'keyword' },
  { name: 'TABLE', value: 'TABLE', meta: 'keyword' },
  { name: 'TABLESAMPLE', value: 'TABLESAMPLE', meta: 'keyword' },
  { name: 'THEN', value: 'THEN', meta: 'keyword' },
  { name: 'TO', value: 'TO', meta: 'keyword' },
  { name: 'TRIGGER', value: 'TRIGGER', meta: 'keyword' },
  { name: 'TRUE', value: 'TRUE', meta: 'keyword' },
  { name: 'TRY_CAST', value: 'TRY_CAST()', meta: 'keyword' },
  { name: 'UNION', value: 'UNION', meta: 'keyword' },
  { name: 'UNIQUE', value: 'UNIQUE', meta: 'keyword' },
  { name: 'UPDATE', value: 'UPDATE', meta: 'keyword' },
  { name: 'USING', value: 'USING', meta: 'keyword' },
  { name: 'VALUES', value: 'VALUES', meta: 'keyword' },
  { name: 'VIEW', value: 'VIEW', meta: 'keyword' },
  { name: 'WHEN', value: 'WHEN', meta: 'keyword' },
  { name: 'WHERE', value: 'WHERE', meta: 'keyword' },
  { name: 'WITH', value: 'WITH', meta: 'keyword' },
  { name: 'WITHIN GROUP', value: 'WITHIN GROUP', meta: 'keyword' },

  // General Functions
  { name: 'ABS', value: 'ABS()', meta: 'function' },
  { name: 'CEIL', value: 'CEIL()', meta: 'function' },
  { name: 'FLOOR', value: 'FLOOR()', meta: 'function' },
  { name: 'ROUND', value: 'ROUND()', meta: 'function' },
  { name: 'EXP', value: 'EXP()', meta: 'function' },
  { name: 'LOG', value: 'LOG()', meta: 'function' },
  { name: 'POWER', value: 'POWER()', meta: 'function' },
  { name: 'SQRT', value: 'SQRT()', meta: 'function' },

  // String Functions
  { name: 'CONCAT', value: 'CONCAT()', meta: 'function' },
  { name: 'UPPER', value: 'UPPER()', meta: 'function' },
  { name: 'LOWER', value: 'LOWER()', meta: 'function' },
  { name: 'LTRIM', value: 'LTRIM()', meta: 'function' },
  { name: 'RTRIM', value: 'RTRIM()', meta: 'function' },
  { name: 'TRIM', value: 'TRIM()', meta: 'function' },
  { name: 'SUBSTR', value: 'SUBSTR()', meta: 'function' },
  { name: 'REPLACE', value: 'REPLACE()', meta: 'function' },
  { name: 'REGEXP_REPLACE', value: 'REGEXP_REPLACE()', meta: 'function' },
  { name: 'REGEXP_LIKE', value: 'REGEXP_LIKE()', meta: 'function' },

  // Date/Time Functions
  { name: 'CURRENT_DATE', value: 'CURRENT_DATE()', meta: 'function' },
  { name: 'CURRENT_TIME', value: 'CURRENT_TIME()', meta: 'function' },
  { name: 'CURRENT_TIMESTAMP', value: 'CURRENT_TIMESTAMP()', meta: 'function' },
  { name: 'DATE_PART', value: 'DATE_PART()', meta: 'function' },
  { name: 'DATE_TRUNC', value: 'DATE_TRUNC()', meta: 'function' },
  { name: 'TIMESTAMPADD', value: 'TIMESTAMPADD()', meta: 'function' },
  { name: 'TIMESTAMPDIFF', value: 'TIMESTAMPDIFF()', meta: 'function' },

  // Geospatial (GIS) Functions
  { name: 'ST_GEOGFROMTEXT', value: 'ST_GEOGFROMTEXT()', meta: 'GIS function' },
  { name: 'ST_ASGEOJSON', value: 'ST_ASGEOJSON()', meta: 'GIS function' },
  { name: 'ST_DISTANCE', value: 'ST_DISTANCE()', meta: 'GIS function' },
  { name: 'ST_INTERSECTS', value: 'ST_INTERSECTS()', meta: 'GIS function' },
  { name: 'ST_BUFFER', value: 'ST_BUFFER()', meta: 'GIS function' },
  { name: 'ST_AREA', value: 'ST_AREA()', meta: 'GIS function' },
  { name: 'ST_CENTROID', value: 'ST_CENTROID()', meta: 'GIS function' },
  { name: 'ST_TRANSFORM', value: 'ST_TRANSFORM()', meta: 'GIS function' },
  { name: 'ST_CONTAINS', value: 'ST_CONTAINS()', meta: 'GIS function' },
  { name: 'ST_UNION', value: 'ST_UNION()', meta: 'GIS function' },
  { name: 'ST_MAKEPOINT', value: 'ST_MAKEPOINT()', meta: 'GIS function' },
  { name: 'ST_MAKELINE', value: 'ST_MAKELINE()', meta: 'GIS function' },
  { name: 'ST_MAKEPOLYGON', value: 'ST_MAKEPOLYGON()', meta: 'GIS function' },

  // H3 Functions
  { name: 'H3_FROMGEOGPOINT', value: 'H3_FROMGEOGPOINT()', meta: 'H3 function' },
  { name: 'H3_TOGEOGPOINT', value: 'H3_TOGEOGPOINT()', meta: 'H3 function' },
  { name: 'H3_TOCHILDREN', value: 'H3_TOCHILDREN()', meta: 'H3 function' },
  { name: 'H3_TOPARENT', value: 'H3_TOPARENT()', meta: 'H3 function' },
  { name: 'H3_TOCOORDS', value: 'H3_TOCOORDS()', meta: 'H3 function' },
  { name: 'H3_TOHEXSTRING', value: 'H3_TOHEXSTRING()', meta: 'H3 function' },
  { name: 'H3_FROMHEXSTRING', value: 'H3_FROMHEXSTRING()', meta: 'H3 function' },
  { name: 'H3_ISVALID', value: 'H3_ISVALID()', meta: 'H3 function' },
  { name: 'H3_GETRESOLUTION', value: 'H3_GETRESOLUTION()', meta: 'H3 function' },
  { name: 'H3_GETBASECELL', value: 'H3_GETBASECELL()', meta: 'H3 function' },
  { name: 'H3_DISTANCE', value: 'H3_DISTANCE()', meta: 'H3 function' },
  { name: 'H3_BOUNDARY', value: 'H3_BOUNDARY()', meta: 'H3 function' }
]
