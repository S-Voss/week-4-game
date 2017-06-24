// var byline = document.getElementById('byline');     // Find the H2
// bylineText = byline.innerHTML;                                      // Get the content of the H2
// bylineArr = bylineText.split('');                                   // Split content into array
// byline.innerHTML = '';                                                      // Empty current content
//
// var span;                   // Create variables to create elements
// var letter;
//
// for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
//   span = document.createElement("span");                    // Create a <span> element
//   letter = document.createTextNode(bylineArr[i]);   // Create the letter
//   if(bylineArr[i] == ' ') {                                             // If the letter is a space...
//     byline.appendChild(letter);                 // ...Add the space without a span
//   } else {
//         span.appendChild(letter);                       // Add the letter to the span
//     byline.appendChild(span);                   // Add the span to the h2
//   }
// }

//Global Objects
var hansolo = {
  name: "Han Solo",
  idName: "#han-solo",
  image: "../images/hansolo.jpg",
  hp: 100,
  attackpower: 8,
  cattackpower: 5,
};

var grievous = {
  name: "General Grievous",
  idName: "#general-grievous",
  image: "../images/Grievous.jpg",
  hp: 120,
  attackpower: 8,
  cattackpower: 10,
};

var darthvader = {
  name: "Darth Vader",
  idName: "#darth-vader",
  image: "../images/darthvader.jpg",
  hp: 150,
  attackpower: 8,
  cattackpower: 20,
};

var yoda = {
  name: "Yoda",
  idName: "#yoda",
  image: "../images/yoda.jpg",
  hp: 180,
  attackpower: 8,
  cattackpower: 25,
}
//An array of all of my character objects
var charList = [hansolo, grievous, darthvader, yoda];

//Global Variables
var playerCharacter;
var opponentCharacter;
var backupCharacters = [];
var playerHP;
var opponentHP;
var attackPower;

//Global Functions

//This function moves the players character across screen and sets the necessary player variables for the game
function chooseCharacter(chosenCharacter) {
  $(chosenCharacter.idName).appendTo("#player-character");
}

//This function moves the enemy characters across the screen and sets their necessary variables for the game
function charactersNotChose(unChosenCharacters) {
    $(unChosenCharacters.idName).appendTo("#enemy-backup");
}

//This code is the Game's Logic
$(document).ready(function() {

  //Initialize the game using a function to ensure restart feature works
  function initializeGame() {
    var playerHP;
    var opponentHP;
    var attackPower;

    $("#player-character, #enemy-battling, #enemy-backup").empty();
  };

  //Add the on.Click listener to the character options to set player-character
  $(".panel-default").on("click", function() {
    //Check to see if the player has already chosen a character or not.
    if (!playerCharacter) {

      var playerCharacterName = $(this).attr("name")
      //Loop through characters array to set the character the player chose and the ones they did not as corresponding value
      for (i = 0; i < charList.length; i++) {
        var currentCharacter = charList[i];

        if (currentCharacter.name === playerCharacterName) {
          playerCharacter = currentCharacter;
          chooseCharacter(playerCharacter);
        } else {
          backupCharacters.push(currentCharacter);
          charactersNotChose(currentCharacter);
        }
      }
    }
    console.log(playerCharacter);
    console.log(backupCharacters);
  });



    //If player has not chosen character, set chosen character as playerCharacter

});

//This function reloads the webpage after the game has been won
//window.location.reload();
