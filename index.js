const express = require("express");
const cors = require("cors");

const AuthApiRoutes = require("./module_auth/routes/auth.routes");
const prisma = require("./db.server");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthApiRoutes);

app.get("/getallproducts", async (req, res) => {
  try {
    let products = await prisma.product.findMany();
    res
      .status(201)
      .json({ data: products, message: "Product found successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error finding product" });
  }
});

app.listen(8000, async () => {
  try {
    console.log(`Server ready at: http://localhost:8000`);
  } catch (error) {
    console.log(error);
  }
});
