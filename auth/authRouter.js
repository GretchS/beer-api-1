const express = require('express')
const router = express.Router()
const auth = require('./util')
const {logger, authenticate} = require('./authMiddleware')


// http://localhost:3000/auth/login
router.post('/login', logger, authenticate, (req, res) => {



    // TODO: generate token only if authentic user 
    const token = {
        token: '007'
    }

    res.set('Authorization', `Bearer ${token.token}`);



    res.status(200).json(token)
})

module.exports = router