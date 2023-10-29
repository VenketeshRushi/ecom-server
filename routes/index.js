var express = require("express");
var router = express.Router();
const authorization = require("../module_auth/middleware/authorization");

/* GET home page. */
router.get("/", authorization, function (req, res, next) {
  // res.cookie("Testing", "kdjaincla.kmsodinol")

  console.log("welcome");

  // Cookies that have not been signed
  console.log("Cookies: ", JSON.stringify(req.cookies));

  // Cookies that have been signed
  console.log("Signed Cookies: ", JSON.stringify(req.signedCookies));

  res.render("index", { title: "Nike Clone!" });
});

module.exports = router;
