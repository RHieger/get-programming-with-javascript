/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/vagisaw/2/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.10--Using the Arguments Passed by forEach()--compact
 *
*/

console.log('\n\n');

[ 'Dax', 'Jahver', 'Kandra' ].forEach( function(item, index, wholeArray) {

  var line = '******************************';
  
  console.log(line);
  
  console.log('Item: ' + item);
  console.log('Index: ' + index);
  console.log('Array: ' + wholeArray);
  
  console.log(line + '\n\n');

});  // end showArguments()
