const express = require("express");
const router = express.Router();

const handleErrors = require("../middleware/handleErrors");
const UserController = require("../controllers/UserController");
const authorization = require("../middleware/authorization");

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

// ADD LOCATION
router.post("/addlocation", UserController.saveLocation);

// GET LOCATION
router.get("/getlocation", UserController.getLocation);

// const passport = require("passport");
// require("../controllers/passport");
// const session = require("express-session");
// const jwt = require("jsonwebtoken");

// router.use(
//   session({
//     secret: "token",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

// router.use(passport.initialize());
// router.use(passport.session());

// UPDATE USER PROFILE
// router.put("/profile", authorization, UserController.updateProfile);

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     const token = jwt.sign({ user: req.user }, "your-secret-key");
//     res.cookie("locale", JSON.stringify(token));
//     res.status(200).json({
//       error: false,
//       message: "Successfully Loged In",
//       user: req.user,
//     });
//   } else {
//     res.status(403).json({ error: true, message: "Not Authorized" });
//   }
// });

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     error: true,
//     message: "Log in failure",
//   });
// });

// router.get("/google", passport.authenticate("google", ["profile", "email"]));

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:5173/ecom-client",
//     failureRedirect: "/login/failed",
//   }),
//   (req, res) => {
//     console.log("req.user", req);
//   }
// );

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(process.env.CLIENT_URL);
// });

module.exports = router;
