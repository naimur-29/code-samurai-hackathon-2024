const mongoose = require("mongoose");
const UserSchema = require("../schema/user.schema");

const UserModel = new mongoose.model("User", UserSchema);

module.exports = UserModel;
