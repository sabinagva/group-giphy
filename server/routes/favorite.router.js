const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const axios = require('axios')

const router = express.Router();

// return all favorite images
router.get(`/`, (req, res) => {
  const searchInput = req.body.input
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchInput}&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`)
  .then(response => {
    res.send(response.data);
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error getting on server', error)
    res.sendStatus(500);
  })
  
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
