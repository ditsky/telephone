'use strict';
const mongoose = require( 'mongoose' );

var phraseSchema = mongoose.Schema( {
  phrase: String,
  author: String
  //Host: Boolean
} );

module.exports = mongoose.model( 'Phrase', phraseSchema );



/*class Player{
  constructor(name){
    this.name=name
  }

  toString(){
    return `Player(${this.name})`
  }
}

module.exports = Player*/
