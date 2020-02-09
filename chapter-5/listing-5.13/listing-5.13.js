/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/xiqajir/16/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.13--Displaying a Player's Information
 *
*/

var showPlayerInfo;

var showPlayerName;

var showPlayerHealth;

var showPlayerPlace;

// FUNCTIONS:

showPlayerName = function(playerName)  {
  
  console.log(playerName.toUpperCase());
  
};  // end showPlayerName()

showPlayerHealth = function(playerName, playerHealth)  {
  
  console.log(playerName + ' has health ' + playerHealth + '.');
  
};  // end showPlayerHealth()

showPlayerPlace = function(playerName, playerPlace)  {
  
  console.log(playerName + ' is in ' + playerPlace + '.');
  
};  // end showPlayerPlace()

showPlayerInfo = function(playerName, playerPlace, playerHealth)  {
  
  console.log('');
  
  showPlayerName(playerName);
  
  console.log('----------------------------\n');
  
  showPlayerPlace(playerName, playerPlace);
  
  showPlayerHealth(playerName, playerHealth);
  
  console.log('\n----------------------------');
  
  console.log('');
  
};  // end showPlayerInfo()

console.log('\nLISTING FOR showPlayerInfo():');
console.log('----------------------------\n');
console.log(showPlayerInfo.toString() + '\n');

// 2 SAMPLE CALLS TO showPlayerInfo():

console.log('\n2 SAMPLE CALLS TO showPlayerInfo():');
console.log('----------------------------------\n');

showPlayerInfo('Kandra', 'The Dungeon of Doom', 50);

showPlayerInfo('Dax', 'The Old Library', 40);
