const express = require("express");
const cors = require("cors");

const AuthApiRoutes = require("./module_auth/routes/auth.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthApiRoutes);

app.listen(8000, async () => {
  try {
    console.log(`Server ready at: http://localhost:8000`);
  } catch (error) {
    console.log(error);
  }
});
