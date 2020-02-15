/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/jatixuj/13/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.3--A Function to Create Planets (Planet Objects)
 *
*/

var buildPlanet;

var getPlanetInfo;

var planet1;

var planet2;

buildPlanet = function(name, position, type, radius, rank)  {
  
  return {
    
    name: name,
    position: position,
    type: type,
    radius: radius,
    sizeRank: rank
    
  };
  
};  // end buildPlanet()


getPlanetInfo = function(planet)  {
  
  return planet.name.toUpperCase() + ': planet ' + planet.position + '\n';
  
};  // end getPlanetInfo()

console.log('\nLISTING FOR buildPlanet():');
console.log('==========================\n');
console.log( buildPlanet.toString() + '\n\n');

console.log('\nLISTING FOR getPlanetInfo():');
console.log('===========================\n');
console.log( getPlanetInfo.toString() + '\n\n');


planet1 = buildPlanet('Jupiter', 5, 'Gas Giant', 69911, 1);

planet2 = buildPlanet('Neptune', 8, 'Ice Giant', 24622, 4);

console.log( getPlanetInfo(planet1) );

console.log( getPlanetInfo(planet2) );

console.log('\n');
