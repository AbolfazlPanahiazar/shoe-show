const express = require("express");
const Router = express.Router();

const adminRouter = require("./admin");
const appRouter = require("./app");

Router.use("/admin", adminRouter);
Router.use("/app", appRouter);

module.exports = Router;