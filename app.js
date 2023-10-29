var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var session = require("express-session");
const MemoryStore = require("memorystore")(session);

const AuthApiRoutes = require("./module_auth/routes/auth.routes");
const ProductApiRoutes = require("./module_product/routes/product.routes");
const CartApiRoutes = require("./module_cart/routes/cart.routes");
const FavouriteApiRoutes = require("./module_favourite/routes/favourite.routes");
const OrderApiRoutes = require("./module_order/routes/order.routes");
const UserApiRoutes = require("./module_user/routes/user.routes");
const AdminOrderApiRoutes = require("./module_admin/routes/admin.routes");
const paymentController = require("./payment.controller");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// CORS
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Sessions
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "asdasdasdasdasd",
    store: new MemoryStore({
      checkPeriod: 86400000, // Prune expired entries every 24h (in milliseconds)
    }),
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/auth", AuthApiRoutes);
app.use("/product", ProductApiRoutes);
app.use("/cart", CartApiRoutes);
app.use("/favourite", FavouriteApiRoutes);
app.use("/order", OrderApiRoutes);
app.use("/user", UserApiRoutes);

// Admin routes
app.use("/admin", AdminOrderApiRoutes);

//Razorpay payment
app.use("/api/payment", paymentController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
