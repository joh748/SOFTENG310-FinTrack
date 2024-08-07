const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
    const authHeader = req.headers?.authorization;
    console.log("Authorization Header:", authHeader);

    const token = authHeader?.split(' ')[1];
    console.log("Token on backend is:", token);

    if (token) {
        jwt.verify(token, 'my key', (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Unauthorized' });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
}

module.exports = { isAuthenticated };