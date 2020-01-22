/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/caxexex/3/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

var score;

score = 100;

/**
 * 
 * MY ADDED CODE FOR DEMO PURPOSES
 * 
 */

 console.log('\nDECLARED VARIABLES\n');

 declaredVariables = {

variables:  [
  { "name": "score", "value": score }
]

}; // end declaredVariables()

console.table(declaredVariables.variables);

console.log('\n');

var newValue = score + 50;

nextValue = {

  variables:  [
    { "name": "score", "value": newValue }
  ]

} // end newValue()

console.log('\n');

console.log('NEW VALUE\n');

console.table(nextValue.variables);

console.log('\n');
