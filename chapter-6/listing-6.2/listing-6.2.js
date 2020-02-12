/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/lurujey/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 6: Listing 6.2--Using an Argument to
 *            Determine the Return Value
 *
*/

var getHelloTo;

var fullMessage;  // Holds result of getHelloTo()

getHelloTo = function(name)  {
  
  return 'Hello to ' + name + '.';
  
};  // end getHelloTo()

console.log('\nLISTING FOR getHelloTo():');
console.log('------------------------\n');
console.log(getHelloTo.toString());

fullMessage = getHelloTo('Kandra');

console.log('\n\nSAMPLE OUTPUT OF getHelloTo();');
console.log('-----------------------------\n');

console.log(fullMessage + '\n\n');
