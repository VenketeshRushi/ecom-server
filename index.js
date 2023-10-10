const express = require("express");
const cors = require("cors");
const ejs = require("ejs");

const AuthApiRoutes = require("./module_auth/routes/auth.routes");
const ProductApiRoutes = require("./module_product/routes/product.routes");
const CartApiRoutes = require("./module_cart/routes/cart.routes");
const FavouriteApiRoutes = require("./module_favourite/routes/favourite.routes");
const OrderApiRoutes = require("./module_order/routes/order.routes");
const AdminOrderApiRoutes = require("./module_admin/routes/admin.routes");
const paymentController = require("./payment.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Specify the directory where your views (HTML or EJS files) are located
app.set("views", __dirname + "/views");


app.get("/", (req, res) => {
  res.render("offer",{seconds : 15});
});

app.use("/auth", AuthApiRoutes);
app.use("/product", ProductApiRoutes);
app.use("/cart", CartApiRoutes);
app.use("/favourite", FavouriteApiRoutes);
app.use("/order", OrderApiRoutes);

// Admin routes
app.use("/admin", AdminOrderApiRoutes);

//Razorpay payment
app.use("/api/payment", paymentController);

app.listen(8000, async () => {
  try {
    console.log(`Server ready at: http://localhost:8000`);
  } catch (error) {
    console.log(error);
  }
});
