/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/sisijaw/16/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 6: Listing 6.10--Displaying Player Information
 *            Using Objects
 *
*/

var getPlayerName = function(playerName)  {
  
  return playerName;
  
};  // end getPlayerName()

var getPlayerHealth = function(playerName, playerHealth)  {
  
  return playerName + ' has health ' + playerHealth + '.';
  
};  // end getPlayerHealth()

var getPlayerPlace = function(playerName, playerPlace)  {
  
  return playerName + ' is in ' + playerPlace + '.';
  
};  // end getPlayerPlace()

var getBorder = function()  {
  
  return '==================================================';
  
};  // end getBorder()

var getPlayerInfo = function(playerName, playerPlace, playerHealth)  {
  
  var playerInfo;
  
  playerInfo = '\n' + getPlayerName(playerName);
  playerInfo += '\n' + getBorder();
  playerInfo += '\n' + getPlayerPlace(playerName, playerPlace);
  playerInfo += '\n' + getPlayerHealth(playerName, playerHealth);
  playerInfo += '\n' + getBorder();
  playerInfo += '\n';
  
  return playerInfo;
  
};  // end getPlayerInfo()

var player1 = {
  
  name: 'Kandra',
  place: 'The Dungeon of Doom',
  health: 50
  
  
};  // end player1()

var player2 = {
  
  name: 'Dax',
  place: 'The Old Library',
  health: 40
  
};  // end player2()

console.log(
  getPlayerInfo(player1.name, player1.place, player1.health)
);

console.log(
  getPlayerInfo(player2.name, player2.place, player2.health)
);
