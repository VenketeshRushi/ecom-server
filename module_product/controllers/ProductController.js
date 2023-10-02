const prisma = require("../../db.server");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({});
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
exports.getAllProducts = async (req, res, next) => {
  try {
    const { pagename } = req.query;
    let products;

    if (pagename && pagename !== "sale") {
      products = await prisma.product.findMany({
        where: {
          gender:
            pagename.charAt(0).toUpperCase() + pagename.slice(1).toLowerCase(),
        },
      });
    } else {
      products = await prisma.product.findMany({});
    }

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
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.addToCart = async (req, res, next) => {
  const productdata = req.body.data;

  try {
    const cartItem = await prisma.order.create({
      ...req.body,
      user: req.user.id,
    });
    return res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    next(error);
  }
};

exports.addOrder = async (req, res, next) => {
  try {
    const order = await prisma.order.create({
      ...req.body,
      user: req.user.id,
    });

    return res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

exports.addToFavorite = async (req, res, next) => {
  try {
    const favorite = await prisma.favorite.create({
      data: {
        ...req.body,
        user: { connect: { id: req.user.id } },
      },
    });

    return res.status(201).json(favorite);
  } catch (error) {
    next(error);
  }
};

exports.getAllFavorites = async (req, res, next) => {
  try {
    const favorites = await prisma.favorite.findMany({
      where: {
        user: { id: req.user.id },
      },
    });

    return res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};

exports.deleteFavorite = async (req, res, next) => {
  try {
    const { favoriteId } = req.params;

    // Check if the favorite belongs to the user before deleting
    const favorite = await prisma.favorite.findFirst({
      where: {
        id: favoriteId,
        user: { id: req.user.id },
      },
    });

    if (!favorite) {
      return res.status(404).json({
        message: "Favorite not found or does not belong to the user.",
      });
    }

    await prisma.favorite.delete({
      where: {
        id: favoriteId,
      },
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    if (!Array.isArray(req.body.data)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    for (let i = 0; i < req.body.data.length; i++) {
      await prisma.product.create({
        data: {
          ...req.body.data[i],
        },
      });
    }

    return res.status(201).json({ message: "Products created successfully" });
  } catch (error) {
    next(error);
  }
};

exports.filterProducts = async (req, res, next) => {
  try {
    const filterData = req.body.data;
    // console.log("req.body.data", req.body.data);

    const where = {};

    for (const category in filterData) {
      const subCategoryConditions = [];

      for (const subCategory in filterData[category]) {
        if (filterData[category][subCategory] === true) {
          subCategoryConditions.push(subCategory);
        }
      }

      if (subCategoryConditions.length > 0) {
        if (category.toLowerCase() === "size") {
          where[category.toLowerCase()] = {
            equals: subCategoryConditions,
          };
        } else {
          where[category.toLowerCase()] = {
            in: subCategoryConditions,
          };
        }
      }
    }

    // console.log("where", where);

    const filteredProducts = await prisma.product.findMany({
      where: where,
    });

    return res.status(200).json({
      message: "Products filtered successfully",
      products: filteredProducts,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message:
        "Products not found! Change the filter or click on the reset button to see products.",
    });
  }
};

exports.getSearchedProducts = async (req, res, next) => {
  const { query } = req.query;
  try {
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query.toLowerCase(),
          mode: "insensitive",
        },
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
