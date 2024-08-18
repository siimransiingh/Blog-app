const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/Controller');

// GET /api/posts - Get all posts
router.get('/', getPosts);

// GET /api/posts/:id - Get a specific post
router.get('/:id', getPostById);

// POST /api/posts - Create a new post
router.post('/', createPost);

// PUT /api/posts/:id - Update a post
router.put('/:id', updatePost);

// DELETE /api/posts/:id - Delete a post
router.delete('/:id', deletePost);

module.exports = router;
