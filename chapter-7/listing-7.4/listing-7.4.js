/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/gerasul/15/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing-7.4--Moving a Point in 2D
 *
*/

var point1;

var point2;

var move;

var showPoint;

move = function(point, change)  {
  
  return  {
    
    x: point.x + change.x,
    y: point.y + change.y
    
  };
  
};  // end move()

showPoint = function(point)  {
  
  console.log('( x: ' + point.x + ', y: ' + point.y + ' )\n');
  
};  // end showPoint()

console.log('\n\nMOVING A POINT IN 2D');
console.log('====================\n\n');

console.log('LISTING FOR move():');
console.log('==================\n');
console.log(move.toString() + '\n\n');

console.log('LISTING FOR showPoint():');
console.log('=======================\n');
console.log(showPoint.toString() + '\n\n');

point1 = { x: 2, y: 5 };

point2 = move( point1, {x: 4, y: -2} );

showPoint(point1);

console.log('Move 4 across and 2 down.\n');

showPoint(point2);

console.log('\n')