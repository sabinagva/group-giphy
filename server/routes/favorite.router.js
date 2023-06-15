const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const axios = require('axios');
const { Pool } = require('pg');

const router = express.Router();

// return all favorite images
router.get(`/:search`, (req, res) => {
  console.log('req.params.search is:', req.params.search)
  const searchInput = req.params.search
  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchInput}&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`)
  .then(response => {
    res.send(response.data);
    // res.sendStatus(200);
  })
  .catch(error => {
    console.log('error getting on server', error)
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {  
  const newFav = req.body 
  const sqlQuery = `INSERT INTO "favorite" ("url")
                      VALUES ($1)`
  pool.query(sqlQuery, newFav.url)
  .then(()=>{
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error posting on server', error)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const putValue = req.body.catId
  console.log('reqbody catid',putValue);
  const idToUpdate = req.params.favId
  console.log('idtoupdate',idToUpdate);
  const putQuery = `UPDATE favorite SET category_id = $2 WHERE id = $1`;
  pool.query(putQuery, [idToUpdate, putValue])
  .then((response)=>{
    console.log('PUT SUCCESS', response);
    res.sendStatus(200);
  }).catch((err)=>{
    console.log('Issue with the PUT', err);
    res.sendStatus(500);
  })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
