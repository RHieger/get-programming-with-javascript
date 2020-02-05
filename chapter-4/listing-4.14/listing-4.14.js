/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/qedamuk/7/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.14--A Function to Display Player Information
 *
*/

var player1;

var player2;

var player;

var showPlayerInfo;

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

showPlayerInfo = function()  {
  
  console.log('\n' + player.name);
  console.log('------------------------------');
  console.log(player.name + ' is in ' + player.place);
  console.log(player.name + ' has health ' + player.health);
  console.log('------------------------------');
  console.log('\n');
  
};  // end showPlayerInfo()


player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();
