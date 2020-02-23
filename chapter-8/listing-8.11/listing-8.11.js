/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/yeferun/7/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.11--Finding the Total Shopping Bill
 *
*/

var getTotalBill = function(itemCosts, itemCounts)  {
  
  var total = 0;
  
  itemCosts.forEach( function(cost, i) { 
  
    total += cost * itemCounts[i];
    
  });
  
  return total;
  
};  // end getTotalBill()

console.log('\n\nLISTING FOR getTotalBill():');
console.log('--------------------------\n');
console.log( getTotalBill.toString(), '\n\n' );

var costs = [ 1.99, 4.95, 2.50, 9.87 ];

var numOfEach = [ 2, 1, 5, 2 ];

console.log('ARRAYS PASSED TO getTotalBill():');
console.log('-------------------------------\n');
console.log('costs');
console.table(costs);
console.log('\nnumOfEach');
console.table(numOfEach);
console.log('\n');

console.log('OUTPUT FROM CALL TO getTotalBill():');
console.log('----------------------------------\n');

console.log( 'The total cost is $' + getTotalBill(costs, numOfEach) );
console.log('\n');
