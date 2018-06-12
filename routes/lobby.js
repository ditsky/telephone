var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('lobby', { title: 'Telephone' });
});


module.exports = router;
