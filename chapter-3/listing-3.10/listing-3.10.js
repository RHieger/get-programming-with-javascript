/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/hacejir/3/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 3: Listing 3.10--Using Dot Notation to Update a Property (or Add One)
 *
*/

var player1;

player1 = {
  
  name     : "Max",
  attempted: 0,
  correct  : 0,
  
};  // end player1()

console.log('\nINITIAL STATE OF player1 OBJECT:\n');

console.log(player1, '\n');

player1.attempted = 1;

player1.correct = 1;

player1.score = 50;

console.log('STATE OF player1 AFTER PROPERTY UPDATES AND ADDITIONS:\n');

console.log(player1, '\n');

console.log('NOTE ADDITION OF NEW score PROPERTY ABOVE.\n');
