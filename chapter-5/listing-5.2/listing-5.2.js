/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wuhujog/7/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 

/**
 *
 * Get Programming in JavaScript
 *
 * Chapter 5: Listing 5.2--Breaking a Function by Changing a Variable Name
 *
*/

var msg;  // NOTE: Function uses message variable, which does not exist.
          // This will throw an error.

var showMessage;

msg = "It's full of stars!";

showMessage = function()  {
  
  console.log(message);
  
};  // end showMessage()

showMessage();
