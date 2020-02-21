/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/bayuwub/7/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.3--Accessing Array Elements
 *
*/

var scores = [3, 1, 8, 2];

console.log('\nELEMENTS IN scores[]:');
console.log('--------------------\n');

console.table(scores);
console.log('\n');

console.log('There are ' + scores.length + ' scores.\n');

console.log('The first score is ' + scores[0] + '.');
console.log('The second score is ' + scores[1] + '.');
console.log('The third score is ' + scores[2] + '.');
console.log('The fourth score is ' + scores[3] + '.\n\n');
