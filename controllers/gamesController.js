'use strict';
const Game = require( '../models/Game' );
console.log("loading the games Controller")


// this displays all of the players
exports.getAllGames = ( req, res ) => {
  console.log('in getAllgames')
  Game.find( {} )
    .exec()
    .then( ( games ) => {
      res.render( 'players', {
        games: games
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'game promise complete' );
    } );
};

exports.saveGame = ( req, res ) => {
  console.log("in saveGame!")
  //console.dir(req)
  let newGame = new Game( {
    roomname: req.body.roomname,
    password: req.body.password,
    numplayers: req.body.numplayers,
    hostname: req.body.hostname
  } )

  newGame.save()
    .then( () => {
      res.redirect( '/players' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
/*
exports.joinGame = (req,res)=> {
  Game.updateOne({roomname: req.body.roomname, password: req.body.password})
    .exec()
    .then()
}*/
