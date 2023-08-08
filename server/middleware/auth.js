const jwt = require("jsonwebtoken");
const config = require("../config/dev");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(token);
  if (!token) return res.status(401).send("Access denied. go to /signin");
  try {
    const decoded = jwt.verify(token, config.jwt_token);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Access denied. go to /signup");
  }
};

module.exports.checkAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({
      status: "fail",
      message: "You do not have permission to perform this action",
    });
  }
  next();
};

module.exports.checkChecked = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  }
  if (!req.user.checked) {
    return res.status(403).json({
      status: "fail",
      message: "You do not have permission to perform this action",
    });
  }
  next();
};
