"use strict";

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Related functions for Jwelery. */

class Jwelery {
//duplicate items with same names are allowed

  static async add(
      { name, material, used, sale, price, sale_price, color, brand, occassion, image, size, description }) {

    const result = await db.query(
          `INSERT INTO jwelery
            (name, material, used, sale, price, sale_price, color, brand, occassion, image, size )
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           RETURNING *`,
        [
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
          size,
          description
        ],
    );
    return result.rows[0];
  }

  /** Find all jweleries.
   *
   * Returns [{ name, material, used, sale, price, sale_price, color, brand, occassion, image, size}, ...]
   **/

  static async findAll() {
    const result = await db.query(
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
            size,
            description
           FROM jwelery
           ORDER BY name`,
    );
    const jweleries = result.rows;
    return { jweleries };
  }

  /** Given a jwelery name, return data about the jwelery.
   *
   * Returns { name, description, price, material, src }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(id) {
    const jweleryRes = await db.query(
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
        size,
        description
        FROM jwelery
      WHERE id = $1`,
      [id],
    );

    if (!jweleryRes.rows[0]) throw new NotFoundError(`No jwelery found: ${name}`);
    return jweleryRes.rows;
  }

  /** Delete given jwelery from database; returns undefined. */

  static async remove(id) {
    let result = await db.query(
          `DELETE
           FROM jwelery
           WHERE id = $1
           RETURNING name`,
        [id],
    );
    const jwelery = result.rows[0];
    if (!jwelery) throw new NotFoundError(`No such jwelery: ${name}`);
  }
}

module.exports = Jwelery;