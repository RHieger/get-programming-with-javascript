/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) RHieger (http://jsbin.com/jidenar/1/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Chapter 3: Listing 3.5--An Object With a Single Property
 *
*/

var book;

console.log('\nVALUE OF book PRIOR TO INITIALIZATION: ', book, '\n');

book = {
  
  title: "The Hobbit"
  
};  // end book()

console.log('TYPE AND VALUE OF book AFTER INITIALIZATION:');

console.table(
  { 'typeof': typeof book, 'title': book.title  }
);

console.log('\n');
