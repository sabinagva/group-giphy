const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const { Pool } = require("pg");
const router = express.Router();

router.get(`/:search`, (req, res) => {
	console.log("req.params.search is:", req.params.search);
	const searchInput = req.params.search;
	axios
		.get(
			`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchInput}&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`
		)
		.then((response) => {
			res.send(response.data);
			// res.sendStatus(200);
		})
		.catch((error) => {
			console.log("error getting on server", error);
			res.sendStatus(500);
		});
});



module.exports = router;
