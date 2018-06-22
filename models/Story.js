'use strict';
const mongoose = require( 'mongoose' );

var storySchema = mongoose.Schema( {
  story: String,
  author: String
  //Host: Boolean
} );

module.exports = mongoose.model( 'Story', storySchema );



/*class Player{
  constructor(name){
    this.name=name
  }

  toString(){
    return `Player(${this.name})`
  }
}

module.exports = Player*/
