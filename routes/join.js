var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('join', { title: 'Telephone' });
});


module.exports = router;
