/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/yuxarul/11/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.10--An exits Object in the Place() Constructor
 *
*/

var Place = function(title, description)  {
  
  // PROPERTIES:
  
  this.title = title;
  
  this.exits = {};  // object to hold exit and related place
  
  // METHODS:
  
  this.addExit = function(direction, exit) {
    
    this.exits[direction] = exit;
    
  };  // end this addExit()
  
  this.showExits = function()  {
    
    console.log('Exits from ' + this.title + ':');
    console.log('========================================\n');
    
    Object.keys(this.exits).forEach( function(key) {
      
      console.log('-' + key);
      
    });  // end Object.keys(this.exits).foreach()
    
  };  // end this.showExits()
  
};  // end Place()

console.log('\n\nLISTING FOR OBJECT Place():');
console.log('--------------------------\n');
console.log(Place.toString(), '\n');

// Declare 3 Objects of type Place():

var library = new Place('The Old Library');

var kitchen = new Place('The Kitchen');

var garden = new Place('The Kitchen Garden');

// Set properties for kitchen.exits()

kitchen.addExit('south', library);

kitchen.addExit('west', garden);

console.log('SAMPLE INSTANTIATION AND CALL TO Place():');
console.log('----------------------------------------\n');

kitchen.showExits();

console.log('\n');