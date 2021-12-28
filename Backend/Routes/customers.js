const express = require('express')
const router = new express.Router()
const jsonschema = require('jsonschema')
const userSchema = require('../schemas/newCustomerSchema.json')
const Customer = require('../Models/customer')
const { BadRequestError } = require("../expressError");
const { ensureCreator, ensureAdmin, ensureCorrectUserOrAdmin } = require('../Middleware/auth')
const db = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const result = await Customer.findAll()
        return res.json(result);
    } catch(e) {
        return next (e)
    }
})

router.get('/:username', async (req, res, next) => {
    try {
        const customer = await Customer.get(req.params.username)
        return res.json({ customer });
    } catch(e) {
        return next(e)
    }
})

router.put("/:username", async function (req, res, next) {
    try {
        let customerObj = {...req.body, username: req.params.username}
        const customer = await Customer.update(customerObj);
        return res.json({ customer })
    } catch(e) {
        next(e)
    }
  });
  

router.post('/', async (req, res,next) => {
    try {
        const validator = jsonschema.validate(req.body, userSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }        
        const customer = await Customer.register(req.body)
        return res.status(201).json({ customer })
    } catch(e) {
        return next(e)
    }
})

router.delete('/:username', ensureCorrectUserOrAdmin,async (req, res, next) => {
    try {
        await Customer.remove(req.params.username)
        return res.json({deleted: req.params.username})
    } catch (e) {
        return next (e)
    }
})

module.exports = router;