/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/gecukoh/23/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.11--A Map with Four Locations
 *
*/


var Place = function(title, description)  {
  
  // PROPERTIES:
  
  this.title = title;  // name of Place
  
  this.exits = {};     // object modeling associated exits
  
  // METHODS:
  
  this.addExit = function(direction, exit)  {
    
    this.exits[direction] = exit;
    
  };  // end addExit()
  
  this.showExits = function()  {
    
    console.log('Exits from ' + this.title + ':');
    console.log('========================================\n');
    
    // Extract exits() keys, iterate over and log to console:
    
    Object.keys(this.exits).forEach( function(exit) {
      
      console.log('  -' + exit);
      
    });  // end Object.keys().forEach( function(exit) )

    console.log('\n');
    
  }; // end showExits()
  
};  // end Place()

console.log('\n\nLISTING FOR OBJECT Place():');
console.log('--------------------------\n');
console.log(Place.toString(), '\n');

// Instantiate four Objects of type Place():

var library = new Place('The Old Library');

var kitchen = new Place('The Kitchen');

var garden = new Place('The Kitchen Garden');

var cupboard = new Place('The Kitchen Cupboard');

// Log List of objects to console:

var places = [
  library,
  kitchen,
  garden,
  cupboard
];

console.log('\nINSTANTIATED OBJECTS OF TYPE Place():');
console.log('------------------------------------\n');

places.forEach( function(place, count)  {

  count += 1;

  console.log(count + '. ' + place.title + '\n');

});  // end places.forEach(place)

console.log('\n');

// Add exits to The Kitchen:

library.addExit('north', kitchen);

garden.addExit('east', kitchen);

cupboard.addExit('west', kitchen);

// Add exits from The Kitchen:

kitchen.addExit('south', library);

kitchen.addExit('west', garden);

kitchen.addExit('east', cupboard);

// Show exits for The Old Library and The Kitchen

library.showExits();

kitchen.showExits();
