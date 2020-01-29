/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/bayutom/6/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

 /**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.2--Displaying Information from Similar Objects
 *
*/


/**
 * 
 * NOTE: My code differs from that in the book. The book shows none of
 * the code which defined the movie1 object in Listing 4.1. Rather it
 * shows ony the code necessary to display information from three
 * objects.
 * 
 * The originall code would thus have absolutely no output and would not
 * serve as a useful demonstration. I therefore reused the original code
 * for the movie1 object and created my own code for the two additional
 * objects, movie2 and movie3.
 * 
 * Further I did some minor beautification to the output.
 * 
 */

var movie1;

var movie2;

var movie3;

movie1 = {
  
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
  
};  // end movie1()

movie2 = {
  
  title: "City of Women",
  actors: `Marcello Mastroianni, Anna Prucnal,
        Bernice Stegers`,
  directors: "Federico Fellini"
  
};  // end movie1()

movie3 = {
  
  title: `Dr. Strangelove or: How I Learned
       to Stop Worrying and Love the Bomb`,
  actors: `Peter Sellers, George C. Scott,
        Sterling Hayden`,
  directors: "Stanley Kubrick"
  
  
};  // end movie3()

console.log("\nMovie information for " + movie1.title);
console.log("--------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("--------------------------------");


console.log("\n\nMovie information for " + movie2.title);
console.log("--------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("--------------------------------");

console.log("\n\nMovie information for " + movie3.title);
console.log("--------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("--------------------------------\n\n");
