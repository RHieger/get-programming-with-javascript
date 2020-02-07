/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/jixajoh/4/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming in JavaScript
 *
 * Chapter 5: Listing 5.3--Passing Information to a Function
 *
*/

var showMessage;

showMessage = function(message)  {
  
    console.log("The message is: " + message);
  
};  // end showMessage()

console.log('\n\nLISTING FOR showMessage():');
console.log('-------------------------');
console.log('\n');
console.log(showMessage.toString() + '\n\n');

console.log('OUTPUT FROM SAMPLE RUN:');
console.log('----------------------\n\n');

showMessage('It\'s full of stars!');

console.log('\n\n');
