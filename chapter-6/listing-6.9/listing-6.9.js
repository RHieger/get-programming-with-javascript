/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/jiholac/3/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/** 
  * 
  * Get Programming with JavaScript
  *
  * Chapter 6: Listing 6.9--Getting a String for a Player’s Information
  *
*/

var getPlayerName;

var getPlayerHealth;

var getPlayerPlace;

var getPlayerInfo;

var getBorder;

getPlayerName = function (playerName) {
  
    return playerName.toUpperCase();
  
};  // end getPlayerName()


getPlayerHealth = function (playerName, playerHealth) {
  
    return playerName + ' has health ' + playerHealth + '.';
  
};  // end getPlayerHealth()


getPlayerPlace = function (playerName, playerPlace) {
  
    return playerName + ' is in ' + playerPlace + '.';
  
};  // end getPlayerPlace()


getBorder = function () {
  
    return '**************************************************';
  
};  // end getBorder()

getPlayerInfo = function (playerName, playerPlace, playerHealth) {
  
    var playerInfo;

    playerInfo = '\n\nPlayer Info: ' + getPlayerName(playerName);

    playerInfo += '\n' + getBorder() + '\n';
  
    playerInfo += '\n' + getPlayerPlace(playerName, playerPlace);
  
    playerInfo += '\n' + getPlayerHealth(playerName, playerHealth);
  
    playerInfo += '\n\n' + getBorder();
  
    playerInfo += '\n';

    return playerInfo;
  
};

// NOTE: BELOW ARE 2 SAMPLE FUNCTION CALLS TO getPlayerInfo(),
//       per instructions under Further Adventures (below).

console.log( getPlayerInfo('Kandra', 'The Dungeon of Doom', 50) );

console.log( getPlayerInfo('Dax', 'The Old Library', 40) );

console.log('\n');


/* Further Adventures
 *
 * 1) Add a second call to getPlayerInfo with
 *    different player information. Log the
 *    returned string to the console.
 *
 * 2) Call getPlayerInfo at the console prompt.
 *
 * 3) What happens if you call getPlayerInfo
 *    without any arguments?
 *
 *    > getPlayerInfo()
 * 
 * ANSWER: Output of getPlayerInfo() with no parameters
 * called shows 'undefined' wherever variables supply
 * values to the function.
 *
 */
