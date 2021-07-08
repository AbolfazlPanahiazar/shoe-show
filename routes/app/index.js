const express = require("express");
const appRouter = express.Router();

appRouter.get("/", (req, res) => {
    res.send("app route")
});

module.exports = appRouter;