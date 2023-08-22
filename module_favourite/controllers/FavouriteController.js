const prisma = require("../../db.server");

exports.addToFavorite = async (req, res, next) => {
  console.log("body", req.body);
  console.log("user", req.user);
  try {
    const favorite = await prisma.favorite.create({
      data: {
        ...req.body,
        user: { connect: { id: req.user.id } },
      },
    });

    return res.status(201).json(favorite);
  } catch (error) {
    next(error);
  }
};

exports.getAllFavorites = async (req, res, next) => {
  try {
    const favorites = await prisma.favorite.findMany({
      where: {
        user: { id: req.user.id },
      },
    });

    return res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};

exports.deleteFavorite = async (req, res, next) => {
  try {
    const { favoriteId } = req.params;

    // Check if the favorite belongs to the user before deleting
    const favorite = await prisma.favorite.findFirst({
      where: {
        id: favoriteId,
        user: { id: req.user.id },
      },
    });

    if (!favorite) {
      return res.status(404).json({
        message: "Favorite not found or does not belong to the user.",
      });
    }

    await prisma.favorite.delete({
      where: {
        id: favoriteId,
      },
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
