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
        id: "desc",
      },
    });
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.getSingleProduct = async (req, res, next) => {
  const id = +req.params.id;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.addToCart = async (req, res, next) => {
  const productdata = req.body.data; 

  try {
    // Add your logic here to add the product to the cart database
    return res.status(200).json({ message: 'Product added to cart' });
  } catch (error) {
    next(error);
  }
};

