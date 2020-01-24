/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) by RHieger (http://jsbin.com/kemabon/4/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Chapter 3: Listing 3.3--A Book As an Object
 *
*/

var book;

book = {
  
  title: 'The Hobbit',
  author: 'J.R.R. Tolkein',
  published: 1937
  
};  // end book()

console.log('\n', 'Type of '.toUpperCase() + 'book: ' + typeof book + '\n');

console.log('PROPERTIES OF book:');

console.table(book);

console.log('\n');
