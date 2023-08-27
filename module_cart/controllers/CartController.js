const prisma = require("../../db.server");

exports.addToCart = async (req, res, next) => {
  const { operation, data } = req.body;

  try {
    const existingCartItem = await prisma.cartProduct.findUnique({
      where: {
        userId: req.user.id,
        id: data.id,
      },
    });
    console.log("existingCartItem", existingCartItem);

    if (operation === "add") {
      if (existingCartItem) {
        // Cart item already exists, update quantity
        const updatedCartItem = await prisma.cartProduct.update({
          where: {
            userId: req.user.id,
            id: data.id,
          },
          data: {
            quantity: existingCartItem.quantity + 1,
          },
        });

        console.log("updatedCartItem", updatedCartItem);

        return res
          .status(200)
          .json({ message: "Product quantity updated in cart" });
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

        console.log("created cart item", cartItem);

        return res.status(200).json({ message: "Product added to cart" });
      }
    } else if (operation === "remove") {
      if (existingCartItem && existingCartItem.quantity > 1) {
        // Cart item exists and quantity > 1, update quantity
        const updatedCartItem = await prisma.cartProduct.update({
          where: {
            userId: req.user.id,
            id: data.id,
          },
          data: {
            quantity: existingCartItem.quantity - 1,
          },
        });

        console.log("updatedCartItem", updatedCartItem);

        return res
          .status(200)
          .json({ message: "Product quantity updated in cart" });
      } else if (existingCartItem && existingCartItem.quantity === 1) {
        // Cart item exists and quantity is 1, delete it
        await prisma.cartProduct.delete({
          where: {
            userId: req.user.id,
            id: data.id,
          },
        });

        return res.status(200).json({ message: "Product removed from cart" });
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
  console.log("in")
  try {
    const products = await prisma.cartProduct.findMany({
      where: {
        user: { id: req.user.id },
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
