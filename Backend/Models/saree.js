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
      { seller_username, name, material, description, price, sale_price, color, image, used, sale }) {

    const result = await db.query(
          `INSERT INTO sarees
            (seller_username, name, material, description, price, sale_price, color, stiched, size, image, used, sale)
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
          stiched, 
          size,
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
            id,
            seller_username,
            name, 
            material, 
            description, 
            price,
            sale_price,
            color,
            stiched,
            size,
            used,
            sale,
            image
           FROM sarees
           ORDER BY id
           `,
    );

    let sarees = result.rows;
    return sarees;
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
        id,
        seller_username,
        name,
        description,
        material, 
        used, 
        sale,
        price,
        sale_price,
        color,
        stiched,
        size
        FROM sarees
      WHERE id = $1`,
      [id],
    );

    const imagesRes = await db.query(
      `SELECT 
          src 
        FROM sarees_images 
        WHERE saree=$1`, [id]
    )

    let result = sareeRes.rows[0];
    if (!sareeRes.rows[0]) throw new NotFoundError(`No saree found: ${id}`);

    const sellerInfo = await db.query(
      `SELECT * FROM sellers WHERE username=$1`, [result.seller_username]
    )
    
    result.seller = sellerInfo.rows[0]
    result.images = imagesRes.rows;

    return result;
  }

//update the saree information
  static async update(sareeObj) {
    const { name, material, used, sale, price, sale_price, color, stiched, size, image, id } = sareeObj;
    const result = await db.query(
    `UPDATE sarees SET 
        name=$1, 
        material=$2,
        used=$3,
        sale=$4,
        price=$5,
        sale_price=$6,
        color=$7,
        stiched=$8,
        size=$9,
        image=$10,
      WHERE id=$11
      RETURNING*`,
      [
        name, 
        material,
        used,
        sale,
        price,
        sale_price,
        color,
        stiched,
        size,
        image,
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