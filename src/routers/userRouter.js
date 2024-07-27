const Router = require("express");
const { getAllUsers } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/getAllUsers", getAllUsers);

module.exports = userRouter;