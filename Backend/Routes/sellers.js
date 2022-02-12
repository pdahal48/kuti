const express = require('express')
const router = new express.Router()
const jsonschema = require('jsonschema')
const sellerSchema = require('../schemas/newSellerSchema.json')
const Seller = require('../Models/seller')
const userAuth = require('../Schemas/userAuth.json')
const { createToken } = require('../Helpers/tokens')
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

//allows seller to login
router.post('/login', async (req, res, next) => {

    const validator = jsonschema.validate(req.body, userAuth)
    if (!validator.valid) {
        res.json({msg: "Invalid username/password"})
    }
    try {
        const { username, password } = req.body
        if (!username) {
            return res.json({msg: "Username is required"})
        } else if (!password) {
            return res.json({msg: "Password is required"})
        }
        const seller = await Seller.authenticate(username, password)
        const token = createToken(seller)
        return res.json({ seller, token })
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
        const validator = jsonschema.validate(req.body, sellerSchema)
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const seller = await Seller.register(req.body)
        const token = createToken(seller)
        return res.status(201).json({ seller, token })
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