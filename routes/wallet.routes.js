const express = require("express");
const {
  getWallet,
  rechargeWallet,
} = require("../controller/wallet.controller");

const router = express.Router();

router.get("/wallets/:wallet_id", getWallet);
router.put("/wallets/:wallet_id", rechargeWallet);

module.exports = router;
