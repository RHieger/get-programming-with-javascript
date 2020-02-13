/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/dosulir/6/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 6: Listing 6.8--Getting Strings for a Player's
 *            Health and Location
 *
*/

var getPlayerHealth;

var getPlayerPlace;

getPlayerHealth = function(playerName, playerHealth)  {
  
  return playerName + ' has health ' + playerHealth;
  
};  // end getPlayerHealth()

getPlayerPlace = function(playerName, playerPlace)  {
  
  return playerName + ' is in ' + playerPlace;
  
};

console.log('\nLISTING FOR getPlayerHealth():');
console.log('-----------------------------\n');
console.log(getPlayerHealth.toString() + '\n\n');

console.log('LISTING FOR getPlayerPlace():');
console.log('----------------------------\n');
console.log(getPlayerPlace.toString() + '\n\n');

console.log('SAMPLE CALLS TO getPlayerHealth() AND getPlayerPlace():');
console.log('------------------------------------------------------\n');

console.log(getPlayerHealth('Kandra', 50) + '.\n');

console.log(getPlayerPlace('Kandra', 'The Dungeon of Doom.\n\n'));
