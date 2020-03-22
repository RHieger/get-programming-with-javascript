/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/jitekic/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.4--Using the Object.keys Property
 *
*/

var ages = {
  
  'Kandra Smith': 56,
  'Dax Aniaku': 21,
  'Blinky': 36
  
};  // end ages()

console.log('\n\nLISTING FOR OBJECT ages():');
console.log('-------------------------\n');
console.log(JSON.stringify(ages), '\n');

var keys = Object.keys(ages);

console.log('\nACCESSING THE Object.keys PROPERTY TO EXTRACT KEYS:');
console.log('--------------------------------------------------\n');

console.log(keys, '\n\n');
