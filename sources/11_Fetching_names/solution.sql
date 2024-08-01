SELECT name, albumid
FROM track
WHERE milliseconds > 300000
ORDER BY name ASC