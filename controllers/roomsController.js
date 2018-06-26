'use strict';
const Room = require( '../models/Room' );
console.log("loading the room Controller")


// this displays all of the players
exports.getAllRooms = ( req, res ) => {
  console.log('in getAllrooms')
  Room.find( {} )
    .exec()
    .then( ( rooms ) => {
      res.render( 'players', {
        rooms: rooms
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'room promise complete' );
    } );
};

exports.saveRoom = ( req, res ) => {
  console.log("in saveRoom!")
  let newRoom = new Room( {
    name: req.body.roomname,
    password: req.body.password,
    numplayers: req.body.numplayers
  } )

  newRoom.save()
    .then( () => {
      res.redirect( '/players' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
