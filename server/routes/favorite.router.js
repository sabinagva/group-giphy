const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/fav/new', (req, res) =>{
  console.log('IN FAVORITE GET');
  const getQuery = `SELECT * FROM favorite ORDER BY id DESC;`

  pool.query(getQuery)
  .then((result)=>{
    console.log('Favorites GET success', result);
    res.send(result.rows)
  }).catch((err)=>{
    console.log('Error with favorites GET', err);
    res.sendStatus(500)
  })
});

//return search endpoint results


// add a new favorite
router.post('/', (req, res) => {
  console.log('WERE IN THE POST');
  const newFav = req.body
  const sqlQuery = `INSERT INTO "favorite" ("url")
                      VALUES ($1)`
  pool.query(sqlQuery,[ newFav.url])
  .then(()=>{
    console.log("THE POST WAS SUCCESSFUL");
    res.sendStatus(201);
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
