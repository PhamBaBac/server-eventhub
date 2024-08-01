const express = require("express");
const cors = require("cors");
const connectDB = require("./src/configs/connectDB");
require("dotenv").config();

const authRouter = require("./src/routers/authRouter");
const userRouter = require("./src/routers/userRouter");
const errorMiddleHandle = require("./src/middlewares/errorMiddleware");
const verifyToken = require("./src/middlewares/verifyMiddleware");
const { eventRouter } = require("./src/routers/eventRouter");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/user",verifyToken,userRouter);
app.use("/api/v1/event",verifyToken ,eventRouter);
app.use(errorMiddleHandle);

connectDB();

app.listen(PORT, () => {
  console.log("Server Started in", PORT);
});
