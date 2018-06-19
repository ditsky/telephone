'use strict';
const Player = require( '../models/room' );
console.log("loading the room Controller")


// this displays all of the players
exports.getAllRooms = ( req, res ) => {
  console.log('in getAllrooms')
  player.find( {} )
    .exec()
    .then( ( rooms ) => {
      res.render( 'rooms', {
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

exports.savePlayer = ( req, res ) => {
  console.log("in saveRoom!")
  console.dir(req)
  let newRoom = new Room( {
    name: req.body.name,
    password: req.body.password,
    numplayers: req.body.numplayers
  } )

  console.log("room = "+newRoom)

  newRoom.save()
    .then( () => {
      res.redirect( '/rooms' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
