const express = require("express");
const cors = require("cors");

const AuthApiRoutes = require("./module_auth/routes/auth.routes");
const ProductApiRoutes = require("./module_product/routes/product.routes");
const CartApiRoutes = require("./module_cart/routes/cart.routes");
const FavouriteApiRoutes = require("./module_favourite/routes/favourite.routes");
const OrderApiRoutes = require("./module_order/routes/order.routes");
const paymentController = require("./payment.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthApiRoutes);
app.use("/product", ProductApiRoutes);
app.use("/cart", CartApiRoutes);
app.use("/favourite", FavouriteApiRoutes);
app.use("/order", OrderApiRoutes);

//Razorpay payment
app.use("/api/payment", paymentController);

app.listen(8000, async () => {
  try {
    console.log(`Server ready at: http://localhost:8000`);
  } catch (error) {
    console.log(error);
  }
});
