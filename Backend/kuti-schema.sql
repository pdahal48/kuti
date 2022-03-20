\c kuti

DROP TABLE customers CASCADE;
DROP TABLE sellers CASCADE;
DROP TABLE shipping_address CASCADE;
DROP TABLE sarees CASCADE;
DROP TABLE lahenga CASCADE;
DROP TABLE jwelery CASCADE;
DROP TABLE sarees_images;
DROP TABLE lahenga_images;

CREATE TABLE customers
(
  username TEXT PRIMARY KEY CHECK (length(username) <= 25),
  password TEXT NOT NULL,
  fullName TEXT NOT NULL,
  email TEXT NOT NULL,
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
  email TEXT NOT NULL UNIQUE,
  paypal_email TEXT NOT NULL UNIQUE,
  is_seller BOOLEAN NOT NULL DEFAULT true

);

ALTER TABLE sellers ADD UNIQUE(business_name, business_address, business_city, business_state);

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
  seller_username TEXT NOT NULL REFERENCES sellers ON DELETE CASCADE ON UPDATE CASCADE,
  name TEXT NOT NULL,
  material TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  color TEXT NOT NULL,
  quantity Text Not NUll,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  sale BOOLEAN NOT NULL DEFAULT FALSE,
  stiched BOOLEAN NOT NULL,
  blouse_size INTEGER NOT NULL
);

CREATE TABLE lahenga
(
  id SERIAL PRIMARY KEY,
  seller_username TEXT NOT NULL REFERENCES sellers ON DELETE CASCADE ON UPDATE CASCADE,
  name TEXT NOT NULL,
  material TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  sale_price TEXT NOT NULL,
  color TEXT NOT NULL,
  quantity Text Not NUll,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  sale BOOLEAN NOT NULL DEFAULT FALSE,
  waist_size INTEGER NOT NULL,
  length INTEGER NOT NULL,
  blouse_size INTEGER NOT NULL
);

CREATE TABLE jwelery 
(
  id SERIAL PRIMARY KEY,
  seller_username TEXT NOT NULL REFERENCES sellers ON DELETE CASCADE ON UPDATE CASCADE,
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

CREATE TABLE sarees_images
(
  id SERIAL PRIMARY KEY,
  saree INTEGER NOT NULL
    REFERENCES sarees ON DELETE CASCADE,
  src TEXT NOT NULL
);

CREATE TABLE lahenga_images
(
  id SERIAL PRIMARY KEY,
  lahenga INTEGER NOT NULL
    REFERENCES lahenga ON DELETE CASCADE,
  src TEXT NOT NULL
)