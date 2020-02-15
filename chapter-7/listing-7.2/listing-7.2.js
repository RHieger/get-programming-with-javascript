/**
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/nupekul/11/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 7: Listing 7.2--A Function that Adds Properties to an Object
 *
*/

var planet1 = { name: 'Jupiter', radius: 69911 };

var calculateSizes = function(planet)  {
  
  var r = planet.radius;
  
  planet.area = 3.142 * r * r;
  
  planet.volume = 3.142 * r * r * r / 3;
  
};  // end calculateSizes()

var displaySizes = function(planet)  {
  
  console.log('\n' + planet.name.toUpperCase());

  console.log('=========================\n');
  
  console.log('Surface Area = ' + planet.area + ' square km.\n');
  
  console.log('Volume = ' + planet.volume + ' cubic km.\n\n');
  
};  // end displaySizes()

console.log('\nLISTING FOR calculateSizes():');
console.log('============================\n');
console.log(calculateSizes.toString() + '\n\n');

console.log('\nLISTING FOR displaySizes():');
console.log('==========================\n');
console.log(displaySizes.toString() + '\n\n');


calculateSizes(planet1);

displaySizes(planet1);
