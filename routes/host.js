var express = require('express');
var router = express.Router();
/*
const fs = require('fs');
const PlayerName = require('../models/PlayerName')
const RoomName = require('../models/RoomName')
const Password = recquire('../models/Password')
const numPlayers = require('../models/numPlayers')
*/

let rooms = []

router.get('/', function(req, res, next) {
  res.render('host', { title: 'Telephone' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.roomname)
  console.log(req.body.password)
  console.log(req.body.playername)
  console.log(req.body.numplayers)
  /*
  let room = new Room(req.body.roomname,req.body.password,req.body.numplayers)
  let host = new Host(req.body.playername)
  console.log(room)
  console.log(host)*/
  res.render('lobby', { roomname:req.body.roomname, password:req.body.password, pname:req.body.playername, numplayers:req.body.numplayers });
});


module.exports = router;
