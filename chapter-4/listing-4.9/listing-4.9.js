/**
 * 
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/yohecon/4/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.9--Using a Function to Display Object Properties
 *
*/

var showMovieInfo;

showMovieInfo = function () {
    console.log('Movie information for ' + movie.title);
    console.log('------------------------------');
    console.log('Actors: ' + movie.actors);
    console.log('Directors: ' + movie.directors);
    console.log('------------------------------');
};

console.log('\nCODE LISTING FOR showMovieInfo():');

console.log('--------------------------------\n\n');

console.log(showMovieInfo.toString() + '\n\n');
