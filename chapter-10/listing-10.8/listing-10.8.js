/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/tebimer/13/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.8--an exits Object
 *
*/

// Constructor Object for Place():

var Place = function(title)  {
  
  this.title = title;
  
};  // end Place() constructor

console.log('\n\nLISTING FOR OBJECT Place():');
console.log('--------------------------\n');
console.log( Place.toString(), '\n' );

// Two Objects of type Place():

var kitchen = new Place('The Kitchen');

console.log('NEW OBJECT OF TYPE Place(): ', kitchen.title, '\n');

var dungeon = new Place('The Dungeon');

console.log('NEW OBJECT OF TYPE Place(): ', dungeon.title, '\n');

// Declare an empty exits object to contain exit keys, the
// value of which is Place.title:

var exits = {};

console.log('NEW OBJECT exits() DECLARED: ', exits, '\n');

// Set properties for exits():

exits['north'] = kitchen;

exits['the trap door'] = dungeon;

console.log('KEYS AND VALUES ASSIGNED TO OBJECT exits():');
console.log('-----------------------------------------\n');
console.table(exits);
console.log('\n');

// Create keys array to hold the keys in the exits Object:

var keys = Object.keys(exits);

console.log('KEYS EXTRACTED FROM OBJECT exits() AND ASSIGNED TO ARRAY keys[]:');
console.log('---------------------------------------------------------------\n');
console.table(keys);
console.log('\n');

// Iterate over keys and display message about each exit:

console.log('keys.forEach() CALLED TO DISPLAY MESSAGE ABOUT EACH KEY:');
console.log('-------------------------------------------------------\n');

keys.forEach( function(key) {
  
  console.log( key + ' goes to ' + exits[key].title + '.\n' );
  
});  // end keys.forEach()

console.log('\n');
