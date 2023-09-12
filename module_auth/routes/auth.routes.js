const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../controllers/passport");
const session = require("express-session");

const handleErrors = require("../middleware/handleErrors");
const UserController = require("../controllers/UserController");

router.use(
  session({
    secret: "token",
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
    const { user, token } = req.user;
    console.log("info", user, token, req.user);

    res.redirect(`http://localhost:5173/ecom-client`);
  }
);

router.get("/fail", (req, res) => {
  res.redirect(`http://localhost:5173/ecom-client/login`);
});

module.exports = router;
