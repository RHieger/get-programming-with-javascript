/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/rusilub/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.5--Iterating Over the Object.keys Property
 * with the forEach() Method
 *
*/

var ages = {
  
  "Kandra Smith": 56,
  "Dax Aniaku": 21,
  "Blinky": 36
  
};  // end ages()

console.log('\n\nLISTING FOR OBJECT ages():');
console.log('-------------------------\n');
console.log(ages, '\n');

var keys = Object.keys(ages);

console.log('\nOUTPUT OF keys.ForEach():');
console.log('------------------------\n')

keys.forEach( function(key)  {
  
  console.log(key);
  
});  // end keys.forEach()

console.log('\n');
