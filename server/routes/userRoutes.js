const express = require('express');
const { createUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlewares');

const router = express.Router();

// Protected routes for users
router.post('/', authMiddleware, createUser);
router.get('/', authMiddleware, getAllUsers);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
