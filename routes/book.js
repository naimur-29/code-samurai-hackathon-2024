const express = require('express');
const BookModel = require('../models/book');

const router = express.Router();
router.get("/", async (req, res) => {
	try {
		res.json({message: "welcome to code samurai 2024"});
	} catch(err) {
		res.status(500).json({error: err.message});
	}
});

module.exports = router;
