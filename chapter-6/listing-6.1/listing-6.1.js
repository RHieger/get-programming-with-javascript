/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/layeloh/6/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming in JavaScript
 *
 * Chapter 6: Listing 6.1--Returning a Value from a Function
 *
*/

var getMessage;

var response;

getMessage = function()  {
  
  return "I'm going on an adventure!";
  
};  // end getMessage()

console.log('\nLISTING FOR getMessage():');
console.log('------------------------\n');

console.log('\n' + getMessage.toString() + '\n')

response = getMessage();

console.log('OUTPUT FROM getMessage() FUNCTION:');
console.log('------------------------\n');

console.log(response);

console.log('\n');