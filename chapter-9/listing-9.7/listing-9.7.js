/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/cisivi/15/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.7--A Quiz Question Constructor
 *
*/

var quizQuestion = function(question, answer)  {
  
  // PROPERTIES:
  
  this.question = question;
  this.answer = answer;
  this.options = [];
  
  // METHODS:
  
  this.addOption = function(option)  {
    
    this.options.push(option);
    
  };  // end addOption()
  
  this.showQuestion = function()  {
    
    console.log(this.question);
    
    this.options.forEach( function(option, i) {
      
      console.log( '(' + (i + 1) + ') ' + option );
      
    });  // end this.options.forEacxh()
    
  };  // end showQuestion()
  
};  // end quizQuestion()

console.log('\n\nLISTING FOR OBJECT--quizQuestion():');
console.log('----------------------------------\n');
console.log( quizQuestion.toString(), '\n' );

var question1 = new quizQuestion(
  
  'What is the capital of France?\n',
  'Paris'
  
);

question1.addOption('Bordeaux');
question1.addOption('F');
question1.addOption('Paris');
question1.addOption('Brussels');

console.log('\nLISTING FOR OBJECT OF TYPE quizQuestion--question1():');
console.log('----------------------------------------------------\n');
console.log( question1, '\n' );

console.log('\nSAMPLE CALL TO OBJECT--question1():');
console.log('----------------------------------\n');

question1.showQuestion();

console.log('\n');