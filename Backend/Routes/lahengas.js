const express = require('express')
const router = new express.Router()
const jsonschema = require('jsonschema')
const lahengaSchema = require('../schemas/newLahengaSchema.json')
const Lahenga = require('../Models/lahenga')
const { BadRequestError } = require("../expressError");
const { ensureCreator, ensureAdmin } = require('../Middleware/auth')
const db = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const result = await Lahenga.findAll()
        return res.json(result);
    } catch(e) {
        return next (e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const lahenga = await Lahenga.get(req.params.id)
        return res.json({ lahenga });
    } catch(e) {
        return next(e)
    }
})

router.put("/:id", async function (req, res, next) {
    try {
        let lahengaObj = {...req.body, id: req.params.id}
        const lahenga = await Lahenga.update(lahengaObj);
        return res.json({ lahenga })
    } catch(e) {
        next(e)
    }
  });
  

router.post('/', async (req, res,next) => {
    try {
        const validator = jsonschema.validate(req.body, lahengaSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const lahenga = await Lahenga.add(req.body)
        return res.status(201).json({ lahenga })
    } catch(e) {
        return next(e)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const lahenga = await Lahenga.remove(req.params.id)
        return res.json({deleted: lahenga.name })
    } catch (e) {
        return next (e)
    }
})

module.exports = router;