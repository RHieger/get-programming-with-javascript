/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/zavagug/9/edit)
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.1--Displaying an Object's Properties
 *            on the Console
 *
*/


var movie1;  // Declare variable for movie object

movie1 = {
  
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
  
};  // end movie1()

console.log('\nMovie information for ' + movie1.title);
console.log('--------------------------------\n');
console.log('Actors: ' + movie1.actors + '\n');
console.log('Directors: ' + movie1.directors + '\n');
console.log('--------------------------------\n');
