const express = require('express')
const router = new express.Router()
const jsonschema = require('jsonschema')
const userSchema = require('../schemas/newCustomerSchema.json')
const userAuth = require('../Schemas/userAuth.json')
const Customer = require('../Models/customer')
const { BadRequestError } = require("../expressError");
const { ensureCreator, ensureAdmin, ensureCorrectUserOrAdmin } = require('../Middleware/auth')
const { createToken } = require('../Helpers/tokens')
const db = require('../db')

//s3 imports
const generateUploadURL = require('./s3.js')

router.get('/', async (req, res, next) => {
    try {
        const result = await Customer.findAll()
        return res.json(result);
    } catch(e) {
        return next (e)
    }
})

//allows user to login
router.post('/login', async (req, res, next) => {

    const validator = jsonschema.validate(req.body, userAuth)
    if (!validator.valid) {
        const errs = validator.errors.map(e => e.stack);
        console.log(errs)
        res.json({msg: "Invalid username/password"})
    }
    try {
        const { username, password } = req.body
        if (!username) {
            return res.json({msg: "Username is required"})
        } else if (!password) {
            return res.json({msg: "Password is required"})
        }
        const user = await Customer.authenticate(username, password)
        const token = createToken(user)
        return res.json({ user, token })
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
        const token = createToken(customer)
        return res.status(201).json({ customer, token })
    } catch(e) {
        return next(e)
    }
})

//generates a url for AWS s3 bucket for image upload
router.get('/aws/generateURL', async (req, res) => {
    const url = await generateUploadURL()
    res.send({ url })
})

router.delete('/:username', ensureCorrectUserOrAdmin,async (req, res, next) => {
    try {
        await Customer.remove(req.params.username)
        return res.json({deleted: req.params.username})
    } catch (e) {
        return next (e)
    }
})

router.post('/uploadImages', async(req, res, next) => {
    try {
        console.log(req)
        let testUpload = await `insert into sarees_images
            (saree, src)
            VALUES ($1, $2)
            RETURNING *`
            [1, req.url]
        return testUpload.rows[0];

    } catch(e) {
        return next(e)
    }
})

module.exports = router;