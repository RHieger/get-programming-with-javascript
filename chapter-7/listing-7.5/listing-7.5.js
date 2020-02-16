/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/bobuqam/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.5--Using Math.min and Math.max
 *
*/

var showSmaller = function(num1, num2)  {
  
  var smaller = Math.min(num1, num2);
  
  var larger = Math.max(num1, num2);
  
  console.log(smaller + ' is smaller than ' + larger + '.\n');
  
};  // end showSmaller()

console.log('\nLISTING FOR showSmaller():');
console.log('=========================\n\n');
console.log(showSmaller.toString() + '\n\n');


// SAMPLE CALLS TO showSmaller():

console.log('2 SAMPLE CALLS TO showSmaller():');
console.log('===============================\n');

showSmaller(12, 3);

showSmaller(-10, 3);

console.log('\n\n');
