/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/fesudax/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.7--Iterating Over an Array with forEach()
 *
*/

var items;

var showInfo;

items = [
  'The Pyramids',
  'The Grand Canyon',
  'Bondi Beach'
];

console.log('\nELEMENTS IN items[]:');
console.log('-------------------\n');
console.table(items);
console.log('\n');

showInfo = function(itemToShow)  {

  console.log(itemToShow);

};  // end showInfo()

console.log('LISTIG OF showInfo():');
console.log('---------------------\n');
console.log( showInfo.toString(), '\n' );

console.log('SAMPLE CALL TO items.forEach(showInfo):');
console.log('--------------------------------------\n');

items.forEach(showInfo);

console.log('\n\n');
