"use strict";

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Related functions for Sarees. */

class Saree {
//duplicate items with same names are allowed

  static async add(
      { seller_username, name, material, description, price, sale_price, color, quantity, used=false, sale=false, stiched, blouse_size }) {

    const result = await db.query(
          `INSERT INTO sarees
            (seller_username, name, material, description, price, sale_price, color, quantity, used, sale, stiched, blouse_size)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           RETURNING *`,
        [
          seller_username,
          name, 
          material, 
          description, 
          price,
          sale_price,
          color,
          quantity,
          used,
          sale,
          stiched, 
          blouse_size
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
      `SELECT DISTINCT ON (saree) *, s.name 
      FROM sarees_images AS si 
      INNER JOIN sarees as s on si.saree = s.id;`);

    let sarees = result.rows;
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
      `SELECT * FROM sarees
      WHERE id = $1`,
      [id],
    );

    let result = sareeRes.rows[0];
    if (!result) throw new NotFoundError(`No saree found: ${id}`);

    const sellerInfo = await db.query(
      `SELECT * FROM sellers WHERE username=$1`, [result.seller_username]);
    const imagesRes = await db.query(
      `SELECT src FROM sarees_images WHERE saree=$1`, [id]);
    
    result.seller = sellerInfo.rows[0]
    result.images = imagesRes.rows;

    return result;
  }

//update the saree information
  static async update(sareeObj) {
    const { name, material, description, price, sale_price, color, quantity, used, sale, stiched, blouse_size, id } = sareeObj;
    const result = await db.query(
    `UPDATE sarees SET 
        name=$1, 
        material=$2,
        description=$3,
        price=$4,
        sale_price=$5,
        color=$6,
        quantity=$7,
        used=$8,
        sale=$9,
        stitched=$10,
        blouse_size=$11,
      WHERE id=$12
      RETURNING*`,
      [
        name, 
        material,
        description,
        price,
        sale_price,
        color,
        quantity,
        used,
        sale,
        stiched,
        blouse_size,
        id
      ]);

      let saree = result.rows[0];
      if (!saree) throw new NotFoundError(`No such seller: ${saree}`);
      return saree;
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
    return saree;
  }
}

module.exports = Saree;