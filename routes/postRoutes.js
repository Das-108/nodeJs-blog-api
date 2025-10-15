const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { getAllPost,
    getPost,
    createPost,
    editPost,
    deletePost,
} = require('../controllers/Post')

router.route('/').post(createPost).get(getAllPost)
router.route('/:id').get(getPost).delete(deletePost).patch(editPost)




// router.get('/me', auth, (req,res) => {
//     res.json({
//         msg: 'you successfully accessed a protected route!',
//         userId: req.user.id
//     })
// });

module.exports = router;