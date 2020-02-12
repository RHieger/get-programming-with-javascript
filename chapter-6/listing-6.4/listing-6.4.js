/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wikopu/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 6: Listing 6.4--Returning the Sum of Two Numbers
 *
*/

var add;

add = function(number1, number2)  {
  
  var total = number1 + number2;
  
  return total;
  
};  // end add()

console.log('\nLISTING FOR add():');
console.log('-----------------\n');
console.log(add.toString() + '\n\n');

var sum = add(50, 23);

console.log('SAMPLE CALL TO add():');
console.log('--------------------\n');

console.log('SUM: ' + sum + '\n\n');
