const express = require('express')
const router = new express.Router()
// const jsonschema = require('jsonschema')
// const shelterSchema = require('../schemas/newShelterSchema.json')
const Seller = require('../Models/seller')
const { BadRequestError } = require("../expressError");
const { ensureCreator, ensureAdmin, ensureAdminOrSeller } = require('../Middleware/auth')
const db = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const result = await Seller.findAll()
        return res.json(result);
    } catch(e) {
        return next (e)
    }
})

router.get('/:username', async (req, res, next) => {
    try {
        const seller = await Seller.get(req.params.username)
        return res.json({ seller });
    } catch(e) {
        return next(e)
    }
})

router.put("/:username", async function (req, res, next) {
    try {
        let sellerObj = {...req.body, username: req.params.username}
        const seller = await Seller.update(sellerObj);
        return res.json({ seller })
    } catch(e) {
        next(e)
    }
  });
  

router.post('/', async (req, res,next) => {
    try {
        // const validator = jsonschema.validate(req.body, shelterSchema)
        // if (!validator.valid) {
        //     const errs = validator.errors.map(e => e.stack);
        //     throw new BadRequestError(errs);
        // }        
        const seller = await Seller.register(req.body)
        return res.status(201).json({ seller })
    } catch(e) {
        return next(e)
    }
})

router.delete('/:username', ensureAdminOrSeller, async (req, res, next) => {
    try {
        await Seller.remove(req.params.username)
        return res.json({deleted: req.params.username})
    } catch (e) {
        return next (e)
    }
})

module.exports = router;