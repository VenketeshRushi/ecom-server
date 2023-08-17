const prisma = require("../../db.server");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
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
    console.log("API Response:", JSON.stringify(products, null, 2))
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
