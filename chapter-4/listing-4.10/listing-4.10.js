/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/nudeyuj/6/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.10--Calling the showMovieInfo() Function
 *
*/

var movie1;

var movie;

var showMovieInfo;

movie1 = {
  
  title: 'Inside Out',
  actors: 'Amy Poehler, Bill Hader',
  directors: 'Pete Doctor, Ronaldo Del Carmen'
  
};  // end movie1()

showMovieInfo = function () {
    console.log('Movie information for ' + movie.title);
    console.log('------------------------------');
    console.log('Actors: ' + movie.actors);
    console.log('Directors: ' + movie.directors);
    console.log('------------------------------');
};

console.log('\nPROPERTIES OF movie1() OBJECT:');

console.log('-----------------------------\n\n');

console.log(JSON.stringify(movie1, null, '\t') + '\n\n');

movie = movie1;

console.log('SAMPLE OUTPUT OF showMovieInfo():');

console.log('--------------------------------\n\n');

showMovieInfo();

console.log('\n\n');
