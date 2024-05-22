const router = require("express").Router();

// Routes
router.use("/", require('../routes/auth/auth'));
router.use("/", require('../routes/products/products'));

module.exports = router