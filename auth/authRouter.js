const express = require('express')
const router = express.Router()
const auth = require('./util')
const {logger, authenticate} = require('./authMiddleware')
const JWT = require('jsonwebtoken')



// http://localhost:3000/auth/login
router.post('/login', logger, authenticate, (req, res) => {



    // TODO: generate token only if authentic user 
    const payload = {
        bond: '007'
    }

    const jwtSecret = process.env.JWT_SECRET

    JWT.sign(payload, jwtSecret, (err, token) => {

        if(err) {
            res.status(401)
            throw new Error('Bad token')
        }

        res.set('Authorization', `Bearer ${token}`);
        res.status(200).end()

    })


        


})

module.exports = router