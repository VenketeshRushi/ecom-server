const prisma = require("../../db.server");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.getProductsByVerity = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      take: 4,
      orderBy: {
        id: 'desc',
      },
    });
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
