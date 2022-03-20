"use strict";
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config.js");
const db = require("../db");

class Aws {
  static async uploadImages({ lahengaId, src }) {
    let result = await db.query(
      `INSERT INTO lahenga_images
          (lahenga, src)
        VALUES 
          ($1, $2)
        RETURNING *`,
      [lahengaId, src]
    )
    return result.rows[0];
  }

  static async uploadSareeImages({ sareeId, src }) {
    console.log(sareeId, src)

    let result = await db.query(
      `INSERT INTO sarees_images
          (saree, src)
        VALUES 
          ($1, $2)
        RETURNING *`,
      [sareeId, src]
    )
    return result.rows[0];
  }
}

module.exports = Aws;