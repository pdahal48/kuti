"use strict";

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Related functions for Sarees. */

class Jwelery {
//duplicate items with same names are allowed

  static async add(
      { name, material, description, price, sale_price, color, brand, occassion, image, used, sale }) {

    const result = await db.query(
          `INSERT INTO sarees
            (name, material, description, used, sale, price, sale_price, color, brand, occassion, image )
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
           RETURNING *`,
        [
          name, 
          material, 
          description, 
          price,
          sale_price,
          color,
          brand,
          occassion,
          image,
          used,
          sale
        ],
    );
    return result.rows[0];
  }

  /** Find all sarees.
   *
   * Returns [{ name, material, used, sale, price, sale_price, color, brand, occassion, image, size}, ...]
   **/

  static async findAll() {
    const result = await db.query(
          `SELECT 
            name, 
            material, 
            description, 
            price,
            sale_price,
            color,
            brand,
            occassion,
            image,
            used,
            sale
           FROM sarees
           ORDER BY name`,
    );
    const sarees = result.rows;
    return { sarees };
  }

  /** Given a saree name, return data about the saree.
   *
   * Returns { name, material, description, price, sale_price, color, brand, occassion, image, used, sale }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(id) {
    const sareeRes = await db.query(
      `SELECT 
        name, 
        material, 
        used, 
        sale,
        price,
        sale_price,
        color,
        brand,
        occassion,
        image,
        size
        FROM sarees
      WHERE id = $1`,
      [id],
    );

    if (!sareeRes.rows[0]) throw new NotFoundError(`No saree found: ${id}`);
    return sareeRes.rows;
  }

  /** Delete given saraee from database; returns undefined. */

  static async remove(id) {
    let result = await db.query(
          `DELETE
           FROM sarees
           WHERE id = $1
           RETURNING name`,
        [id],
    );
    const saree = result.rows[0];
    if (!saree) throw new NotFoundError(`No such saree: ${id}`);
  }
}

module.exports = Jwelery;