/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/puqefef/8/edit)
 * 
 * Released undeer the MIT license: http://jsbin.mit-license.org
 * 
 */


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.5--Two More Function Definitions and Assignments
 *
*/

var findTotal;

var displayMenu;

var sampleOutput;

// DEFINE & ASSIGN FUNCTIONS TO ABOVE VARIABLES:

findTotal = function()  {
  
  result = number1 + number2;

  // MY ADDED CODE TO MAKE FUNCTION USEABLE:

  return result;
  
};  // end findTotal()


displayMenu = function()  {
  
  console.log('Please choose an option:\n');
  
  console.log('(1) Print log\n');
  
  console.log('(2) Upload file\n');
  
  console.log('(9) Quit');
  
};  // end displayMenu()

// GIVE CODE LISTING AND CALL FUNCTIONS:

console.log('\nCODE LISTING FOR findTotal() Function:');

console.log('-------------------------------------\n\n');

console.log(findTotal.toString() + '\n\n');

console.log('SAMPLE OUTPUT FOR findTotal() FUNCTION:');

console.log('--------------------------------------\n');

number1 = 27;

number2 = 36;

sampleOutput = findTotal();

console.log(number1 + ' + ' + number2 + ' = ' + sampleOutput + '\n\n');

console.log('CODE LISTING FOR displayMenu() FUNCTION:');

console.log('---------------------------------------\n\n');

console.log(displayMenu.toString() + '\n\n');

console.log('OUTPUT OF displayMenu() FUNCTION:');

console.log('--------------------------------\n\n');

displayMenu();

console.log('\n\n');
