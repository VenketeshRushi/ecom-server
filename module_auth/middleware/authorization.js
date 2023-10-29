const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, "1234");
};

const authorization = (req, res, next) => {
  console.log("User logged in");
  // Cookies that have not been signed
  console.log("Cookies: ", JSON.stringify(req.cookies));

  // Cookies that have been signed
  console.log("Signed Cookies: ", JSON.stringify(req.signedCookies));
  try {
    const bearerToken = req?.headers?.authorization;

    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {

      // Iterate through all cookies and clear them by setting their value to null and their expiration date to the past
      // Object.keys(req.cookies).forEach((cookieName) => {
      //   res.cookie(cookieName, null, { expires: new Date(0), path: "/" });
      // });

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
