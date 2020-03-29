/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/kugequk/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.9--Functions to Add and Show exits
 *
*/

// Constructor for Objects of type Place():

var Place = function(title)  {
  
  this.title = title;
  
};  // end Place() constructor

console.log('\n\nLISTING FOR OBJECT Place() CONSTRUCTOR:');
console.log('--------------------------------------\n');
console.log( Place.toString(), '\n' );

// 2 Objects of type Place():

var kitchen = new Place('The Kitchen');

var dungeon = new Place('The Dungeon');

console.log('2 OBJECTS OF TYPE Place():');
console.log('-------------------------\n');
console.log('kitchen: ', kitchen, '\n');
console.log('dungeon: ', dungeon, '\n');

// Object to hold exit keys:

var exits = {};

console.log('\nDECLARE EMPTY OBJECT exits():');
console.log('----------------------------\n');
console.log('exits: ', exits, '\n');

// Function to add to exits() Object:

var addExit = function(direction, place)  {
  
  exits[direction] = place;
  
};  // end addExit()

// Function to show exits:

var showExits = function()  {
  
  var keys = Object.keys(exits);
  
  keys.forEach( function(key) {
    
    console.log( key + ' goes to ' + exits[key].title + '.\n' );
    
  });  // end keys.forEach( function(key) )
  
};  // end showExits()

console.log('\nLISTING FOR showExits():');
console.log('-----------------------\n');
console.log( showExits.toString() );

// Set properties on exits:

addExit('north', kitchen);

addExit('the trapdoor', dungeon);

console.log('\n2 exits ADDED TO OBJECT exits():');
console.log('-------------------------------\n');
console.table(exits);
console.log('\n');

console.log('\nSAMPLE CALL TO FUNCTION showExits():');
console.log('-----------------------------------\n');

showExits();

console.log('\n');
