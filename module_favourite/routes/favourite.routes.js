const express = require("express");
const router = express.Router();

const authorization = require("../../module_auth/middleware/authorization");
const FavouriteController = require("../controllers/FavouriteController");

// HANDLING ERRORS
router.use(authorization);

//ADD TO FAVOURITE
router.post("/add/favourite", FavouriteController.addToFavorite);

//GET TO FAVOURITE
router.get("/get/favourite", FavouriteController.getAllFavorites);

//DELETE TO FAVOURITE
router.delete(
  "/delete/favourite/:id",
  FavouriteController.deleteFavorite
);

module.exports = router;