INSERT INTO CONTACTS
VALUES (4, 'hacker', 'you', 'evilhacker@gmail.com', '054-275-4869', CURRENT_TIMESTAMP);

SELECT * FROM CONTACTS
WHERE contact_id = 4

DELETE FROM CONTACTS
WHERE contact_id = 4

SELECT * FROM CONTACTS
WHERE contact_id = 4