const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const multer = require("multer");

const authorization = require("../../module_auth/middleware/authorization");
const userController = require("../controllers/userDetails");

// HANDLING ERRORS
router.use(authorization);


// MULTER
const DIR = "./uploads";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    const uniqueSuffix = crypto.randomBytes(16).toString("hex");
    cb(null, uniqueSuffix + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .png, .jpg and .jpeg format allowed!"), false);
    }
  },
});

// TO ADD USER IMAGE
router.post(
  "/adduserimage",
  authorization,
  upload.single("imgCollection"),
  userController.addUserImage
);

// Update User Details
router.post(
  "/updateusernotificationdetails",
  authorization,
  userController.updateUserNotificationDetails
);

module.exports = router;
