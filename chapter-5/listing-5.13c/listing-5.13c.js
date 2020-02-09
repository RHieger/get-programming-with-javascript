/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/pazodor/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 5: Listing 5.13c--Displaying a Player's Information
 * (WITH CHALLENGE: SEE NOTES FROM 'FURTHER ADVENTURES BELOW.')
 *
*/

var showPlayerInfo;

var showPlayerName;

var showPlayerHealth;

var showPlayerPlace;

var drawLine;

var lineFeed;

/* Further Adventures
 *
 * 1) Create a function called showLine
 *    that logs a line of dashes to the console.
 *    ----------------------------
 *
 * 2) Update the showPlayerInfo function to
 *    use the showLine function rather than
 *    logging dashes to the console directly.
 *
 * 3) Create and use a showBlankLine function
 *    for logging a blank line to the console.
 *
 */

// FUNCTIONS:

showPlayerName = function(playerName)  {
  
  console.log(playerName);
  
};  // end showPlayerName()


showPlayerHealth = function(playerName, playerHealth)  {
  
  console.log(playerName + " has health " + playerHealth + '.');
  
};  // end showPlayerHealth()


showPlayerPlace = function(playerName, playerPlace)  {
  
  console.log(playerName + " is in " + playerPlace + '.');
  
};  // end showPlayerPlace()


drawLine = function() {
  
  console.log("--------------------------------------------------");
  
};  // end drawLine()

lineFeed = function()  {
  
  console.log('\n');
  
};  // end lineFeed()

showPlayerInfo = function(playerName, playerPlace, playerHealth)  {
  
  lineFeed();
  
  showPlayerName(playerName.toUpperCase());
  
  drawLine();
  
  showPlayerPlace(playerName, playerPlace);
  
  showPlayerHealth(playerName, playerHealth);
  
  drawLine();
  
  console.log("");
  
};  // end showPlayerInfo()

// 2 SAMPLE CALLS to showPlayerInfo():

console.log('\n2 SAMPLE CALLS TO showPlayerInfo():');
console.log('----------------------------------');

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);

showPlayerInfo("Dax", "The Old Library", 40);
