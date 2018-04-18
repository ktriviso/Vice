\c books_server_db

DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  content TEXT,
  author TEXT,
  genre_id INT
);
