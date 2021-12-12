const express = require('express')
const router = new express.Router()
// const jsonschema = require('jsonschema')
// const shelterSchema = require('../schemas/newShelterSchema.json')
const Saree = require('../Models/saree')
const { BadRequestError } = require("../expressError");
const { ensureCreator, ensureAdmin } = require('../Middleware/auth')
const db = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const result = await Saree.findAll()
        return res.json(result);
    } catch(e) {
        return next (e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const saree = await Saree.get(req.params.id)
        return res.json({ saree });
    } catch(e) {
        return next(e)
    }
})

router.put("/:id", async function (req, res, next) {
    try {
        let sareeObj = {...req.body, id: req.params.id}
        const saree = await Saree.update(sareeObj);
        return res.json({ saree })
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
        const saree = await Saree.add(req.body)
        return res.status(201).json({ saree })
    } catch(e) {
        return next(e)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const saree = await Saree.remove(req.params.id)
        return res.json({deleted: saree.name})
    } catch (e) {
        return next (e)
    }
})

module.exports = router;