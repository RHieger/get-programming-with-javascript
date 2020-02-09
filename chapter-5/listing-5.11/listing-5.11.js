/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/fuvaqix/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 

/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.11--Displaying a Player's Location
 *
*/

var showPlayerPlace;

showPlayerPlace = function(playerName, playerPlace)  {
  
  console.log(playerName + ' is in ' + playerPlace + '.\n');
  
};  // end showPlayerPlace()

console.log('\nLISTING FOR showPlayerPlace():');
console.log('-----------------------------\n\n');
console.log(showPlayerPlace.toString() + '\n\n');

// 2 SAMPLE CALLS to showPlayerPlace():

console.log('2 SAMPLE CALLS TO showPlayerPlace():');
console.log('-----------------------------------\n\n');

showPlayerPlace('Kandra', 'The Dungeon of Doom');

showPlayerPlace('Dax', 'The Old Library');
