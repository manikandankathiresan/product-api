// Express Framework
const express = require("express");
const mongooes = require("mongoose"); // mongodb connect with mongoose
const createError = require("http-errors");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongodb connection
mongooes
  .connect(
    "mongodb+srv://mkprofile:mkprofile98@restfull.pyisptv.mongodb.net/?retryWrites=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongodb Connected...");
  });

const products = require("./src/Routes/product-routes");

// Get Method
app.get("/", (req, res, next) => {
  res.send("Home route");
});

// Product Routes
app.use("/products", products);

// Error handling custom
app.use((req, res, next) => {
  // const err = new Error("Not Found"); // create custom error with message
  // err.status = 404;
  // next(err);

  next(createError(404, "Not found"));
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
