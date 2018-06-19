'use strict';
const mongoose = require( 'mongoose' );

var playerSchema = mongoose.Schema( {
  name: String
  //Host: Boolean
} );

module.exports = mongoose.model( 'Player', playerSchema );



/*class Player{
  constructor(name){
    this.name=name
  }

  toString(){
    return `Player(${this.name})`
  }
}

module.exports = Player*/
