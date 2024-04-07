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
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded for URL-encoded request bodies

// Use body-parser middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/hello", (req, res) => {
    res.send("Hello there");
});

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
const uri="mongodb://127.0.0.1:27017/LuckyNumber"
console.log("the url is: " + url);
console.log("the url is: " + PORT);
mongoose
  .connect(url)
  .then(() => console.log("mongodb connected successfully"))
  .catch((error) => console.log(error.message));
app.listen(PORT, console.log(`server is running on port ${PORT}`));