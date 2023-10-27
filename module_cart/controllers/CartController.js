const prisma = require("../../db.server");

exports.addToCart = async (req, res, next) => {
  const { operation, data } = req.body;

  try {
    const existingCartItem = await prisma.cartProduct.findMany({
      where: {
        userId: req.user.id,
        id: data.id,
      },
    });

    if (operation === "add") {
      if (existingCartItem.length > 0) {
        // Cart item already exists, update quantity
        const updatedCartItem = await prisma.cartProduct.update({
          where: {
            userId: req.user.id,
            cartProductId: data.cartProductId,
            id: data.id,

          },
          data: {
            quantity: existingCartItem[0].quantity + 1,
          },
        });

        const products = await prisma.cartProduct.findMany({
          where: {
            user: { id: req.user.id },

          },
        });

        return res.status(200).json({
          message: "Product quantity updated in cart",
          products: products,
        });
      } else {
        // Cart item doesn't exist, create new
        const cartItem = await prisma.cartProduct.create({
          data: {
            ...data,
            user: {
              connect: { id: req.user.id },
            },
          },
        });

        const products = await prisma.cartProduct.findMany({
          where: {
            userId: req.user.id,

          },
        });

        return res
          .status(200)
          .json({ message: "Product added to cart", products: products });
      }
    } else if (operation === "reduce") {
      if (existingCartItem.length > 0 && existingCartItem[0].quantity > 1) {
        // Cart item exists and quantity > 1, update quantity
        const updatedCartItem = await prisma.cartProduct.update({
          where: {
            userId: req.user.id,
            cartProductId: data.cartProductId,
            id: data.id,

          },
          data: {
            quantity: existingCartItem[0].quantity - 1,
          },
        });


        const products = await prisma.cartProduct.findMany({
          where: {
            userId: req.user.id,

          },
        });

        return res.status(200).json({
          message: "Product quantity updated in cart",
          products: products,
        });
      } else if (
        existingCartItem.length > 0 &&
        existingCartItem[0].quantity === 1
      ) {
        // Cart item exists and quantity is 1, delete it
        let deleteCartProduct = await prisma.cartProduct.delete({
          where: {
            userId: req.user.id,
            cartProductId: data.cartProductId,
            id: data.id,

          },
        });

        const products = await prisma.cartProduct.findMany({
          where: {
            userId: req.user.id,

          },
        });

        return res
          .status(200)
          .json({ message: "Product removed from cart", products: products });
      } else {
        // Cart item doesn't exist, nothing to remove
        return res.status(200).json({ message: "Product not found in cart" });
      }
    } else {
      return res.status(400).json({ message: "Invalid operation" });
    }
  } catch (error) {
    next(error);
  }
};

exports.getAllCartProducts = async (req, res, next) => {
  try {
    const products = await prisma.cartProduct.findMany({
      where: {
        userId: req.user.id,

      },
    });

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.deleteCartProduct = async (req, res, next) => {
  try {
    const cartProductIdToDelete = +req.params.cartProductId;
    const id = +req.params.id;


    const deletedProduct = await prisma.cartProduct.delete({
      where: {
        id: id,
        cartProductId: cartProductIdToDelete,
        userId: req.user.id,

      },
    });


    const products = await prisma.cartProduct.findMany({
      where: {
        userId: req.user.id,
      },
    });

    return res.status(200).json({
      message: "Product deleted successfully",
      products: products,
    });
  } catch (error) {
    next(error);
  }
};
