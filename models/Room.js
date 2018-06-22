'use strict';
const mongoose = require( 'mongoose' );

var roomSchema = mongoose.Schema( {
  name: String,
  password: String,
  numplayers: String,
  //players: []
} );

module.exports = mongoose.model( 'Room', roomSchema );




/*class Room{
  constructor(roomname, password, numplayers){
    this.roomname=roomname
    this.password=password
    this.numplayers=numplayers
  }

  toString(){
    return `Room(${this.roomname})`
  }
}

module.exports = Room*/
