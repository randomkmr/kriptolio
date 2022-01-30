const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

const isAuthenticatedCookie = (req, res, next) => {
  try {
    console.log("Authentication..");
    const token = req.cookies.authtoken;
    const decodedToken = jwt.verify(token, secretKey);
    console.log("decodedToken", decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    console.log("decodedToken", decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = isAuthenticated;
//module.exports = isAuthenticatedCookie
