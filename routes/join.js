var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('join', { title: 'Telephone' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.roomname)
  console.log(req.body.password)
  console.log(req.body.playername)
  res.render('join', { title: 'Telephone' });
});


module.exports = router;
