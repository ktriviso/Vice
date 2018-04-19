\c vice_db

DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  author TEXT,
  title TEXT,
  description TEXT
);
