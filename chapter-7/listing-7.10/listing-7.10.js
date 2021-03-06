/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.10--Organizing Functions as
 *            Object Properties
 *
*/

var spacer = {
  
    blank: function ()  {
      
      return '';
      
    },
    
    newLine: function ()  {
      
      return '\n';
      
    },
    
    line: function (length, character)  {
      
      var longString = '**************************************************';
      longString += '--------------------------------------------------';
      longString += '==================================================';
      longString += '++++++++++++++++++++++++++++++++++++++++++++++++++';
      longString += '                                                   ';
      
      length = Math.max(0, length);
      
      length = Math.min(40, length);
      
      return longString.substr( longString.indexOf(character), length );
      
    },
    
    wrap: function (text, length, character)  {
      
      var padLength = length - text.length - 3;
      
      var wrapText = character + ' ' + text;
      wrapText += spacer.line(padLength, ' ');
      wrapText += character;
      
      return wrapText;
      
    },
    
    box: function (text, length, character) {
      
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      
      return boxText;
      
    }
    
  };  // end spacer()};
  
  
  // 2 SAMPLE CALLS to spacer.box():
  
  console.log( spacer.box('Mercury', 11, '=') );
  
  console.log( spacer.box('Mars', 11, '*') );

  spacer.newLine();
  spacer.newLine();
  