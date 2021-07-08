const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
    res.send("admin route");
});

module.exports = adminRouter;