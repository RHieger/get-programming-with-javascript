/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/jinoriy/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.9--A Place Constructor Part I
 *
*/

var Place = function(title, description)  {
  
  // PROPERTIES:
  
  this.title = title;
  this.description = description;
  
  // METHODS:
  
  this.getInfo = function()  {
    
    var infoString = this.title + "\n";
    infoString += this.description + "\n";
    
    return infoString;
    
  }; // end getInfo()
  
}; // end Place()

console.log('\nLISTING FOR OBJECT--Place():');
console.log('---------------------------\n');
console.log( Place.toString(), '\n' );

var library = new Place(

  "The Old Library",
  "You are in a library. Dusty books line the walls.\n"
  
);

console.log('\nLISTING FOR OBJECT OF TYPE Place--library()');
console.log('-------------------------------------------\n');
console.log(library, '\n');

console.log('\nSAMPLE CALL TO library.getInfo()');
console.log('--------------------------------\n');

console.log( library.getInfo() );
