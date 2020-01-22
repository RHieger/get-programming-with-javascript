/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/semesog/2/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 2: Listing 2.6--Declaring and Assigning in 2 Steps
*/

var playerName;

var locationName;

var valueBeforeAssignment = {

  variables: [
    { "name": "playerName", value: playerName },
    { "name": "locationName", value: locationName }
  ]

};

console.log('\nVARIABLE VALUES BEFORE ASSIGNMENT\n');

console.table(valueBeforeAssignment.variables);

playerName = "Kandra";

locationName = "The Dungeon of Doom";

var valueAfterAssignment = {

  variables: [
    { "name": "playerName", value: playerName },
    { "name": "locationName", value: locationName }
  ]

};

console.log('\nVARIABLE VALUES AFTER ASSIGNMENT\n');

console.table(valueAfterAssignment.variables);

console.log('\nCONCATENATED STRING\n');

console.log(
  playerName + " is in " + locationName + "."
);

console.log('\n');
