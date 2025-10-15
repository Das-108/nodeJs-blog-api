const post = require('../models/Post')

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', ['username']).sort({ createdAt: -1});
        res.json(posts)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server Error')
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', ['username']);
        if(!post) return res.status(404).json({ msg: 'Post is not found'})
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const createPost = async (req, res)=> {
    try {
        const { title, content } = req.body

        const newPost = new Post ({
            title,
            content,
            author: req.user.id,
        });

        const post = await newPost.save()
        res.status(201).json(post)
    }catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
}

const editPost = async (req, res) => {
    try {
        const { title, content } = req.body

        let post = await Post.findById(req.params.id)
        if (!post) return res.status(404).json({ msg: 'Post Not found'});

        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'Forbiddern: You are not authorized'})
        }

        if(title) post.title = title;
        if (content) post.content = content;

        await post.save();
        res.json(post)
    }catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
};

const deletePost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({ msg: 'forbidden: You are not Authorized'})
        
        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'forbidden to acess'})
        }

        await Post.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Post removed successfully'})
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
};

module.exports = { 
    getAllPost, 
    getPost,
    createPost, 
    editPost, 
    deletePost
}