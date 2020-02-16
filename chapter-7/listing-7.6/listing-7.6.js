/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/zenelaj/9/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.6--Using Math.min and Math.max to
 *            Constrain an Argument
 *
*/

var line = function(lineLength)  {
  
  var line = '==================================================';
  
  lineLength = Math.max(0, lineLength);
  
  lineLength = Math.min(40, lineLength);
  
  return line.substr(0, lineLength) + '\n';
  
};  // end line()

console.log('\nLISTING FOR line():');
console.log('==================\n');
console.log(line.toString() + '\n\n');

console.log('3 SAMPLE CALLS TO line():\n');

// 3 SAMPLE CALLS TO line():

console.log( line(30) );

console.log( line(40) );

console.log( line(50) );

console.log('\n');
