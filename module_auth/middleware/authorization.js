const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, "1234");
};

const authorization = (req, res, next) => {
  console.log("hi");
  try {
    console.log("req", req);

    const bearerToken = req?.headers?.authorization;

    console.log("Authorization", bearerToken);

    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
      return res
        .status(400)
        .json({ message: "Please provide a valid token", status: "Failed" });
    }

    const token = bearerToken.split(" ")[1];

    let user;
    try {
      user = verifyToken(token);
    } catch (e) {
      return res
        .status(400)
        .json({ message: "Please provide a valid token", status: "Failed" });
    }

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", status: "Failed" });
    }

    req.user = user.user;

    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

module.exports = authorization;
