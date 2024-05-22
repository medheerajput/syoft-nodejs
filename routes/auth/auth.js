const express = require('express');
const router = express.Router();
const {registration,login}= require("./authController")


// Registeration
router.post('/register',registration );
// Login 
router.post('/login',login);

module.exports = router;
