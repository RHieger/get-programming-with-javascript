/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wepedu/3/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-licences.org
 * 
 */


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 2: Listing 2.5
*/

var message;

message = 'Hello World!';

/**
 * 
 * MY ADDED CODE FOR DEMO PURPOSES
 * 
 */

console.log('\nDECLARED VARIABLES\n');

var declaredVariables = {

  variables: [
    { "name": "message", "value": message }
  ]

};  // end declaredVariables()

console.table(declaredVariables.variables);

console.log('\n');

message = 'Congratulations! Your tweet has won a prize...';

var nextValue = {

  variables:  [
    { "name": "score", "value": message }
  ]

};  // end newValue

console.log('NEW VALUE\n');

console.table(nextValue.variables);

console.log('\n');
