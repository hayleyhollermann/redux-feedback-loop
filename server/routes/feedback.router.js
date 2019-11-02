const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET



// POST
router.post('/', (req, res) => {
  console.log('In feedback POST with', req.body);
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
  .then(() => {
      res.sendStatus(200)
  }).catch((error) => {
      res.sendStatus(500)
  })
})

// PUT



// DELETE



module.exports = router;