/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.11-- Displaying Player Information Using Objects
 *
*/

var spacer = {
  
    blank: function () {
      
      return '';
      
    },
  
    newLine: function () {
      
      return '\n';
      
    },
  
    line: function (length, character) {
      
      var longString = '****************************************';
      longString += '----------------------------------------';
      longString += '========================================';
      longString += '++++++++++++++++++++++++++++++++++++++++';
      longString += '                                        ';
  
      length = Math.max(0, length);
      length = Math.min(40, length);
      
      return longString.substr(longString.indexOf(character), length);
      
    },
    
    wrap : function (text, length, character) {
      
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
    
  };  // end spacer()
  
  
  var getPlayerName = function (player) {
    
    return player.name;
    
  };
  
  var getPlayerHealth = function (player) {
    
    return player.name + ' has health ' + player.health;
    
  };
  
  var getPlayerPlace = function (player) {
    
    return player.name + ' is in ' + player.place;
    
  };
  
  var getPlayerInfo = function (player, character) {  
    var place = getPlayerPlace(player);
    
    var health = getPlayerHealth(player);
    
    var longest = Math.max(place.length, health.length) + 4;
  
    var info = spacer.box(getPlayerName(player), longest, character);
    
    info += spacer.wrap(place, longest, character);
    
    
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);
    info += spacer.newLine();
  
    return info;
  };
  
  var player1 = {
    name: 'Kandra',
    place: 'The Dungeon of Doom',
    health: 50
  };
  
  var player2 = {
    name: 'Dax',
    place: 'Limbo',
    health: 40
  };

  // 2 SAMPLE CALLS TO getPlayerInfo():
  
  console.log(getPlayerInfo(player1, '='));
  console.log(getPlayerInfo(player2, '+'));
  
  console.log('\n\n');
  