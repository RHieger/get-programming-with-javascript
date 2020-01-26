/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/vitegos/7/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 3: Listing 3.13--A Calendar Event (Object)
 *
*/


/**
 *
 * NOTE: The usage of differing syntax below shows how the same
 * data can be successfully represented in different ways. The
 * first time an apostrophe occurs, because it is enclosed by
 * double quotes, no escaped characters are necessary.
 *
 * The second time an apostrophe occurs (in the word "don't"),
 * because the string is enclosed in single quotes, the apostrophe
 * needs to be escaped (\') as seen below.
 *
 *
*/

var event = {
  
  title     : "Appraisal Meeting",
  startDate : "2016-10-04 16:00:00",
  endDate   : "2016-10-04 17:00:00",
  location  : "Martha's office",
  importance: 1,
  notes     : 'Don\'t forget the portfolio!'
  
};

console.log('\event CALENDAR OBJECT:\n');

console.log(event, '\n');
