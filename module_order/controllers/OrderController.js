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
  const {
    orderSummary,
    cartProducts,
    shippingDetails,
    paymentDetails,
  } = req.body;
  try {
    // Create related records first, assuming they are in the correct shape in req.body
    // const createdShippingDetails = await prisma.shippingDetail.create({
    //   data: { ...shippingDetails },
    // });

    // const createdPaymentDetails = await prisma.paymentDetail.create({
    //   data: { ...paymentDetails },
    // });

    // const createdCartProducts = await prisma.cartProduct.createMany({
    //   data: cartProducts,
    // });

    // Create the order record with references to the related records
    // const order = await prisma.order.create({
    //   data: {
    //     subTotal,
    //     quantity,
    //     shipping,
    //     discount,
    //     total,
    //     userId: req.user.id,
    //     ShippingDetails: {
    //       connect: { id: createdShippingDetails.id },
    //     },
    //     PaymentDetails: {
    //       connect: { id: createdPaymentDetails.id },
    //     },
    //     cartProducts: {
    //       connect: createdCartProducts.map((product) => ({ id: product.id })),
    //     },
    //   },
    // });
    const { subTotal,
      quantity,
      shipping,
      discount,
      total, } = orderSummary;
    const { orderId, razorpayOrderId, razorpayPaymentId } = paymentDetails
    const order = await prisma.order.create({
      data: {
        subTotal,
        quantity,
        shipping,
        discount,
        total,
        userId: req.user.id,
        PaymentDetails: {
          razorpayOrderId: razorpayOrderId,
          razorpayPaymentId: razorpayPaymentId
        },
        ShippingDetails: shippingDetails,
        cartProducts
      }
    });

    return res.status(201).json(order);
  } catch (error) {
    console.log("error", error)
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
