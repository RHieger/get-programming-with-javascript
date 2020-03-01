/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/wasarub/7/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/


/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.8--A Calendar Event Constructor
 *
*/

var calendarEvent = function(title, startDate, startTime, endTime)  {
  
  // PROPERTIES:
  
  this.title = title;
  this.startDate = startDate;
  this.startTime = startTime;
  this.endTime = endTime;

  // METHODS:

  this.showEvent = function()  {
    
    var dateString = [
      this.startDate,
      ', from ',
      this.startTime,
      ' to ',
      this.endTime
    ].join('');

    console.log(this.title + '\n');

    console.log('  --' + dateString + '\n');
    
  };  // end showEvent()
  
};  // end calendarEvent()

console.log('\nLISTING FOR OBJECT--calendarEvent():');
console.log('-----------------------------------\n');
console.log( calendarEvent.toString(), '\n' );

var calEvent = new calendarEvent(

  'Annual Review',
  '03/05/2016',
  '4:00 PM',
  '5:00 PM'

);

console.log('\nLISTING FOR OBJECT OF TYPE calendarEvent--calEvent():');
console.log('----------------------------------------------------\n');
console.log(calEvent, '\n');

console.log('\nSAMPLE CALL TO calEvent.showEvent():');
console.log('-----------------------------------\n');

calEvent.showEvent();
