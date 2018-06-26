const express = require('express')
const router = express.Router()

// http://localhost:3000/account
router.get('/', (req, res) => {

    const authHeader = req.get('Authorization')
    const [,token] = authHeader.split(' ') //['Bearer', '007']

    if(token !== '007') {
        res.status(401).json({
            error: 'You are not authorized'
        })
    }

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