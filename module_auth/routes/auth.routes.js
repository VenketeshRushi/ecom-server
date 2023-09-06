const express = require("express");
const router = express.Router();
const passport = require("passport");

const handleErrors = require("../middleware/handleErrors");
const authorization = require("../middleware/authorization");
const UserController = require("../controllers/UserController");

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

// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/fail" }),
//   function (req, res) {
//     res.redirect(`http://localhost:5173/ecom-client`);
//   }
// );

// router.get("/fail", (req, res) => {
//   res.redirect(`http://localhost:5173/ecom-client/login`);
// });

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;
