const express = require("express");
const appRouter = express.Router();

const loginRouter = require("./login");

appRouter.use("/login", loginRouter)

module.exports = appRouter;