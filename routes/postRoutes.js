const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/me', auth, (req,res) => {
    res.json({
        msg: 'you successfully accessed a protected route!',
        userId: req.user.id
    })
});

module.exports = router;