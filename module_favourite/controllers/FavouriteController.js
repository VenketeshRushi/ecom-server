const prisma = require("../../db.server");

exports.addToFavorite = async (req, res, next) => {
  try {
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        id: req.body.id,
        userId: req.user.id,
      },
    });

    if (existingFavorite) {
      return res
        .status(200)
        .json({ message: "Product Already Present Favorite" });
    } else {
      delete req.body.cartProductId;
      delete req.body.quantity;
      delete req.body.orderId;
      delete req.body.userId;

      const newFavorite = await prisma.favorite.create({
        data: {
          ...req.body,
          size: [...req.body.size],
          user: { connect: { id: req.user.id } },
        },
      });

      return res.status(201).json({ message: "Product Added To Favorite" });
    }
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
  const { id } = req.params;
  try {
    // Check if the favorite belongs to the user before deleting
    // const favorite = await prisma.favorite.findFirst({
    //   where: {
    //     id: +id,
    //     user: { id: req.user.id },
    //   },
    // });

    // if (!favorite) {
    //   return res.status(404).json({
    //     message: "Favorite not found or does not belong to the user.",
    //   });
    // }

    await prisma.favorite.delete({
      where: {
        id: +id,
        userId: req.user.id,
      },
    });

    return res.status(204).json({ message: "Product Removed From Favorite" });
  } catch (error) {
    next(error);
  }
};
