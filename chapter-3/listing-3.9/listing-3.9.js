/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/femanix/5/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
 */

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 3: Listing 3.9--Concatenating String Properties
 *
*/

var book1;

var book2;

book1 = {
  
  title : "The Hobbit",
  author: "J.R.R. Tolkein"
  
};  // end book1()

book2 = {
  
  title : "Northern Lights",
  author: "Philip Pullman"
  
};  // end book2()

console.log('\nbook1: ' + book1.title + ' by ' + book1.author + '\n');

console.log('book2: ' + book2.title + ' by ' + book2.author + '\n');
