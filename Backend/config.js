// If we're running in test "mode", use our test db
// Make sure to create both databases!
const DB_URI =  (process.env.NODE_ENV === "test") 
    ? "postgresql:///kuti_test"
    : "postgresql:///kuti";

const SECRET_KEY = process.env.SECRET_KEY || "$hamilton2021"
const PORT = +process.env.PORT || 3001;

const BCRYPT_WORK_FACTOR = 12;
// const STRIPE_SECRET_KEY = "sk_test_51JKpgFFBVrTAKnL7tWF7MF6flKN3ftlibOM7QmgNvqg5foYrZ77nVn4r9Eeu0pucMCqFB1ZR47BZYvcZ6tzsKxYr004UYd2rkf"

module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    PORT
}