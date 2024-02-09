const UserModel = require("../models/user.model");

// post users:
const addUser = async (req, res) => {
  try {
    const data = req.body;
    await UserModel.create(data);

    res.status(201).json(data);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

module.exports = { addUser };
