const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    const data = users.map((user) => {
      return {
        email: user.email
      };
    });

    res.status(200).json({
      status: "get all users successfully",
      data: users,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Can not get all users");
  }
};

module.exports = {
  getAllUsers,
};
