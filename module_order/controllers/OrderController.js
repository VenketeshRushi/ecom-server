const prisma = require("../../db.server");

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  const { orderSummary, cartProducts, shippingDetails, paymentDetails } = req.body;
  try {
    const { subTotal, quantity, shipping, discount, total } = orderSummary;
    const { orderId, razorpayOrderId, razorpayPaymentId } = paymentDetails;

    let UpdatedCartProducts = cartProducts.map((ele) => {
      delete ele.cartProductId;
      delete ele.userId;
      return ele;
    });

    // Create Order record and associate it with the PaymentDetails record
    const order = await prisma.order.create({
      data: {
        subTotal,
        quantity,
        shipping,
        discount,
        total,
        userId: req.user.id,
        PaymentDetails: {
          create: {
            razorpayOrderId,
            razorpayPaymentId,
          },
        },
        ShippingDetails: {
          create: shippingDetails
        },
        OrderedProducts: [...UpdatedCartProducts],
      },
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error("error", error);
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
