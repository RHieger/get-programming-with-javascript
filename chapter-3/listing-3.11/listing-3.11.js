/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/voxajej/5/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 3: Listing 3.11--Using a Property in a Calculation
 *
*/

var player1;

player1 = {
  
  name: "Max",
  score: 0
  
};  // end player1()


console.log('\nplayer1 SCORE:\n');

console.log(player1.name + ' has scored ' + player1.score + '.');

player1.score = player1.score + 50;

console.log('\nplayer1 SCORE AFTER SCOREBOARD UPDATE:\n')

console.log(player1.name + ' has scored ' + player1.score + '.\n');
