const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    // Check if the Authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "No token, authorization denied!" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verify token and attach the decoded payload to req.user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        // console.log("The decoded user is:", req.user);
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        res.status(400).json({ message: "Token is not valid!" });
    }
};


module.exports = verifyToken;


