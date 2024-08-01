const Router = require("express");
const { getAllUsers } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", getAllUsers);

module.exports = userRouter;