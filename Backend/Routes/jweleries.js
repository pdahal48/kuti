const express = require('express')
const router = new express.Router()
// const jsonschema = require('jsonschema')
// const shelterSchema = require('../schemas/newShelterSchema.json')
const Jwelery = require('../Models/jwelery')
const { BadRequestError } = require("../expressError");
const { ensureCreator, ensureAdmin } = require('../Middleware/auth')
const db = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const result = await Jwelery.findAll()
        return res.json(result);
    } catch(e) {
        return next (e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const jwelery = await Jwelery.get(req.params.id)
        return res.json({ jwelery });
    } catch(e) {
        return next(e)
    }
})

router.put("/:id", async function (req, res, next) {
    try {
        let jweleryObj = {...req.body, id: req.params.id}
        const jwelery = await Jwelery.update(jweleryObj);
        console.log(`result recieved from the model is `, jwelery)
        return res.json({ jwelery })
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
        const jweleries = await Jwelery.add(req.body)
        return res.status(201).json({ jweleries })
    } catch(e) {
        return next(e)
    }
})

router.delete('/:name', ensureAdmin, async (req, res, next) => {
    try {
        await Jwelery.remove(req.params.name)
        return res.json({deleted: req.params.name})
    } catch (e) {
        return next (e)
    }
})

module.exports = router;