"use strict";
const db = require("../db");
const { NotFoundError } = require("../expressError");

class Jwelery {
//duplicate items with same names are allowed
  static async add(
      { seller_username, name, material, description, price, sale_price, color, size, used=false, sale, quantity }) {

    const result = await db.query(
          `INSERT INTO jwelery
            (seller_username, name, material, description, price, sale_price, color, size, used, sale, quantity)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
           RETURNING *`,
        [
          seller_username,
          name, 
          material, 
          description,
          price,
          sale_price,
          color,
          size,
          used,
          sale,
          quantity
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
      `
      SELECT DISTINCT ON (jwelery) *, 
        j.name 
      FROM jwelery_images as ji 
      INNER JOIN jwelery as j on j.jwelery = j.id;`
    )
    
    const lahengas = result.rows;
    return { lahengas };
  }

  /** Given a jwelery name, return data about the jwelery.
   *
   * Returns { name, description, price, material, src }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(id) {
    const jweleryRes = await db.query(
      `SELECT * FROM jwelery
      WHERE id = $1`,
      [id],
    );

    let result = jweleryRes.rows[0];
    if (!jweleryRes.rows[0]) throw new NotFoundError(`No jwelery found: ${name}`);

    const sellerInfo = await db.query(
      `SELECT * FROM sellers WHERE username=$1`, [result.seller_username]);
    const imagesResult = await db.query(
      `SELECT src FROM jwelery_images WHERE jwelery = $1`, [id])

    result.seller = sellerInfo.rows[0]
    result.image = imagesResult.rows
    return result;
  }

  static async update(jweleryObj) {
    const { name, material, description, price, sale_price, color, size, used, sale, quantity, id } = jweleryObj;
    const result = await db.query(
    `UPDATE jwelery SET 
      name=$1, 
      material=$2, 
      description=$3,
      price=$4,
      sale_price=$5,
      color=$6,
      size=$7,
      used=$8,
      sale=$9,
      quantity=$10,
    WHERE id = $11
      RETURNING*`,
      [
        name, 
        material, 
        description, 
        price,
        sale_price,
        color,
        size,
        used,
        sale,
        quantity,
        id
      ]);

      let jwelery = result.rows[0];

      if (!jwelery) throw new NotFoundError(`No such jwelery: ${id}`);
      return jwelery;
  }


  /** Delete given jwelery from database; returns undefined. */

  static async remove(id) {
    let result = await db.query(
          `DELETE
           FROM jwelery
           WHERE id = $1
           RETURNING id`,
        [id],
    );
    const jwelery = result.rows[0];
    if (!jwelery) throw new NotFoundError(`No such jwelery: ${id}`);
  }
}

module.exports = Jwelery;