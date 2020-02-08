1/**
 *
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/jafemix/6/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 5: Listing 5.6--A Function with 2 Arguments
 *
*/

var showSum;

showSum = function(number1, number2)  {
  
  var total = number1 + number2;
  
  console.log('The sum of ' + number1 + ' + ' + number2 + ': ' + total + '\n\n');
  
};  // end showSum()

console.log('\n\nLISTING FOR showSum():');
console.log('---------------------\n\n');
console.log(showSum.toString() + '\n\n');

// TWO SAMPLE CALLS TO showSum(number1, number2):

console.log('TWO SAMPLE CALLS TO showSum():');
console.log('-----------------------------\n\n');

showSum(30, 23);

showSum(2.8, -5);
