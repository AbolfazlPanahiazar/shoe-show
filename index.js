const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Routes = require("./routes");
const Router = require("./routes");

// configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db
const dbUrl = process.env.DB_URL + process.env.DB_NAME;
console.log(dbUrl);
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
  console.log("db connected.");
}).catch((error) => {
  console.log("db not connected.");
  console.log(error);
});

// routes
app.use(Routes);

// create server
const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) return console.log(error);
  console.log(`server is listening on port ${port}`);
});
