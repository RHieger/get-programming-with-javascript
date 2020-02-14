/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/vamazey/7/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 

/**
 *
 * Get Programming With JavaScript
 *
 * Chapter 7: Listing 7.1--Passing a Function an Object as an Argument
 *
*/

var planet1;

var getPlanetInfo;

planet1 = {
  
  name: 'Jupiter',
  position: 5,
  type: 'Gas Giant',
  radius: 69911,
  sizeRank: 1
  
};  // end planet1()

console.log('\n\OBJECT LISTING FOR planet1():');
console.log('--------------------------------\n');
console.log(planet1, '\n\n');

getPlanetInfo = function(planet) {
  
  return planet.name + ': planet number ' + planet.position;
  
};  // end getPlanetInfo()

console.log('LISTING FOR getPlanetInfo():');
console.log('--------------------------\n');
console.log(getPlanetInfo.toString() + '\n\n');

console.log('SAMPLE CALL TO getPlanetInfo():');
console.log('------------------------------\n');

console.log( getPlanetInfo(planet1) );

console.log('\n\n');
