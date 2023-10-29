const prisma = require("../../db.server.postgres");

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany();

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
