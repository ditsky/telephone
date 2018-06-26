'use strict';
const Story = require( '../models/Story' );
console.log("loading the story Controller")


// this displays all of the players

exports.getAllStories = ( req, res ) => {
  console.log('in getAllStories')
  Story.find( {} )
    .exec()
    .then( ( stories ) => {
      res.render( 'voting', {
        stories: stories
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'story promise complete' );
    } );
};

exports.saveStory = ( req, res ) => {
  console.log("in saveStory!")
  let newStory = new Story( {
    story: req.body.story,
    author: "placeholder"//req.body.author
  } )

  newStory.save()
    .then( () => {
      res.redirect( '/voting' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
