/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/gubebaz/3/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
* /


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.6--Creating Multiple Planets with
 *            Our Constructor
 *
*/

var Planet = function(name, position, type)  {
  
  this.name = name;
  this.position = position;
  this.type = type;
  this.moons = [];
  
  this.showPlanet = function()  {
    
    var info = this.name + ": planet " + planet.position;
    info += " - " + this.type;
    
    console.log(info);
    
    console.log(
      "Moons: " + this.moons.join(', ') + "."
    );
    
  };  // end showPlanet()
  
  this.addMoon = function(moon)  {
    
    this.moons.unshift(moon);

    /**
     * 
     * NOTE: the addMoon() method in this listing differs from the one in
     *       listing 9.5, which used the Array.prototype.push() method.
     *       Where the push method inserts an array element at the end of
     *       the array list, the Array.prototype.unshift() method inserts
     *       an element at the beginning of the array list, shifting all
     *       existing elements to the right.
     * 
     */
    
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

  "Jupiter",
  5,
  "Gas Giant"
  
);  // end planet()

console.log('\nLISTING FOR OBJECT OF TYPE Planet--planet()');
console.log('-------------------------------------------\n');
console.log(planet, '\n');

planet.addMoon('Io');
planet.addMoon('Europa');
planet.addMoon('Ganymede');
planet.addMoon('Callisto');

console.log('\nLISTING FOR planet.moons[]:');
console.log('--------------------------');
console.log( planet.moons.join(', '), '\n' );

console.log('\nSAMPLE CALL TO planet()');
console.log('-----------------------\n');

planet.showPlanet();

console.log('\n');
