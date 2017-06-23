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

//This code is for the character object variables as well as other userful global variables
var hansolo = {
  name: "Han Solo",
  image: "../images/hansolo.jpg",
  hp: 100,
  attackpower: 8,
  cattackpower: 5,
};

var grievous = {
  name: "General Grievous",
  image: "../images/Grievous.jpg",
  hp: 120,
  attackpower: 8,
  cattackpower: 10,
};

var darthvader = {
  name: "Darth Vader",
  image: "../images/darthvader.jpg",
  hp: 150,
  attackpower: 8,
  cattackpower: 20,
};

var yoda = {
  name: "Yoda",
  image: "../images/yoda.jpg",
  hp: 180,
  attackpower: 8,
  cattackpower: 25,
}

var playerCharacter;
var opponentCharacter;
var playerHP;
var opponentHP;
var attackPower;

//This code is the Game's Logic
$(document).ready = function() {

  //Initialize the game using a function to ensure restart feature works
  function initializeGame() {
    var playerHP;
    var opponentHP;
    var attackPower;

    $("#player-character, #enemy-battling, #enemy-backup").empty();
  }

  //Add the on.Click listener to the character options to set player-character
  $("panel-default").on("click", function() {

    //Check to see if the player has already chosen a character or not.
    if (playerCharacter != "") return;

    //If player has not chosen character, set chosen character as playerCharacter
    if (playerCharacter === "") {
      playerCharacter = this.data
      $("#player-character").html(playerCharacter);
    }

  });
};
