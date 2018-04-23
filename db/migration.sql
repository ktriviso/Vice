-- \c vice_db

DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reference;

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  author TEXT,
  title TEXT,
  description TEXT,
  url TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE reference (
    user_id INT,
    article_id INT
);
