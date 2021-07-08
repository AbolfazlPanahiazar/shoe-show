const express = require("express");
const loginRouter = express.Router();

const { signUP } = require("../../../controller/app/loginController");

loginRouter.post("/signup", signUP);

loginRouter.get("/", (req, res) => {
    res.send("login route");
});

module.exports = loginRouter;