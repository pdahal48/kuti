"use strict";

const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config.js");
const db = require("../db");
const bcrypt = require("bcrypt");

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

/** Related functions for users. */

class Seller {
  /** authenticate customers with username, password.
   *
   * Returns { username, password, full name, is_admin, is_seller }
   *
   * Throws UnauthorizedError is user not found or wrong password.
   **/

  static async authenticate(username, password) {
    // try to find the user first
    const result = await db.query(
          `SELECT username, 
              password, 
              fullName, 
              is_admin, 
              is_seller
           FROM sellers
           WHERE username = $1`,
        [username],
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if  (isValid === true) {
        delete user.password;
        return user;
      }
    }
    throw new UnauthorizedError("Invalid username/password");
  }

  /** Register user with data.
   *
   * Returns { username, password, full name, is_admin, is_seller }
   *
   * Throws BadRequestError on duplicates.
   **/

  static async register(
      { username, password, fullName, business_name, business_address, business_city, business_state, business_zip_code, phone_number, email, paypal_email, is_seller }) {
        
      const duplicateCheck = await db.query(
        `SELECT username
          FROM sellers
          WHERE username = $1`,
      [username],
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await db.query(
          `INSERT INTO sellers
            (username, 
            fullName,
            password, 
            business_name, 
            business_address,
            business_city,
            business_state,
            business_zip_code,
            phone_number,
            email,
            paypal_email,
            is_seller)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           RETURNING *`,
        [
          username, 
          fullName, 
          hashedPassword, 
          is_admin, 
          is_seller,
          business_name,
          business_address,
          business_city,
          business_zip_code,
          phone_number,
          email,
          paypal_email
        ],
    );
    
    const user = result.rows[0];
    return user;
  }

  /** Find all users.
   *
   * Returns [{ username, 
              password, 
              fullName, 
              is_admin, 
              is_seller }, ...]
   **/

  static async findAll() {

   const res = await db.query(`SELECT 
    username, 
    fullName, 
    password, 
    is_admin, 
    is_seller,
    business_name,
    business_address,
    business_city,
    business_zip_code,
    phone_number,
    email,
    paypal_email,
    is_seller
    FROM sellers
    `);

    return res.rows;
  }

  /** Given a username, return data about user.
   *
   * Returns { username, password, fullName, is_admin, is_seller }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(username) {
    const userRes = await db.query(
      `SELECT 
        username, 
        fullName, 
        password, 
        is_admin, 
        is_seller,
        business_name,
        business_address,
        business_city,
        business_zip_code,
        phone_number,
        email,
        paypal_email,
        is_seller
        FROM sellers
        WHERE username = $1`,
      [username],
    );

    const user = userRes.rows[0];
    if (!user) throw new NotFoundError(`No user: ${username}`);
    return user;
  }

  /** Delete given user from database; returns undefined. */

  static async remove(username) {
    let result = await db.query(
          `DELETE
           FROM sellers
           WHERE username = $1
           RETURNING username`,
        [username],
    );
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);
  }
}


module.exports = Seller;