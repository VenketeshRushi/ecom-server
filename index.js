const express = require("express");
const cors = require("cors");

const prisma = require("./db.server");

const AuthApiRoutes = require("./module_auth/routes/auth.routes");
const ProductApiRoutes = require("./module_product/routes/product.routes");
const FavouriteApiRoutes = require("./module_favourite/routes/favourite.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthApiRoutes);
app.use("/product", ProductApiRoutes);
app.use("/favourite", FavouriteApiRoutes);

app.listen(8000, async () => {
  try {
    console.log(`Server ready at: http://localhost:8000`);
  } catch (error) {
    console.log(error);
  }
});
