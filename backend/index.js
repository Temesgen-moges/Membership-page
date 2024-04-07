import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import keycloak from "./middleware/Keycloak.js";
import userRoute from "./routes/User.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(keycloak.middleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Use body-parser middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/user",userRoute)
app.use("/add",userRoute);



const errorHandler = (error, req, res, next) => {
  const status = error.status || 422;
  res.status(status).send(error.message);
}
app.use(errorHandler);
// Start the server
const PORT = process.env.PORT;

const url= process.env.URI
mongoose
  .connect(url)
  .then(() => console.log("mongodb connected successfully"))
  .catch((error) => console.log(error.message));
app.listen(PORT, console.log(`server is running on port ${PORT}`));