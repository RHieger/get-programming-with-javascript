/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/vaqurax/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.10--Displaying a Player's Health Via Object Properties
 *
*/

var player1;

var player2;

var showPlayerHealth;

showPlayerHealth = function(playerName, playerHealth)  {
  
  console.log(playerName + ' has health ' + playerHealth + '.\n');
  
};  // end showPlayerHealth(playerName, playerHealth)

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


// 2 SAMPLE CALLS to showPlayerHealth()

console.log('\n2 SAMPLE CALLS TO showPlayerHealth():');
console.log('--------------------------------------\n\n');

showPlayerHealth(player1.name, player1.health);

showPlayerHealth(player2.name, player2.health);

console.log('\n');
