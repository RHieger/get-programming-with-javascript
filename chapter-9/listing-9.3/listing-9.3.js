/**
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/nuzoyab/6/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.3--An Array of Constructed Objects
 *
*/

var buildPlanet = function(name, position, type)  {
  
  var planet = {};
  
  planet.name = name;
  planet.position = position;
  planet.type = type;
  
  planet.showPlanet = function()  {
    
    var info = planet.name;
    info += ': planet ' + planet.position;
    info += ' - ' + planet.type + '\n';
    
    console.log(info);
    
  };
  
  return planet;
  
};  // end buildPlanet()

console.log('\n\nLISTING FOR buildPlanet():');
console.log('-------------------------\n');
console.log( buildPlanet.toString() );
console.log('\n');

var planets = [
  buildPlanet('Jupiter', 5, 'Gas Giant'),
  buildPlanet('Neptune', 8, 'Ice Giant'),
  buildPlanet('Mercury', 1, 'Terrestrial')
];

console.log('\nBUILDING AN ARRAY OF PLANET OBJECTS:');
console.log('-----------------------------------\n')
console.log(planets);
console.log('\n');

console.log('SAMPLE CALL TO buildPlanet.showPlanet():')
console.log('--------------------------------------\n');

planets.forEach( function(planet) { 
  
  planet.showPlanet();
  
});  // end planets.forEach()

console.log('\n');
