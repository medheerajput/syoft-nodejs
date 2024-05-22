const { verifyToken } = require('../utils/jwt');
const { errors } = require('../utils/errors');

// Middleware to check for token
const authenticateToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) throw errors.unauthorized('Token not provided');

        const decoded = verifyToken(token, process.env.JWT_SECRET);
        if (!decoded) throw errors.forbidden('Invalid token');

        req.user = decoded;
        next();
    } catch (error) {
        res.status(error.status || 500).json(error);
    }
};

// Middleware to check role
const checkRole = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json(errors.forbidden('Forbidden'));
    }
    next();
};

module.exports = { authenticateToken, checkRole };
