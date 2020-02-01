/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wahenul/7/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.11--Using the Same Function with Multiple Objects
 *
*/

var movie1;

var movie2;

var movie3;

var movie;

var showMovieInfo;

movie1 = {
  
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
  
  
};  // end movie1()

movie2 = {
  
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
  
  
};  // end movie2()

movie3 = {
  
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J. Abrams"
  
  
};  // end movie3()

showMovieInfo = function () {
  
    console.log('Movie information for ' + movie.title);
    console.log('------------------------------');
    console.log('Actors: ' + movie.actors);
    console.log('Directors: ' + movie.directors);
    console.log('------------------------------');
  
};  // end showMovieInfo()

movie = movie1;

console.log('\n\n');

showMovieInfo();

movie = movie2;

console.log('\n\n');

showMovieInfo();

movie= movie3;

console.log('\n\n');

showMovieInfo();

console.log('\n\n');
