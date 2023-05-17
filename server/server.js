import express from "express";
import "dotenv/config";
import connectToDB from "./src/database/ConnectDb.js";

import cors from "cors";
import router from "./src/router/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const port = 3003;

async function startServer() {
  try {
    await connectToDB();
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}
startServer();
