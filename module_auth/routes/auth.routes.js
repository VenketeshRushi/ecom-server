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

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", { failureRedirect: "auth/fail" }),
//   function (req, res) {
//     const { user, token } = req.user;
//     console.log("info", user, token, req.user);

//     res.redirect(`http://localhost:5173/ecom-client`);
//   }
// );

// router.get("/fail", (req, res) => {
//   res.redirect(`http://localhost:5173/ecom-client/login`);
// });

// router.get("/login/success", (req, res) => {
//   const { user, token } = req.user;
//   console.log("info", user, token, req.user);
//   if (req.user) {
//     res.status(200).json({
//       error: false,
//       message: "Successfully Loged In",
//       user: user,
//       token: token,
//     });
//   } else {
//     res.status(403).json({ error: true, message: "Not Authorized" });
//   }
// });

router.get("/login/success", (req, res) => {
  if (req.user) {
    console.log("req.user", req.user);
    res.cookie("locale", JSON.stringify());
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/ecom-client",
    failureRedirect: "/login/failed",
  }),
  () => {
    console.log("req.user", req.user);
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
