/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 7: Listing 7.11c-- Displaying Player Information Using Objects
 *            (with author's challenge outlined below).
 *
*/

// NOTE: This listing is identical to Listing 7.11, but implements the
//       challenges outlined by the author as follows:
//
// Further Adventures:
//
// 1) Add an items property to each player.
//    items: "a rusty key, a piece of cheese"
//
// 2) Write a getPlayerItems function to return
//    a string for a player's items.
//
// 3) Update the getPlayerInfo function so it
//    also includes the items info.
//    Take the items info string into account
//    when working out the longest string.

// MY SOLUTION TO THE CHALLENGES FOLLOW BELOW:


var spacer = {
  
    blank: function () {
      
      return '';
      
    },  // end blank() 
  
    newLine: function () {
      
      return '\n';
      
    },  // end newLine()
  
    line: function (length, character) {
      
      var longString = '****************************************';
      longString += '----------------------------------------';
      longString += '========================================';
      longString += '++++++++++++++++++++++++++++++++++++++++';
      longString += '                                        ';
  
      length = Math.max(0, length);
      length = Math.min(40, length);
      
      return longString.substr(longString.indexOf(character), length);
      
    },  // end line()
    
    wrap : function (text, length, character) {
      
      var padLength = length - text.length - 3;
      
      var wrapText = character + ' ' + text;      
      wrapText += spacer.line(padLength, ' ');
      wrapText += character;
      
      return wrapText;
      
    },  // end wrap()
  
    box: function (text, length, character) {
      
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
      
    }  // end box()
    
  };  // end spacer()
  
  
  var getPlayerName = function (player) {
    
    return player.name;
    
  };    // end getPlayerName()
  
  var getPlayerHealth = function (player) {
    
    return player.name + ' has health ' + player.health;
    
  };
  
  var getPlayerPlace = function (player) {
    
    return player.name + ' is in ' + player.place;
    
  };

  var getPlayerItems = function (player) {

    return player.name + '\'s Items: ' + player.items;

  };
  
  var getPlayerInfo = function (player, character) {  

    var place = getPlayerPlace(player);
    
    var health = getPlayerHealth(player);

    var items = getPlayerItems(player);

    //console.log(items);
    
    var longest = Math.max(place.length, health.length, items.length) + 4;
 
    var info = spacer.box(getPlayerName(player), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.wrap(items, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);
    info += spacer.newLine();
  
    return info;
  };
  
  var player1 = {
    name: 'Kandra',
    place: 'The Dungeon of Doom',
    health: 50,
    items: 'a rusty key'
  };
  
  var player2 = {
    name: 'Dax',
    place: 'Limbo',
    health: 40,
    items: 'a piece of cheese'
  };

  // 2 SAMPLE CALLS TO getPlayerInfo():
  
  console.log(getPlayerInfo(player1, '='));
  console.log(getPlayerInfo(player2, '+'));
  
  console.log('\n\n');
  