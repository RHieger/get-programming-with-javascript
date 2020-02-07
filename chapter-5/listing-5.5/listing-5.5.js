/**
 * 
 *  Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/pudexel/4/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming in JavaScript
 *
 * Chapter 5: Listing 5.5--Using the square() Function
 *
*/

var square;

square = function(numberToSquare)  {
  
  var result;
  
  result = numberToSquare * numberToSquare;
  
  console.log(numberToSquare + ' * ' + numberToSquare + ' = ' + result + '\n');
  
};  // end square()

console.log('\n\nLISTING FOR square():');
console.log('-------------------\n');
console.log(square.toString() + '\n');

console.log('4 SAMPLE OUTPUTS OF square():');
console.log('-----------------------------\n\n');

// 4 SAMPLE OUTPUTS FOR square() FUNCTION

square(10);

square(-2);

square(1111);

square(0.5);
