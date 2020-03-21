/**
 *
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/xumanom/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 *
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Listing 10.2--Longer Strings as Keys
 *
*/

var ages = {};

console.log('\n\nCONTENT OF ages:');
console.log('---------------\n');
console.log('ages: ', ages, '\n');

// Set the properties using bracket notation:

ages['Kandra Smith'] = 56;

ages['Dax Aniaku'] = 21;

console.log('Kandra Smith age: ', ages['Kandra Smith'], '\n');

console.log('Dax Aniaku age: ', ages['Dax Aniaku'], '\n');

console.log('NEW CONTENT OF ages:');
console.log('-------------------\n');
console.table(ages);

console.log('\n');
