/**
 * 
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/fogupoj/12/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.12--Using Functions to Add and Display Tax
 *
*/

var sale1;

var sale2;

var sale3;

var sale;

var calculateTax;

var displaySale;

sale1 = { price: 140, taxRate: 15 };

sale2 = { price: 40, taxRate: 10 };

sale3 = { price: 120, taxRate: 20 };

calculateTax = function()  {
  
  sale.tax = sale.price * sale.taxRate / 100;
  
  sale.total = sale.price + sale.tax;
  
};  // end calculateTax()

displaySale = function()  {
  
  console.log('price = $' + sale.price);
  
  console.log('tax @ ' + sale.taxRate + '% = $' + sale.tax);
  
  console.log('total cost = $' + sale.total + '\n\n');
  
};  // end displaySale()

console.log('\nLISTING OF calculateTax():');
console.log('--------------------------\n\n');
console.log(calculateTax.toString() + '\n\n');

console.log('\nLISTING OF displaySale():');
console.log('-------------------------\n\n');
console.log(displaySale.toString() + '\n\n');

console.log('SAMPLE OUTPUT USING THESE FUNCTIONS:');
console.log('-----------------------------------\n\n');

sale = sale1;

calculateTax();

displaySale();

sale = sale2;

calculateTax();

displaySale();


sale = sale3;

calculateTax();

displaySale();
