/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/vosikuh/7/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.2--Adding Methods to your Constructed Objects
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
    info += ' - ' + planet.type;
    
    console.log(info);
    
  };
  
  return planet;
  
};  // end buildPlanet()

console.log('\n\nLISTING FOR buildPlanet():');
console.log('-------------------------\n');
console.log( buildPlanet.toString() );
console.log('\n');

var planet1 = buildPlanet(
  
  'Jupiter',
  5,
  'Gas Giant'  
  
);

console.log('SAMPLE CALL TO buildPlanet.showPlanet():')
console.log('--------------------------------------\n');

planet1.showPlanet();

console.log('\n');