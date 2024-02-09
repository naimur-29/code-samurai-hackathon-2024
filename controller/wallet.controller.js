const UserModel = require("../models/user.model");

// get wallet balance:
const getWallet = async (req, res) => {
  try {
    const walletId = req.params.wallet_id;
    const user = await UserModel.findOne({ user_id: walletId });
    if (!user)
      return res
        .status(404)
        .json({ message: `wallet with id: ${walletId} was not found` });

    const response = {
      wallet_id: user.user_id,
      balance: user.balance,
      wallet_user: {
        user_id: user.user_id,
        user_name: user.user_name,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

// updates user (recharge wallet):
const rechargeWallet = async (req, res) => {
  try {
    const walletId = req.params.wallet_id;
    const updateData = req.body;
    const rechargeAmount = updateData.recharge;

    if (!rechargeAmount || rechargeAmount < 100 || rechargeAmount > 10000)
      return res
        .status(400)
        .json({ message: `invalid amount: ${rechargeAmount}` });

    const updatedUser = await UserModel.findOneAndUpdate(
      { user_id: walletId },
      { $inc: { balance: rechargeAmount } },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: `wallet with id: ${walletId} was not found` });
    }

    const response = {
      wallet_id: updatedUser.user_id,
      balance: updatedUser.balance,
      wallet_user: {
        user_id: updatedUser.user_id,
        user_name: updatedUser.user_name,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error updating wallet:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getWallet, rechargeWallet };
