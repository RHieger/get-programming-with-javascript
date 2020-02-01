/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/yipapar/5/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.7--Using the findTotal() Function to
 * Display a Calculation
 *
*/

var number1 = 1000;

var number2 = 66;

var result;

var findTotal;

findTotal = function()  {
  
  result = number1 + number2;
  
};  // end findTotal()

findTotal();

console.log('\nLISTING OF findTotal() FUNCTION:');

console.log('-------------------------------\n\n');

console.log(findTotal.toString() + '\n\n');

console.log('CALL findTotal() WITH SAMPLE OUTPUT:');

console.log('-----------------------------------\n\n');

console.log(number1 + ' + ' + number2 + ' = ' + result + '\n\n');
