'use strict';
const Phrase = require( '../models/Phrase' );
console.log("loading the phrase Controller")


// this displays all of the players

exports.getAllPhrases = ( req, res ) => {
  console.log('in getAllPhrases')
  Phrase.find( {} )
    .exec()
    .then( ( phrases ) => {
      res.render( 'storybuilder', {
        phrases: phrases
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'phrase promise complete' );
    } );
};

exports.savePhrase = ( req, res ) => {
  console.log("in savePhrase!")
  console.dir(req)
  let newPhrase = new Phrase( {
    phrase: req.body.phrase,
    author: "placeholder"//req.body.author
  } )

  newPhrase.save()
    .then( () => {
      res.redirect( '/storybuilder' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
