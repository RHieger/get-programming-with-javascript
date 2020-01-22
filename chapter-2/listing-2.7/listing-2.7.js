/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/xogegog/3/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 2: Listing 2.7--Declaring and Assigning in 1 Step
*/


var playerName = "Kandra";

var locationName = "The Dungeon of Doom";

stringVariables = {

  values: [
    { "name": "playerName", "value": playerName },
    { "name": "locationName", value: locationName }
  ]

};  // end stringVariables()

console.log('\nVALUE OF DECLARED VARIABLES\n');

console.table(stringVariables.values);

console.log('\nCONCATENATED STRING\n');

console.log(
  playerName + " is in " + locationName + "."
);

console.log('\n');
