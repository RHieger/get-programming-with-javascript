/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/defekay/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 6: Listing 6.3--Using the Return Value as an Argument
 *
*/

var getHelloTo;

getHelloTo = function(name)  {
  
  return 'Hello to ' + name + '.\n';
  
};  // end getHelloTo()

console.log('\nLISTING FOR getHelloTo():');
console.log('------------------------\n');
console.log(getHelloTo.toString());

console.log('\n2 SAMPLE CALLS TO getHelloTo():');
console.log('------------------------------\n\n');

console.log(getHelloTo('Kandra'));

console.log(getHelloTo('Dax'));
