/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wipejol/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.9--Using the Arguments Passed by forEach()
 *
*/

var players;

var showArguments;

players = [ 'Dax', 'Jahver', 'Kandra' ];

showArguments = function(item, index, wholeArray) {

  var line = '******************************';
  
  console.log(line);
  
  console.log('Item: ' + item);
  console.log('Index: ' + index);
  console.log('Array: ' + wholeArray);
  
  console.log(line + '\n\n');

};  // end showArguments()

console.log('\n\n');

players.forEach(showArguments);
