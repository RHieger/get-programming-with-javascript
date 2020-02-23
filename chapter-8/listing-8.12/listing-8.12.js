/**
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/ciqavus/12/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 8: Listing 8.12--Displaying a Multiple Choice Question
 *
*/

var displayQuestion = function(questionAndAnswer)  {
  
  var options = [ 'A', 'B', 'C', 'D' ];
  
  console.log(questionAndAnswer.question, '\n');
  
  questionAndAnswer.answers.forEach(
    
    function(answer, i)  {
      
      console.log(options[i] + ' - ' + answer);
      
    });
  
};  // end displayQuestion()

console.log('\n\nLISTING FOR displayQuestion():');
console.log('-----------------------------\n');
console.log( displayQuestion.toString() );

var question1 = {
  
  question: 'What is the capital of France?',
  answers: [
    
    'Bordeaux',
    'F',
    'Paris',
    'Brussels'
    
  ],
  correctAnswer: 'Paris'
  
};

console.log('question1 Object:');
console.log('----------------\n\n');

console.log(question1, '\n\n');

displayQuestion(question1);

console.log('\n');