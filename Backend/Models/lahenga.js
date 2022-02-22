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
    { seller_username, name, material, description, price, sale_price, color, occassion, image, used = false, sale = false, hip_size, waist_size, length, style }) {

    const result = await db.query(
      `INSERT INTO lahenga
            (seller_username, name, material, description, price, sale_price, color, occassion, used, sale, hip_size, waist_size, length, style)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
           RETURNING *`,
      [
        seller_username,
        name,
        material,
        description,
        price,
        sale_price,
        color,
        occassion,
        used,
        sale,
        hip_size,
        waist_size,
        length,
        style
      ],
    );
    return result.rows[0];
  }

  /** Find all lahengas.
   *
   * Returns [{ name, material, description, price, sale_price, color, brand, occassion, image, used, sale, hip_size, waist_size, length, style}, ...]
   **/

  static async findAll() {
    // const result = await db.query(
    //   `SELECT 
    //     l.id,
    //     l.seller_username,
    //     l.name, 
    //     l.material, 
    //     l.description, 
    //     l.price,
    //     l.sale_price,
    //     l.color,
    //     l.occassion,
    //     l.used,
    //     l.sale,
    //     l.hip_size,
    //     l.waist_size,
    //     l.length,
    //     l.style,
    //     li.src, 
    //     li.lahenga
    //     FROM lahenga as l
    //     INNER JOIN lahenga_images as li
    //     ON l.id = li.lahenga
    //     ORDER BY name`,
    // );

    const result = await db.query(
      `
      select distinct on (lahenga) *, l.name from lahenga_images as li inner join lahenga as l on li.lahenga = l.id;
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
      `SELECT 
        id,
        seller_username,
        name, 
        material, 
        description, 
        price,
        sale_price,
        color,
        occassion,
        used,
        sale,
        hip_size,
        waist_size,
        length,
        style
        FROM lahenga
      WHERE id = $1`,
      [id],
    );

    let result = lahengaRes.rows[0];
    if (!result) throw new NotFoundError(`No Lahenga found: ${id}`);

    const sellerInfo = await db.query(
      `SELECT * FROM sellers WHERE username=$1`, [result.seller_username]
    )

    const imagesResult = await db.query(
      `select src from lahenga_images where lahenga = $1`, [id]
    )

    result.seller = sellerInfo.rows[0]
    result.image = imagesResult.rows
    return result;
  }

  //update the saree information
  static async update(lahengaObj) {
    const { name, material, description, price, sale_price, color, occassion, image, used, sale, hip_size, waist_size, length, style, id } = lahengaObj;
    const result = await db.query(
      `UPDATE lahenga SET 
        name=$1, 
        material=$2,
        description=$3,
        price=$4,
        sale_price=$5,
        color=$6,
        occassion=$7,
        image=$8,
        used=$9,
        sale=$10,
        hip_size=$11,
        waist_size=$12,
        length=$13,
        style=$14
      WHERE id = $15
      RETURNING*`,
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
        sale,
        hip_size,
        waist_size,
        length,
        style,
        id
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