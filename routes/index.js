let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Calculate age
  let born = 936921600000;
  let age = new Date().getTime() - born;
  let msPerYear = 31536000000;

  res.render('index', { title: 'Erik Roberts | Portfolio', age: Math.floor(age / msPerYear)});
});

module.exports = router;
