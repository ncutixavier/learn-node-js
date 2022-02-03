import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || "development";

try {
  if (mode === "development") {
    mongoose
      .connect(process.env.DEVELOPMENT_DB, { useNewUrlParser: true })
      .then((result) => {
        console.log("DEV DB Connected");
      });
  } else if (mode === "test") {
    mongoose
      .connect(process.env.TEST_DB, { useNewUrlParser: true })
      .then((result) => {
        console.log("TEST DB Connected");
      });
  } else if (mode === "production") {
    mongoose
      .connect(process.env.PRODUCTION_DB, { useNewUrlParser: true })
      .then((result) => {
        console.log("PROD DB Connected");
      });
  }
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());

  app.get("/", (req, res) => {
    res.json({ message: "Learn node js with express" });
  });

  app.use("/api/v1/", routes);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
  });

  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}

export default app;
