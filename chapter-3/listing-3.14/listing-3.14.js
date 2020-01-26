/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/cuyisik/5/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 3: Listing 3.14--Location for a Weather App (JSON)
 *
*/


// NOTE: Below is a JSON (JavaScript Object Notation) Object. Its
// properties are accessed using dot object notation.

var geoLocation = {
  
  "city"     : "San Francisco",
  "state"    : "CA",
  "country"  : "US",
  "zip"      : "94101",
  "latitude" : 37.775,
  "longitude": -122.418,
  "elevation": 47.000
  
};


console.log('\nSAMPLE OF PARSED JSON DATA FOR WEATHER APPLICATION:\n');

console.log('\n{\n', '\t"city"     : ', '"' + geoLocation.city + '",');
console.log('\t"state"    : ', '"' + geoLocation.state + '",');
console.log('\t"country"  : ', '"' + geoLocation.country + '",');
console.log('\t"zip"      :', '"' + geoLocation.zip + '",');
console.log('\t"latitude" :', geoLocation.latitude + ',');
console.log('\t"longitude":', geoLocation.longitude + ',');
console.log('\t"elevation":', geoLocation.elevation.toFixed(3) + ',');
console.log('}\n');
