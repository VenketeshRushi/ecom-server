const prisma = require("../../db.server.postgres");

// exports.getOrders = async (req, res, next) => {
//   try {
//     let ordersDetails = [];
//     const orders = await prisma.order.findMany({
//       where: {
//         userId: req.user.id,
//       },
//     });
//     console.log("orders", orders);
//     const orderedProducts = await prisma.orderedProduct.findMany({
//       where: {
//         orderId: orders.id,
//       },
//     });

//     console.log("orderedProducts", orderedProducts);

//     const shippingDetails = await prisma.shippingDetail.findMany({
//       where: {
//         orderId: orders.id,
//       },
//     });

//     console.log("shippingDetails", shippingDetails);

//     res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        PaymentDetails: true,
        ShippingDetails: true,
        OrderedProducts: true,
      },
    });

    // console.log("orders", orders);

    const formattedOrders = orders.map((order) => {
      const formattedProducts = order.OrderedProducts.map((product) => ({
        id: product.id,
        title: product.title,
        gender: product.gender,
        description: product.description,
        category: product.category,
        price: product.price,
        size: product.size,
        color: product.color,
        ratings: product.ratings,
        img: product.img,
        quantity: product.quantity,
        orderId: product.orderId,
      }));

      return {
        id: order.id,
        subTotal: order.subTotal,
        quantity: order.quantity,
        shipping: order.shipping,
        discount: order.discount,
        total: order.total,
        userId: order.userId,
        PaymentDetails: order.PaymentDetails,
        ShippingDetails: order.ShippingDetails,
        cartProducts: formattedProducts,
        createdAt: order.createdAt,
      };
    });

    res.status(200).json(formattedOrders);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  const { orderSummary, cartProducts, shippingDetails, paymentDetails } =
    req.body;
  try {
    const { subTotal, quantity, shipping, discount, total } = orderSummary;
    const { orderId, razorpayOrderId, razorpayPaymentId } = paymentDetails;

    const orderedProducts = cartProducts.map((product) => {
      const {
        id,
        title,
        gender,
        description,
        category,
        price,
        size,
        color,
        ratings,
        img,
        quantity,
      } = product;
      return {
        id,
        title,
        gender,
        description,
        category,
        price,
        size,
        color,
        ratings,
        img,
        quantity,
      };
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
          create: shippingDetails,
        },
        OrderedProducts: {
          createMany: {
            data: orderedProducts,
          },
        },
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
