SELECT first_name, last_name, height from patients where height = (SELECT max(height) from patients)