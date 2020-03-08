/**
 *
 * Get Programming with JavaScript
 *
 * Chapter 9: Listing 9.11--A Place Constructor Part III
 *
*/

// The spacer namespace

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
  };

  console.log('\n\nLISTING FOR spacer.blank():');
  console.log('--------------------------\n');
  console.log(spacer.blank.toString(), '\n');

  console.log('\nLISTING FOR spacer.newLine():');
  console.log('----------------------------');
  console.log(spacer.newLine.toString(), '\n');

  console.log('\nLISTING FOR spacer.line():');
  console.log('-------------------------');
  console.log(spacer.line.toString(), '\n');

  console.log('\nLISTING FOR spacer.wrap():');
  console.log('-------------------------');
  console.log(spacer.wrap.toString(), '\n');

  console.log('\nLISTING FOR spacer.box():');
  console.log('------------------------');
  console.log(spacer.box.toString(), '\n');
  
  // The Place constructor
  
  var Place = function (title, description) {
      var newLine = spacer.newLine();
    
      this.title = title;
      this.description = description;
      this.items = [];
      this.exits = [];
    
      this.getItemsInfo = function () {
          var itemsString = 'Items: ' + newLine;
          this.items.forEach(function (item) {
              itemsString += '   - ' + item;
              itemsString += newLine;
          });
          return itemsString;
      };
    
      this.getExitsInfo = function () {
          var exitsString = 'Exits from ' + this.title;
          exitsString += ':' + newLine;
          
          this.exits.forEach(function (exit) {
              exitsString += '   - ' + exit.title;
              exitsString += newLine;
          });
        
          return exitsString;
      };
  
      this.getTitleInfo = function () {
          return spacer.box(
              this.title,
              this.title.length + 4,
              '='
          );
      };
  
      this.getInfo = function () {
          var infoString = this.getTitleInfo();
          infoString += this.description;
          infoString += newLine + newLine;
          infoString += this.getItemsInfo() + newLine;
          infoString += this.getExitsInfo();
          infoString += spacer.line(40, '=') + newLine;
          return infoString;
      };
  
    
      this.showInfo = function () {
          console.log(this.getInfo());
      };
  
      this.addItem = function (item) {
          this.items.push(item);
      };
    
      this.addExit = function (exit) {
          this.exits.push(exit);
      };
  };  // end Place()

  console.log('\nLISTING FOR OBJECT Place():');
  console.log('--------------------------\n');
  console.log(Place.toString(), '\n');
  
  // Test the Place constructor

  var library = new Place(
      'The Old Library',
      'You are in a library. Dusty books line the walls.'
  );
  
  var kitchen = new Place(
      'The Kitchen',
      'You are in the kitchen. There is a disturbing smell.'
  );
  
  var hall = new Place(
      'The Main Hall',
      'You are in a large hall. It is strangely empty.'
  );
  
  library.addItem('a rusty key');
  library.addExit(kitchen);
  library.addExit(hall);
  
  console.log('\nSAMPLE CALL TO library.showInfo():');
  console.log('---------------------------------\n');
  
  library.showInfo();
  
  console.log('\n');
  
  /* Further Adventures
   *
   * 1) Add a fourth place.
   *
   * 2) Add some items to your new place.
   *
   * 3) Add some exits to your new place.
   *
   * 4) Use showInfo to display info
   *    about your new place.
   *
   */
  