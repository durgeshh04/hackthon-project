const express = require('express');
const { createRole, getAllRoles, updateRole, deleteRole } = require('../controllers/roleController');
const authMiddleware = require('../middlewares/authMiddlewares');

const router = express.Router();

// Protected routes for roles
router.post('/', authMiddleware, createRole);
router.get('/', authMiddleware, getAllRoles);
router.put('/:id', authMiddleware, updateRole);
router.delete('/:id', authMiddleware, deleteRole);

module.exports = router;
