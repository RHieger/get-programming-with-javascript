/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/riqohot/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.5--Adding a moons[] Array to
 *                         the Planet Constructor
 *
*/

var Planet = function(name, position, type)  {
  
  this.name = name;
  this.position = position;
  this.type = type;
  this.moons = [];
  
  this.showPlanet = function()  {
    
    var info = this.name + ': planet ' + planet.position;
    info += ' - ' + this.type;
    
    console.log(info);
    
    console.log(
      'Moons: ' + this.moons.join(', ') + '.'
    );
    
  };  // end showPlanet()
  
  this.addMoon = function(moon)  {
    
    this.moons.push(moon);
    
  };  // end addMoon()
  
};  // end Planet()

// NOTE: The above is the old style prototyping method of creating objects in
//       JavaScript. Though this is still valid, the more current methodology
//       includes the syntactic sugar of using the class keyword, used in
//       languages such as C++ and Java.

console.log('\n\nLISTING FOR OBJECT--Planet():');
console.log('----------------------------\n');
console.log( Planet.toString(), '\n' );

var planet = new Planet(

  'Jupiter',
  5,
  'Gas Giant'
  
);  // end planet()

console.log('\nLISTING FOR OBJECT OF TYPE--planet():');
console.log('------------------------------------\n');
console.log( planet, '\n' );

planet.addMoon('Io');
planet.addMoon('Europa');
planet.addMoon('Ganymede');
planet.addMoon('Callisto');

console.log('\nLISTING FOR planet.moons[]:');
console.log('---------------------------');
console.log( planet.moons.join(', '), '\n' );

console.log('\nSAMPLE CALL TO planet.showPlanet():');
console.log('----------------------------------\n');

planet.showPlanet();

console.log('\n');
