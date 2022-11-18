const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(200, 'TODO LIST APP')
});

/* GET login page. */
router.get('/auth',(req, res, next) => {
  res.send(200, 'TODO LIST APP')
});

module.exports = router;
