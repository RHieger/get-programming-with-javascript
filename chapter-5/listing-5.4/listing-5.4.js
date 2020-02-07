/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/tapofan/6/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
/*

/**
 *
 * Get Programming in JavaScript
 *
 * Chapter 5: Listing 5.4--Calling the Same Function with Different Arguments
 *
*/

var showMessage;

showMessage = function(message)  {
  
  console.log("The message is: " + message);
  
};  // end showMessage()


// 3 SAMPLE CALLS TO showMessage():

console.log('\n\n3 SAMPLE CALLS to showMessage():');
console.log('-------------------------------\n');

showMessage('It\'s full of stars!\n');

showMessage('Hello to Jason Isaacs!\n');

showMessage('Hello to Jason Isaacs and Stephen Fry!\n\n');
