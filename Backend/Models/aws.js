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

class Aws {
  static async uploadImages({lahengaId, src}) {
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
}


module.exports = Aws;