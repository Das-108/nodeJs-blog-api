const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { getAllPost,
    getPost,
    createPost,
    editPost,
    deletePost,
} = require('../controllers/Post')

router.route('/').post(auth, createPost).get(getAllPost)
router.route('/:id').get(getPost).delete(auth, deletePost).patch(auth, editPost)




module.exports = router;