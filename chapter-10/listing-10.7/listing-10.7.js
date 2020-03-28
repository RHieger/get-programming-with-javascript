/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/xafikik/10/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.7--Counting Letters from Tweets
 *
*/

var tweets = [
  
  'Education is showing business the way by using technology to share information. How do we do so safely?',
  'Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!',
  'We\'re LIVE on Periscope right now answering all your #pet questions - tweet us now!'
  
];  // end tweets

console.log('\n\nELEMENTS OF tweets[] ARRAY:');
console.log('--------------------------\n');
console.table(tweets);
console.log('\n');

var letters = {};  // Object to hold counts of each letter instance

// Apply join of empty string ('') to create combined string of every
// tweet with no separator.

var tweetText = tweets.join('');

// Apply Array.split() method with empty string ('') parameter to
// create an array of each individual character in the combined tweets.

var tweetLetters = tweetText.split('');

console.log('\nINDIVIDUAL CHARACTER ELEMENTS IN tweetLetters[] ARRAY:');
console.log('-----------------------------------------------------\n');
console.table(tweetLetters);
console.log('\n');

tweetLetters.forEach( function(letter) {
  
  // Set properties of letters object equal to lower case of
  // each letter in tweetLetters, to be used as keys to
  // reference each index in the tweetLetters[] array, and
  // set the key value to 0.
  
  letters[ letter.toLowerCase() ] = 0;
  
});  // end tweetLetters.forEach()

tweetLetters.forEach( function(letter)  {
  
  // forEach letter instance, increment its value:
  
  letters[ letter.toLowerCase() ] += 1;
  
});  // end tweetLetters.forEach()

console.log('\nCOUNT FOR EACH CHARACTER OCCURING IN tweetLetters[] ARRAY:');
console.log('---------------------------------------------------------\n');
console.table(letters);
console.log('\n');
