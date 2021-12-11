\c kuti

DROP TABLE customers CASCADE;
DROP TABLE sellers CASCADE;
DROP TABLE shipping_address CASCADE;
DROP TABLE sarees CASCADE;
DROP TABLE lahenga CASCADE;
DROP TABLE jwelery CASCADE;

CREATE TABLE customers
(
  username TEXT PRIMARY KEY CHECK (length(username) <= 25),
  password TEXT NOT NULL,
  fullName TEXT NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  is_seller BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE sellers
(
    username TEXT PRIMARY KEY CHECK (length(username) <= 25),
    password TEXT NOT NULL,
    fullName TEXT NOT NULL,
    business_name TEXT,
    business_address TEXT NOT NULL,
    business_city TEXT NOT NULL,
    business_state TEXT NOT NULL,
    business_zip_code TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email TEXT NOT NULL,
    paypal_email TEXT NOT NULL,
    is_seller BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE shipping_address
(
  username TEXT REFERENCES customers ON DELETE CASCADE ON UPDATE CASCADE,
  street_number INTEGER NOT NULL,
  street_name TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL
);

CREATE TABLE sarees
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  material TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  color TEXT NOT NULL,
  brand TEXT NOT NULL,
  occassion TEXT NOT NULL,
  image TEXT NOT NULL,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  sale BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE lahenga
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  material TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  color TEXT NOT NULL,
  brand TEXT NOT NULL,
  occassion TEXT NOT NULL,
  image TEXT NOT NULL,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  sale BOOLEAN NOT NULL DEFAULT FALSE,
  hip_size INTEGER NOT NULL,
  waist_size INTEGER NOT NULL,
  length INTEGER NOT NULL,
  style TEXT NOT NULL

);

CREATE TABLE jwelery 
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  material TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  color TEXT NOT NULL,
  brand TEXT NOT NULL,
  occassion TEXT NOT NULL,
  image TEXT NOT NULL,
  size TEXT NOT NULL,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  sale BOOLEAN NOT NULL DEFAULT FALSE
);