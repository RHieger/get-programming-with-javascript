/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/pukumaj/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.8--Calling forEach() with an Inline Function
 *
*/

var items = [ 'The Pyramids', 'The Grand Canyon', 'Bondi Beach' ];

var boxLine = '***********************************';

console.log('\n\n');

console.log(boxLine, '\n* Dream Destinations:             *');

console.log(boxLine, '\n');

items.forEach( function(item)  {

  console.log(' - ' + item);

 });

 console.log('\n\n');
