'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var gameSchema = mongoose.Schema( {
  roomname: String,
  password: String,
  numplayers: String,
  hostname: String
} );

module.exports = mongoose.model( 'Game', gameSchema );

/*
newUser.google.id    = profile.id;
newUser.google.token = token;
newUser.google.name  = profile.displayName;
newUser.google.email = profile.emails[0].value; // pull the first email
*/
