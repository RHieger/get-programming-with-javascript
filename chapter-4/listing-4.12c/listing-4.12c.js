/**
 * 
 * Created using JS Bin
 * 
 * http://jsbin.com
 * 
 * Copyright (c) 2020 by RHieger (http://jsbin.com/fexexuj/4/edit)
 * 
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/ 

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 4: Listing 4.12c--Using Functions to Add and Display Tax (Challenge)
 *
*/


/**
 *
 * INSTRUCTIONS FOR CHALLENGE:
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 *    Having two separate functions to calculate tax
 *    and display sales is good, each has a specific purpose.
 *    Having to call both functions
 *    for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
*/

sale1 = { price: 140, taxRate: 15 };

sale2 = { price: 40, taxRate: 10 };

sale3 = { price: 120, taxRate: 20 };

sale4 = { price: 495, taxRate: 8.875 };

calculateTax = function()  {
  
  sale.tax = sale.price * sale.taxRate / 100;
  
  sale.total = sale.price + sale.tax;
  
};  // end calculateTax()

displaySale = function()  {
  
  // First calculate the tax:
  
  calculateTax();
  
  console.log('price = $' + sale.price);
  
  console.log('tax @ ' + sale.taxRate + '% = $' + sale.tax);
  
  console.log('total cost = $' + sale.total + '\n\n');
  
};  // end displaySale()

console.log('\n\n');

sale = sale1;

calculateTax();

displaySale();


sale = sale2;

calculateTax();

displaySale();


sale = sale3;

calculateTax();

displaySale();
