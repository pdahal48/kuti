const express = require('express')
const router = new express.Router()
const Aws = require('../Models/Aws')

//s3 imports
const generateUploadURL = require('./s3.js')

//generates a url for AWS s3 bucket for image upload
router.get('/generateURL', async (req, res) => {
    const url = await generateUploadURL()
    res.send({ url })
})

router.post('/uploadLahenga', async(req, res, next) => {
    try {
        const { lahengaId, imageUrl } = req.body;
        console.log(`lahengaId in the customers page is ${lahengaId} and url is ${imageUrl}`)
        const newImage = await Aws.uploadImages({lahengaId, src: imageUrl});
        return res.json({ newImage })
    } catch(e) {
        return next(e)
    }
})

module.exports = router;