/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/boritox/8/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.4--Using a Variable as an Index
 *
*/

var days = [
  'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday'
];

var dayInWeek = 4;

// NOTE: The console.log() below has an index of 4, but
//       will give the unexpected result of 'Friday'.
//       This is because this code does not take into
//       account 0 indexing.

console.log('\nFRIDAY IS NOT THE 4TH DAY OF THE WORK WEEK!');
console.log('-------------------------------------------\n');

console.log(days[dayInWeek]);

// NOTE: The code below corrects the above problem by
//       subtracting 1 from the index specified by
//       dayInWeek. As a result, 'Thursday' will be
//       logged to the console, correctly.

console.log('\nTHURSDAY IS THE 4TH DAY OF THE WORK WEEK!');
console.log('-----------------------------------------\n');

console.log( days[dayInWeek -1] + '\n' );
