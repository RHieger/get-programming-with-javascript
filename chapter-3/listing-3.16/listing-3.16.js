/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/baxohig/8/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 3: Listing 3.16--A Player Object
 *
*/


var player;

player = {
  
  name: "Kandra",
  health: 50,
  place: "The Dungeon of Doom",
  items: "A rusty key, The Sword of Destiny, a piece of cheese"
  
};  // end player()

console.log('\nDATA EXTRACTED FROM player OBJECT:\n')

console.log(player.name + '\n');

console.log(player.name + ' is in ' + player.place + '\n');

console.log(player.name + ' has health ' + player.health + '\n');

console.log("Items: " + player.items + '\n');
