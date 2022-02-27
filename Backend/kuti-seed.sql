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
  (id, seller_username, name, material, used, description, sale, price, sale_price, color, stiched, size, image)
VALUES
  (1, 'tbusiness1', 'Traditional saree', 'silk', FALSE, 'Traditional saree made from silk perfect for you', TRUE, 22.50, 15.49, 'red', true, 20, 'https://assets0.mirraw.com/images/9593549/1_long_webp.webp?1632590172'),
  (2, 'tbusiness2', 'Banarasi saree', 'cotton', FALSE, 'Traditional saree made from silk perfect for you', TRUE, 32.50, 22.50, 'yellow', false, 21, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/p/r/printed-satin-saree-in-light-peach-and-pink-v1-stka18.jpg'),
  (3, 'tbusiness3', 'Authentic Nepali saree', 'silk', FALSE, 'Traditional saree made from silk perfect for you', FALSE, 45.50, 45.50, 'red', false, 22, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embellished-georgette-saree-in-maroon-v1-sfs1142.jpg'),
  (4, 'tbusiness4', 'Bombay saree', 'silk', FALSE, 'Traditional saree made from silk perfect for you', TRUE, 85.50, 75.50, 'blue', true, 23, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/f/o/foil-printed-georgette-scalloped-saree-in-peach-v1-sfs1120.jpg'),
  (5, 'tbusiness5', 'South indian saree', 'silk', TRUE, 'Traditional saree made from silk perfect for you', FALSE, 68.80, 68.80, 'red', true, 24, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-abaya-style-suit-in-sea-green-v1-kch2853_3.jpg');

INSERT INTO lahenga 
  (id, seller_username, name, material, used, description, sale, price, sale_price, color, waist_size, length, size)
VALUES
  (1, 'tbusiness1', 'Traditional Lahenga', 'silk', FALSE, 'traditional Lahenga made from silk perfect for you', TRUE, 22.50, 15.49, 'red', 28, 25, 4),
  (2, 'tbusiness2', 'Designer Embroidery Lahengas', 'cotton', FALSE, 'Traditional Lahenga made from silk perfect for you', FALSE, 32.50, 22.50, 'blue', 32, 21, 5),
  (3, 'tbusiness3', 'Turquoise Embroidered Art Silk', 'silk', FALSE, 'Traditional Lahenga made from silk perfect for you', FALSE, 45.50, 45.50, 'red', 28, 29, 2),
  (4, 'tbusiness4', 'White Embroidered', 'silk', FALSE, 'Traditional Lahenga made from silk perfect for you', FALSE, 85.50, 75.50, 'red', 40, 32, 4),
  (5, 'tbusiness5', 'Elegant yellow colored', 'silk', FALSE, 'Traditional Lahenga made from silk perfect for you', FALSE, 68.80, 68.80, 'yellow', 18, 39, 3);

INSERT INTO jwelery 
  (id, seller_username, name, material, used, description, sale, price, sale_price, color, brand, occassion, image, size)
VALUES
  (1, 'tbusiness1', 'Gold plated bangles', 'silver and gold', FALSE, 'Gold plated bangles for your lovely hands', FALSE, 22.50, 15.49, 'gold', 'everything gold', 'wedding', 'https://assets0.mirraw.com/images/7312578/SR-0004_small_webp.webp?1566383809', 26),
  (2, 'tbusiness2', 'Gold Necklaces', 'Copper and Gold', FALSE, 'Gold necklace made from copper and gold', FALSE, 32.50, 22.50, 'silver', 'bombay gold', 'casual', 'https://assets0.mirraw.com/images/7198899/image_small.jpeg?1562855998', 26),
  (3, 'tbusiness3', 'Gold stone', 'silk', FALSE, 'Gold stone set of 2 Broad Kada', FALSE, 45.50, 45.50, 'silver', 'everything gold', 'party', 'https://assets0.mirraw.com/images/9391819/image_small_webp.webp?1628517918', 24),
  (4, 'tbusiness4', 'Enigmatic Kundan', 'silk', FALSE, 'Enigmatic kundan Polki Gold', FALSE, 85.50, 75.50, 'gold', 'old is gold', 'meetings', 'https://assets0.mirraw.com/images/8898708/SELERS007%281%29_small_webp.webp?1618495684', 32),
  (5, 'tbusiness5', 'White Necklace', 'silk', FALSE, 'White bright necklace', FALSE, 68.80, 68.80, 'gold', 'everything gold', 'casual', 'https://assets0.mirraw.com/images/8491273/N_6116_%281%29_small_webp.webp?1606398127', 40);

INSERT INTO sarees_images 
  ( saree, src )
VALUES
  (1, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/w/o/woven-art-silk-saree-in-green-v1-sela608.jpg'),
  (1, 'https://kalkifashion.com.imgeng.in/media/catalog/product/e/m/emerald-green-saree-in-satin-embellished-with-scattered-red-and-silver-kundan-along-the-border-and-unstitched-blouse-online-kalki-fashion-k003sra3455197y-sg70833_2_.jpg?imgeng=/w_317/h_448'),
  (1, 'https://kalkifashion.com.imgeng.in/media/catalog/product/e/m/emerald-green-saree-in-satin-embellished-with-scattered-red-and-silver-kundan-along-the-border-and-unstitched-blouse-online-kalki-fashion-k003sra3455197y-sg70833_2_.jpg?imgeng=/w_317/h_448'),
  (2, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/p/r/printed-satin-saree-in-light-peach-and-pink-v1-stka18.jpg'),
  (3, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embellished-georgette-saree-in-maroon-v1-sfs1142.jpg'),
  (4, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/f/o/foil-printed-georgette-scalloped-saree-in-peach-v1-sfs1120.jpg'),
  (5, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-abaya-style-suit-in-sea-green-v1-kch2853_3.jpg');

INSERT INTO lahenga_images 
  ( lahenga, src )
VALUES
(1, 'https://assets0.mirraw.com/images/9593549/1_long_webp.webp?1632590172'),
(1, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/w/o/woven-art-silk-saree-in-green-v1-sela608.jpg'),
(1, 'https://kalkifashion.com.imgeng.in/media/catalog/product/e/m/emerald-green-saree-in-satin-embellished-with-scattered-red-and-silver-kundan-along-the-border-and-unstitched-blouse-online-kalki-fashion-k003sra3455197y-sg70833_2_.jpg?imgeng=/w_317/h_448'),
(2, 'https://assets0.mirraw.com/images/8813401/02_long_webp.webp?1616156216'),
(2, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/p/r/printed-satin-saree-in-light-peach-and-pink-v1-stka18.jpg'),
(2, 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-abaya-style-suit-in-sea-green-v1-kch2853_3.jpg'),
(3, 'https://assets0.mirraw.com/images/6296150/image_long.jpeg?1532522885'),
(4, 'https://assets0.mirraw.com/images/7377532/image_long_webp.webp?1568211581'),
(5, 'https://assets0.mirraw.com/images/8980310/AONE2613_long_webp.webp?1621082071')