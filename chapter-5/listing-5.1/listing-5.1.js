/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/zijuned/5/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 5: Listing 5.1--Relying on a Variable Outside the Function
 *
*/


var message;

var showMessage;

message = 'It\'s full of stars!';

showMessage = function() {
  
  console.log('\n' + message + '\n');
  
};  // end showMessage()

console.log('\n\nshowMessage() FUNCTION:');
console.log('---------------------\n');
console.log(showMessage.toString() + '\n\n');

console.log('OUTPUT OF showMessage():');
console.log('=======================\n');

showMessage();

console.log('\n');
