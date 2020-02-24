/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/ruwukuh/6/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.1--Using a Function to Create an Object
 *
*/

var buildPlanet = function(name, position, type)  {
  
  var planet = {};
  
  planet.name = name;
  planet.position = position;
  planet.type = type;
  
  return planet;
  
};

var planet1 = buildPlanet(
  'Jupiter',
  5,
  'Gas Giant'
);

console.log('\n\nplanet1() Object Properties:');
console.log('---------------------------\n');

console.log('planet1.name: ' + planet1.name + '\n');
console.log('planet1.position: ' + planet1.position + '\n');
console.log('planet1.type: ' + planet1.type + '\n\n');
