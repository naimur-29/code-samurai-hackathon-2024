const express = require("express");
const { addTrain } = require("../controller/train.controller");

const router = express.Router();

router.post("/trains", addTrain);

module.exports = router;
