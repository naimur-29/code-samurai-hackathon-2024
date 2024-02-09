const express = require("express");

const router = express.Router();

router.post("/tickets", async (req, res) =>
  res.status(404).json({ message: "not implemented!" })
);

module.exports = router;
