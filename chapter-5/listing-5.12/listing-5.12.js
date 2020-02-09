/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/nexiqef/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
*/


/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.12--Displaying a Player's Location Via
 * Object Properties
 *
*/

var player1;

var player2;

var showPlayerPlace;

showPlayerPlace = function(playerName, playerPlace)  {
  
  console.log(playerName + ' is in ' + playerPlace + '\n');
  
};  // end showPlayerPlace()


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

console.log('\nPROPERTIES OF player1():');
console.log('-----------------------\n');
console.table(player1);
console.log('\n');

console.log('\nPROPERTIES OF player2():');
console.log('-----------------------\n');
console.table(player2);
console.log('\n');

// 2 SAMPLE CALLS to showPlayerPlace():

console.log('2 SAMPLE CALLS TO showPlayerPlace():');
console.log('-----------------------------------\n');

showPlayerPlace(player1.name, player1.place);

showPlayerPlace(player2.name, player2.place);

console.log('\n');
