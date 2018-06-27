const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

// http://localhost:3000/account
router.get('/', authorize, (req, res) => {
    res.status(200).json({
        beers: ["VB", "Carlton", "Indian Pale Ale"]
    });
}) 

module.exports = router