\c kuti

INSERT INTO customers
  ( username, password, fullName, email, is_admin, is_seller )
VALUES
  ('jerry50', 'password', 'Jerry Brown', 'jerry50@gmail.com', FALSE, FALSE),
  ('pdahal48', 'password', 'Prem Dzongkhar', 'pdahal48@gmail.com', TRUE, FALSE),
  ('juanita07', 'password','Juanita Brown', 'juanita07@gmail.com', FALSE, TRUE),
  ('lisa20','password','Lisa Thompson', 'lisa20@gmail.com', FALSE, FALSE);

INSERT INTO sellers
  (username, password, fullName, business_name, business_address, business_city, business_state, business_zip_code, phone_number, email, paypal_email, is_seller)
VALUES
  ('tbusiness1', 'password', 'Test Business 1', 'Business for test 1', '123 Main St', 'Reynoldsburg', 'OH', '43018', '6140001111', 'tbusiness1@gmail.com', 'tbusiness1@gmail.com', TRUE),
  ('tbusiness2', 'password', 'Test Business 2', 'Business for test 2', '223 Main St', 'Reynoldsburg', 'OH', '43028', '6140002222', 'tbusiness2@gmail.com', 'tbussiness2@gmail.com', TRUE),
  ('tbusiness3', 'password', 'Test Business 3', 'Business for test 3', '323 Main St', 'Reynoldsburg', 'OH', '43038', '6140003333', 'tbusiness3@gmail.com', 'tbussiness3@gmail.com', TRUE),
  ('tbusiness4', 'password', 'Test Business 4', 'Business for test 4', '423 Main St', 'Reynoldsburg', 'OH', '43048', '6140004444', 'tbusiness4@gmail.com', 'tbussiness4@gmail.com', TRUE),
  ('tbusiness5', 'password', 'Test Business 5', 'Business for test 5', '523 Main St', 'Reynoldsburg', 'OH', '43058', '6140005555', 'tbusiness5@gmail.com', 'tbussiness5@gmail.com', TRUE);


INSERT INTO shipping_address
  ( username, street_number, street_name, city, state, zip_code )
VALUES
  ('jerry50', 1000, 'nostreet ave', 'hamilton', 'ohio', '45011'),
  ('pdahal48', 1000, 'nostreet ave', 'cincinnati', 'ohio', '45011'),
  ('juanita07', 1000, 'nostreet ave', 'columbus', 'ohio', '45011'),
  ('lisa20', 1000, 'nostreet ave', 'akron', 'ohio', '45011');

INSERT INTO sarees 
  (name, material, used, description, sale, price, sale_price, color, brand, occassion, image)
VALUES
  ('Traditional saree', 'silk', FALSE, 'traditional saree made from silk perfect for you', TRUE, 22.50, 15.49, 'red', 'bombay sarees', 'casual', 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/w/o/woven-art-silk-saree-in-green-v1-sela608.jpg'),
  ('Banarasi saree', 'cotton', FALSE, 'traditional saree made from silk perfect for you', TRUE, 32.50, 22.50, 'yellow', 'bombay sarees', 'casual', 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/p/r/printed-satin-saree-in-light-peach-and-pink-v1-stka18.jpg'),
  ('Authentic Nepali saree', 'silk', FALSE, 'traditional saree made from silk perfect for you', FALSE, 45.50, 45.50, 'red', 'bombay sarees', 'casual', 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embellished-georgette-saree-in-maroon-v1-sfs1142.jpg'),
  ('Bombay saree', 'silk', FALSE, 'traditional saree made from silk perfect for you', TRUE, 85.50, 75.50, 'blue', 'bombay sarees', 'casual', 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/f/o/foil-printed-georgette-scalloped-saree-in-peach-v1-sfs1120.jpg'),
  ('South indian saree', 'silk', TRUE, 'traditional saree made from silk perfect for you', FALSE, 68.80, 68.80, 'red', 'bombay sarees', 'casual', 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-abaya-style-suit-in-sea-green-v1-kch2853_3.jpg');

INSERT INTO lahenga 
  (name, material, used, description, sale, price, sale_price, color, brand, occassion, image, waist_size, hip_size, length, style)
VALUES
  ('Traditional Lahenga', 'silk', FALSE, 'traditional saree made from silk perfect for you', FALSE, 22.50, 15.49, 'red', 'bombay sarees', 'casual', 'https://assets0.mirraw.com/images/9593549/1_long_webp.webp?1632590172', 28, 29, 25, 'no idea'),
  ('Designer Embroidery Lahengas', 'cotton', FALSE, 'traditional saree made from silk perfect for you', FALSE, 32.50, 22.50, 'blue', 'bombay sarees', 'casual', 'https://assets0.mirraw.com/images/8813401/02_long_webp.webp?1616156216', 32, 21, 27, 'no idea'),
  ('Turquoise Embroidered Art Silk', 'silk', FALSE, 'traditional saree made from silk perfect for you', FALSE, 45.50, 45.50, 'red', 'bombay sarees', 'casual', 'https://assets0.mirraw.com/images/6296150/image_long.jpeg?1532522885', 28, 29, 25, 'no idea'),
  ('White Embroidered', 'silk', FALSE, 'traditional saree made from silk perfect for you', FALSE, 85.50, 75.50, 'red', 'bombay sarees', 'casual', 'https://assets0.mirraw.com/images/7377532/image_long_webp.webp?1568211581', 40, 32, 26, 'no idea'),
  ('Elegant yellow colored', 'silk', FALSE, 'traditional saree made from silk perfect for you', FALSE, 68.80, 68.80, 'yellow', 'bombay sarees', 'casual', 'https://assets0.mirraw.com/images/8980310/AONE2613_long_webp.webp?1621082071', 18, 39, 15, 'yes idea');

INSERT INTO jwelery 
  (name, material, used, description, sale, price, sale_price, color, brand, occassion, image, size)
VALUES
  ('Gold plated bangles', 'silver and gold', FALSE, 'Gold plated bangles for your lovely hands', FALSE, 22.50, 15.49, 'gold', 'everything gold', 'wedding', 'https://assets0.mirraw.com/images/7312578/SR-0004_small_webp.webp?1566383809', 26),
  ('Gold Necklaces', 'Copper and Gold', FALSE, 'Gold necklace made from copper and gold', FALSE, 32.50, 22.50, 'silver', 'bombay gold', 'casual', 'https://assets0.mirraw.com/images/7198899/image_small.jpeg?1562855998', 26),
  ('Gold stone', 'silk', FALSE, 'Gold stone set of 2 Broad Kada', FALSE, 45.50, 45.50, 'silver', 'everything gold', 'party', 'https://assets0.mirraw.com/images/9391819/image_small_webp.webp?1628517918', 24),
  ('Enigmatic Kundan', 'silk', FALSE, 'Enigmatic kundan Polki Gold', FALSE, 85.50, 75.50, 'gold', 'old is gold', 'meetings', 'https://assets0.mirraw.com/images/8898708/SELERS007%281%29_small_webp.webp?1618495684', 32),
  ('White Necklace', 'silk', FALSE, 'White bright necklace', FALSE, 68.80, 68.80, 'gold', 'everything gold', 'casual', 'https://assets0.mirraw.com/images/8491273/N_6116_%281%29_small_webp.webp?1606398127', 40);
