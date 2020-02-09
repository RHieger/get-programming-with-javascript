/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/koxecic/13/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.14--Displaying a Player's Information Using
 *            Object Properties
 *
*/

var showPlayerName = function(playerName)  {
  
  console.log(playerName);
  
};  // end showPlayerName()


var showPlayerHealth = function(playerName, playerHealth)  {
  
  console.log(playerName + ' has health ' + playerHealth);
  
};  // end showPlayerHealth()


var showPlayerPlace = function(playerName, playerPlace)  {
  
  console.log(playerName + ' is in ' + playerPlace);
  
};  // end showPlayerPlace()


var showPlayerInfo = function(playerName, playerPlace, playerHealth)  {
  
  console.log('');
  
  showPlayerName(playerName.toUpperCase());
  
  console.log('----------------------------');
  
  showPlayerPlace(playerName, playerPlace);
  
  showPlayerHealth(playerName, playerHealth);
  
  console.log('----------------------------');
  
  console.log('');
  
};  // end showPlayerInfo()

var player1 = {
  
  name: 'Kandra',
  place: 'The Dungeon of Doom',
  health: 50
  
};


var player2 = {
  
  name: 'Dax',
  place: 'The Old Library',
  health: 40
  
};  // end player2()

// 2 SAMPLE CALLS TO showPlayerInfo():

console.log('\n2 SAMPLE CALLS TO showPlayerInfo():');
console.log('----------------------------------\n');

showPlayerInfo(player1.name, player1, player1.health);

showPlayerInfo(player2.name, player2.place, player2.health);
