/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/losusak/3/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 


/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.9--Displaying a Player's Health
 *
*/

var showPlayerHealth;

showPlayerHealth = function(playerName, playerHealth)  {
  
  console.log(playerName + ' has health ' + playerHealth + '.\n');
  
};  // end showPlayerHealth(playerName, playerHealth)

console.log('\nLISTING FOR showPlayerHealth():');
console.log('------------------------------\n');
console.log(showPlayerHealth.toString());

// 2 SAMPLE CALLS to showPlayerHealth()

console.log('\n\n2 SAMPLE CALLS TO showPlayerHealth()');
console.log('-----------------------------------\n');

showPlayerHealth('Kandra', 50);

showPlayerHealth('Dax', 40);

console.log('\n');
