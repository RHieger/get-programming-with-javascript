/**
 * 
 * 
 * Created using JS Bin
 * http://jsbin.com
 * Copyright (c) 2020 by RHieger (http://jsbin.com/himopaq/4/edit)
 * Released under the MIT license: http://jsbin.mit-license.org
 * 
*/

/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.9--Finding a character with indexOf()
 *
*/

var message = 'The cow jumped over the Moon!';

console.log('\n\nmessage = ' + message + '\n');

var charIndex = message.indexOf('M');

console.log( 'message.indexOf(\'M\') = ' + charIndex + '\n');

console.log( 'message.substr(24, 3) = ' +
            message.substr(charIndex, 3)  + '\n\n');
