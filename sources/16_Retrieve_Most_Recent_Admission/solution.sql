SELECT * FROM admissions
WHERE patient_id = 542
GROUP BY patient_id
HAVING MAX(admission_date)