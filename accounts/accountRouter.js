const express = require('express')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

// http://localhost:3000/account
router.get('/', authorize, (req, res) => {



    // TODO: if user is not same as current user

    const user = {
        id: 1,
        email: 'ruegen@example.com',
        favourites: [
            'Mountain Oak',
            'Furphy',
            'Hoegaarden'
        ]
    }

    res.status(200).json(user)
})

module.exports = router