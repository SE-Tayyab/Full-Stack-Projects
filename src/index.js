import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("app is running on port :", process.env.PORT);
      app.on("error", (error) => {
        console.log("error", error);
        throw error;
      });
    });
  })
  .catch((err) => {
    console.log("there is an error and mongodb connection failed", err);
  });
