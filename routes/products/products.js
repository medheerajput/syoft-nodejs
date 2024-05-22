const express = require('express');
const { authenticateToken, checkRole } = require("../../middleware/authMiddleware");
const controller =require("./productsController");

const router = express.Router();

// Create Product - Admin only
router.post('/', authenticateToken, checkRole(['admin']), controller.addProduct);

// Get Products - Admin and Manager only
router.get('/', authenticateToken, checkRole(['admin', 'manager']), controller.getProducts);

// Update Product - Admin and Manager only
router.put('/:id', authenticateToken, checkRole(['admin', 'manager']), controller.updateProducts);

// Delete Product - Admin only
router.delete('/:id', authenticateToken, checkRole(['admin']),controller.deleteProducts);

module.exports = router;
