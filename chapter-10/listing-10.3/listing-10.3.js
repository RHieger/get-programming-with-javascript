/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/hefehi/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Listing 10.3--Using a Function to Add Ages
 *
*/

var ages = {};

console.log('\n\nLISTING OF OBJECT ages():');
console.log('------------------------\n');
console.log('ages: ', ages, '\n');

var addAge = function(name, age)  {
  
  ages[name] = age;
  
};

console.log('LISTING OF FUNCTION addAge():');
console.log('----------------------------\n');
console.log( addAge.toString(), '\n' );

addAge('Kandra Smith', 56);

addAge('Dax Aniaku', 21);

console.log('PROPERTIES ADDED TO ages WITH FUNCTION addAge():');
console.log('-----------------------------------------------\n');

console.log('\n', ages['Kandra Smith']);

console.log('', ages['Dax Aniaku']);

console.log('\nCONTENTS OF ages[] AFTER EMPLOYING addAge():');
console.log('-------------------------------------------\n');
console.table(ages);

console.log('\n');