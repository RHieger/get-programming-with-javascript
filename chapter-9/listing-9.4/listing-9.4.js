/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/mexijeq/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.4--The Planet Constructor
 *
*/

var Planet = function(name, position, type)  {
  
  this.name = name;
  this.position = position;
  this.type = type;
  
  this.showPlanet = function()  {
    
    var info = this.name + ': planet ' + planet.position;
    info += ' - ' + this.type;
    
    console.log(info);
    
  };  // end showPlanet()
  
};  // end Planet()

// NOTE: The above is the old style prototyping method of creating objects in
//       JavaScript. Though this is still valid, the more current methodology
//       includes the syntactic sugar of using the class keyword, used in
//       languages such as C++ and Java.

console.log('\n\nLISTING FOR CONSTRUCTOR FUNCTION--Planet():');
console.log('------------------------------------------\n');
console.log( Planet.toString(), '\n');

var planet = new Planet(

  'Jupiter',
  5,
  'Gas Giant'
  
);  // end planet()

console.log('\nLISTING FOR OBJECT--planet():');
console.log('----------------------------\n');
console.log(planet, '\n');

console.log('\nSAMPLE CALL TO METHOD--planet.showPlanet():');
console.log('------------------------------------------\n');

planet.showPlanet();

console.log('\n');
