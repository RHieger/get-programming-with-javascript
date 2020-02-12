/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/bucoqev/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 6: Listing 6.5--A Function with Three Arguments
 *
*/

var totalCost;

totalCost = function(callOutCharge, costPerHour, numberOfHours)  {
  
  return callOutCharge + costPerHour * numberOfHours;
  
};  // end totalCost()

console.log('\nLISTING FOR totalCost():');
console.log('-----------------------:\n');
console.log(totalCost.toString() + '\n\n');

console.log('SAMPLE CALL TO totalCost():');
console.log('--------------------------\n');

console.log('$' + totalCost(30, 40, 3).toFixed(2) + '\n\n');
