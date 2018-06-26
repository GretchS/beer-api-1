const express = require('express')
const router = express.Router()

// http://localhost:3000/account
router.get('/', (req, res) => {
    // TODO: check token exists (and valid)
    // TODO: if token correct send user data

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