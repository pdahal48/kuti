"use strict";

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Related functions for Lahenga. */

class Lahenga {
  //duplicate items with same names are allowed

  static async add(
    { seller_username, name, material, description, price, sale_price, color, quantity, used=false, sale=false, waist_size, length, blouse_size }) {

    const result = await db.query(
      `INSERT INTO lahenga
        (seller_username, name, material, description, price, sale_price, color, quantity, used, sale, waist_size, length, blouse_size)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
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
        waist_size,
        length,
        blouse_size
      ],
    );
    return result.rows[0];
  }

  /** Find all lahengas.
   *
   * Returns [{ name, material, description, price, sale_price, color, brand, occassion, image, used, sale, hip_size, waist_size, length, style}, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `
      SELECT DISTINCT ON (lahenga) *, 
        l.name 
      FROM lahenga_images as li 
      INNER JOIN lahenga as l on li.lahenga = l.id;
      `
    )
    
    const lahengas = result.rows;
    return { lahengas };
  }

  /** Given a lahenga name, return data about the saree.
   *
   * Returns { name, material, description, price, sale_price, color, brand, occassion, image, used, sale, hip_size, waist_size, length, style }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(id) {
    const lahengaRes = await db.query(
      `SELECT * FROM lahenga WHERE id = $1`,
      [id],
    );

    let result = lahengaRes.rows[0];
    if (!result) throw new NotFoundError(`No Lahenga found: ${id}`);

    const sellerInfo = await db.query(
      `SELECT * FROM sellers WHERE username=$1`, [result.seller_username])
    const imagesResult = await db.query(
      `SELECT src FROM lahenga_images WHERE lahenga = $1`, [id])

    result.seller = sellerInfo.rows[0]
    result.image = imagesResult.rows
    return result;
  }

  //update the saree information
  static async update(lahengaObj) {
    const { name, material, description, price, sale_price, color, quantity, image, used, sale, waist_size, length, id, blouse_size } = lahengaObj;
    const result = await db.query(
      `UPDATE lahenga SET 
        name=$1, 
        material=$2,
        description=$3,
        price=$4,
        sale_price=$5,
        color=$6,
        quantity=$7
        image=$8,
        used=$9,
        sale=$10,
        waist_size=$11,
        length=$12,
        blouse_size=$13,
      WHERE id = $14
      RETURNING*`,
      [
        name,
        material,
        description,
        price,
        sale_price,
        color,
        quantity,
        image,
        used,
        sale,
        waist_size,
        length,
        id,
        blouse_size
      ]);

    let lahenga = result.rows[0];
    if (!lahenga) throw new NotFoundError(`No such Lahenga: ${id}`);
    return lahenga;
  }


  /** Delete given lahenga from database; returns undefined. */

  static async remove(id) {
    let result = await db.query(
      `DELETE
           FROM lahenga
           WHERE id = $1
           RETURNING name`,
      [id],
    );
    const lahenga = result.rows[0];
    if (!lahenga) throw new NotFoundError(`No such lahenga: ${id}`);
    return lahenga;
  }
}

module.exports = Lahenga;