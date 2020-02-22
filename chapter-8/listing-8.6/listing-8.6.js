/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wizoqor/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.6--Manipulating Arrays with push(),
 *            pop(), and join()
 *
*/

var items = [];

var item = 'The Pyramids';

var removed;

console.log('\nitems[] = ', items, '.\n');

console.log('Populating array...\n');

items.push(item);
items.push('The Grand Cannyon');
items.push('Bondi Beach');

console.log('items = ', items, '\n');

console.log('Removing Bondi Beach...\n');

removed = items.pop();

console.log(removed + ' has been removed.\n');

console.log('Converting items[] to string...\n');

console.log( items.join(' and ') );

console.log('\n\n');
