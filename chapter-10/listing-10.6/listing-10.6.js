/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/nayixat/5/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 10: Listing 10.6--Counting Words from Tweets
 *
*/

var tweets = [
  
  'Education is showing business the way by using technology to share information. How do we do so safely?',
  'Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!',
  'We\'re LIVE on Periscope right now answering all your #pet questions - tweet us now!'
  
];  // end tweets

console.log('\nCONTENTS OF tweets[] ARRAY:');
console.log('---------------------------\n');
console.table(tweets);

var words = {};

// Combine each element of array together in a single String object,
// separated by a space.

var tweetText = tweets.join(' ');

// Split tweetText between words by using spaces as the determinant
// of where one word ends and the next begins.

var tweetWords = tweetText.split(' ');

console.log('\n\ntweetWords[]--tweetText WITH METHOD array.split() :');
console.log('-------------------------------------------------');
console.log(tweetWords, '\n');

// Create array of words comprised of the individual words in the 
// tweetWords Array.

tweetWords.forEach( function(word) {

  // Word parameter holds a count of word instances.
  // ForEach word, add a word property and set its
  // value to 0.
  
  words[word] = 0;
  
});  // end tweetWords.forEach()


tweetWords.forEach( function(word) {

  // ForEach instance of word in tweetWords,
  // increment value of word property.
  
  words[word] = words[word] + 1;
  
});  // end tweetWords.forEach()

//console.log(words);

console.log('\nWORD COUNT FOR EACH WORD in tweetWords[]:');
console.log('----------------------------------------\n');
console.table(words);
