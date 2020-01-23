/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 RHieger (http://jsbin.com/juduyeb/6/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */


/**
 *
 * Chapter 2: Listing 2.9--Valid and Invalid Variable Names
 *
*/

var validVariableNames = {
  
  validNames: [
    { "Variable Name": "thisIsFine" },
    { "Variable Name": "$noProblemHere" },
    { "Variable Name": "_underscore56" },
    { "Variable Name": "StartWithCapital" },
    { "Variable Name": "z5" }
  ]
  
};  // end validVariableNames()

console.log('\nEXAMPLES OF VALID VARIABLE NAMES\n');

console.table(validVariableNames.validNames);

console.log('\n');

var invalidVariableNames = {
  
  invalidNames: [
    { "Variable Name": "999" },
    { "Variable Name": "39Steps" },
    { "Variable Name": "&nope" },
    { "Variable Name": "single words only" },
    { "Variable Name": "yield" }
  ]
  
};  // end invalidVariableNames()

console.log('EXAMPLES OF INVALID VARIABLE NAMES\n');

console.table(invalidVariableNames.invalidNames);

console.log('\n');
