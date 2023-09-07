const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../controllers/passport");
const session = require("express-session");

const handleErrors = require("../middleware/handleErrors");
const UserController = require("../controllers/UserController");

router.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

router.use(passport.initialize());
router.use(passport.session());

// HANDLING ERRORS
router.use(handleErrors);

// REGISTER NEW USER
router.post("/register", UserController.signup);

// LOGIN USING EMAIL/PASSWORD
router.post("/login", UserController.login);

// SEND PASSWORD RESET OTP
router.post("/sendotp", UserController.checkMailAndSendOTP);

// RESET PASSWORD
router.post("/resetpassword", UserController.resetPassword);

// UPDATE USER PROFILE
// router.put("/profile", authorization, UserController.updateProfile);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/fail" }),
  function (req, res) {
    res.redirect(`https://venketeshrushi.github.io/ecom-client/`);
  }
);

router.get("/fail", (req, res) => {
  res.redirect(`https://venketeshrushi.github.io/ecom-client/login`);
});

module.exports = router;
