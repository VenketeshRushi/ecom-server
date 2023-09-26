const prisma = require("../../db.server");

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        PaymentDetails: true,
        ShippingDetails: true,
        cartProducts: true,
      },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
