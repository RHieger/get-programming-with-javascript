/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/hicojud/6/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 5: Listing 5.8--Displaying a Player's Name
 *            Via an Object Property
 *
*/

var player1;

var player2;

var showPlayerName;

showPlayerName = function(playerName)  {
  
  console.log('playerName: ' + playerName);
  
};  // end showPlayerName()

player1 = {
  
  name: 'Kandra',
  place: 'The Dungeon of Doom',
  health: 50
  
};  // end player1()

player2 = {
  
  name: 'Dax',
  place: 'The Old Library',
  health: 40
  
};  // end player2()

// 2 SAMPLE CALLS TO showPlayerName() FUNCTION:

console.log('\n2 SAMPLE CALLS TO showPlayerName():');
console.log('----------------------------------\n');

showPlayerName(player1.name);

console.log('\n');

showPlayerName(player2.name);

console.log('\n');
