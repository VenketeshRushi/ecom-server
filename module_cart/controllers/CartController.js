const prisma = require("../../db.server");

exports.addToCart = async (req, res, next) => {
  const productdata = req.body.data;

  try {
    const cartItem = await prisma.userCart.create({
      ...req.body,
      user: req.user.id,
    });
    return res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    next(error);
  }
};

exports.getAllCartProducts = async (req, res, next) => {
  try {
    const favorites = await prisma.userCart.findMany({
      where: {
        user: { id: req.user.id },
      },
    });

    return res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};

