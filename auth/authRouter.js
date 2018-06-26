const express = require('express')
const router = express.Router()
const auth = require('./util')

// http://localhost:3000/auth/login
router.post('/login', (req, res) => {

    const {email, password} = req.body

    const authed = auth.isAuthenticUser(email, password)
    

    if(!authed) {
        throw new Error('Incorrect email or password')
        return;
    }

    // TODO: generate token only if authentic user 
    const token = {
        token: '007'
    }

    res.set('Authorization', `Bearer ${token.token}`);



    res.status(200).json(token)
})

module.exports = router