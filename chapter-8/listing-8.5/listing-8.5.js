/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/luwafod/12/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.5--Passing an Array to a Function
 *
*/

var getVisitorReport = function(visitorArray, dayInWeek) {

  var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  var index = dayInWeek -1;

  var visitorReport = 'There were ';
  visitorReport += visitorArray[index];
  visitorReport += ' visitors ';
  visitorReport += 'on ' + days[index] + '.';

  return visitorReport;

};  // end getVisitorReport()

var visitors = [354, 132, 210, 221, 481];

console.log('\nELEMENTS IN visitors[]:');
console.log('----------------------\n');
console.table(visitors);
console.log('\n');

console.log('SAMPLE CALL TO getVisitorReport():');
console.log('---------------------------------\n');
console.log('getVisitorReport(visitors, 2);\n\n');

var report = getVisitorReport(visitors, 2);

console.log(report, '\n\n');
