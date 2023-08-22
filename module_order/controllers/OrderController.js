const prisma = require("../../db.server");

exports.createOrder = async (req, res, next) => {
  try {
    const { orderSummary, cartProducts, shippingDetails, paymentDetails } =
      req.body;

    const createdOrder = await prisma.order.create({
      data: {
        subTotal: orderSummary.subTotal,
        quantity: orderSummary.quantity,
        shipping: orderSummary.shipping,
        discount: orderSummary.discount,
        total: orderSummary.total,
        user: {
          connect: { id: req.user.id },
        },
        PaymentDetails: {
          create: {
            razorpayOrderId: paymentDetails.razorpayOrderId,
            razorpayPaymentId: paymentDetails.razorpayPaymentId,
          },
        },
        ShippingDetails: {
          create: {
            firstName: shippingDetails.firstName,
            lastName: shippingDetails.lastName,
            addressLine1: shippingDetails.addressLine1,
            addressLine2: shippingDetails.addressLine2,
            locality: shippingDetails.locality,
            pinCode: shippingDetails.pinCode,
            state: shippingDetails.state,
            country: shippingDetails.country,
            email: shippingDetails.email,
            mobile: shippingDetails.mobile,
          },
        },
        cartProducts: {
          create: cartProducts.map((product) => ({
            title: product.title,
            gender: product.gender,
            description: product.description,
            category: product.category,
            price: product.price,
            size: product.size,
            color: product.color,
            rating: product.rating,
            img: product.img,
            quantity: product.quantity,
            user: {
              connect: { id: req.user.id },
            },
          })),
        },
      },
    });

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

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
