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

// exports.createOrder = async (req, res, next) => {
//   const {
//     orderSummary,
//     cartProducts,
//     shippingDetails,
//     paymentDetails,
//   } = req.body;
//   try {
//     const { subTotal,
//       quantity,
//       shipping,
//       discount,
//       total, } = orderSummary;
//     const { orderId, razorpayOrderId, razorpayPaymentId } = paymentDetails
//     const order = await prisma.order.create({
//       data: {
//         subTotal,
//         quantity,
//         shipping,
//         discount,
//         total,
//         userId: req.user.id,
//         PaymentDetails: {
//           razorpayOrderId: razorpayOrderId,
//           razorpayPaymentId: razorpayPaymentId
//         },
//         ShippingDetails: shippingDetails,
//         cartProducts
//       }
//     });

//     return res.status(201).json(order);
//   } catch (error) {
//     console.log("error", error)
//     next(error);
//   }
// };

exports.createOrder = async (req, res, next) => {
  const { orderSummary, cartProducts, shippingDetails, paymentDetails } = req.body;
  try {
    const { subTotal, quantity, shipping, discount, total } = orderSummary;

    let UpdatedCartProducts = cartProducts.map((ele) => {
      delete ele.orderId
      return ele
    })

    // Create PaymentDetail record
    const createdPaymentDetail = await prisma.paymentDetail.create({
      data: {
        razorpayOrderId: paymentDetails.razorpayOrderId,
        razorpayPaymentId: paymentDetails.razorpayPaymentId,
      },
    });

    // Create Order record with associated PaymentDetail, ShippingDetails, and CartProducts
    const order = await prisma.order.create({
      data: {
        subTotal,
        quantity,
        shipping,
        discount,
        total,
        userId: req.user.id,
        PaymentDetails: {
          connect: {
            id: createdPaymentDetail.id,
          },
        },
        ShippingDetails: {
          create: shippingDetails,
        },
        cartProducts: {
          create: UpdatedCartProducts,
        },
      },
      include: {
        PaymentDetails: true,
        ShippingDetails: true,
        cartProducts: true,
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
