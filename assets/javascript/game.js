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
var cAttackPower;
var opponents = 3;
//Global Functions

//This function moves the players character across screen and sets the necessary player variables for the game
function chooseCharacter(chosenCharacter) {
  $(chosenCharacter.idName).appendTo("#player-character");
};

//This function moves the enemy characters across the screen and sets their necessary variables for the game
function charactersNotChose(unChosenCharacters) {
    $(unChosenCharacters.idName).appendTo("#enemy-backup");
};

//This code is the Game's Logic
$(document).ready(function() {

  //Initialize the game using a function to ensure restart feature works
  function initializeGame() {
    //Ensures that the game loads correctly
    $("#player-character, #enemy-battling, #enemy-backup").empty();
  };

  //Add the on.Click listener to the character options to set player-character
  $(".panel-default").on("click", function() {
    //Check to see if the player has already chosen a character or not.
    if (!playerCharacter) {
      //Set a variable holding the player's choice regarding the choices class name
      var playerCharacterName = $(this).attr("name");
      //Loop through characters array to set the character the player chose and the ones they did not as corresponding value
      for (i = 0; i < charList.length; i++) {
        var currentCharacter = charList[i];
        //Iterate through the possible characters and set the user choice as their character
        if (currentCharacter.name === playerCharacterName) {
          playerCharacter = currentCharacter;
          playerHP = playerCharacter.hp;
          attackPower = playerCharacter.attackpower;
          chooseCharacter(playerCharacter);
        //While iterating, set the characters the player did not choose as enemies
        } else {
          backupCharacters.push(currentCharacter);
          charactersNotChose(currentCharacter);
        }
      }
    } else {
      //If the player has selected their character, let the next option choose the first enemy to fight.
      if (playerCharacter) {
        //Set the variable holding the player's choice regarding first enemy to fight
        var enemyCharacterName = $(this).attr("name");
        //Loop through backupCharacters array to set the character the player chose to fight
        for (i = 0; i < backupCharacters.length; i++) {
          var characterCheck = backupCharacters[i];
          //Iterate through the possible characters left and set the user's next choice as currentEnemy
          if (characterCheck.name === enemyCharacterName) {
            opponentCharacter = enemyCharacterName;
            opponentHP = characterCheck.hp;
            cAttackPower = characterCheck.cattackpower;
            $(characterCheck.idName).appendTo("#enemy-battling");
          }
        }
      }
    };
  });

  //Add the on.Click listener to the fight button to enable the fight Logic
  $(".fight-button").on("click", function() {
    //Checks to make sure the game has not already been won
    if (opponents != 0) {
      if (!opponentCharacter) {
        alert("You must choose an opponent!");
      }
      //Check to see if both player and opponent are alive
      if (opponentHP > 0 && playerHP > 0 && attackPower < opponentHP) {
        //Logic to increase player's attack, decrease HP of opponent and player accordingly.
        opponentHP = opponentHP - attackPower;
        playerHP = playerHP - cAttackPower;
        attackPower = attackPower + 8;
      //Check to see if opponent has died and player is alive.
    } else if (opponentHP < 0 && playerHP > 0 || attackPower >= opponentHP) {
        $("#enemy-battling").empty();
        alert("Opponent defeated. Choose a new opponent.")
        //Decreases the count of opponents left to fight. This will help determine the victory condition.
        opponents--;
      //Check to see if player has died
    } else if (opponentHP > 0 && playerHP <= 0){
        alert("You died! Please restart the game to try again.")
      };
    } else {
      alert("YOU ARE VICTORIOUS! Restart the game to play again.");
    }

    //Could not get HTML to update displaying the HP for the player and opponent. This is the only way I could show those statistics currently. 
    console.log("Attack Power: " + attackPower);
    console.log("Player HP: " + playerHP);
    console.log("Opponent HP: " + opponentHP);
  });

});

//This function reloads the webpage after the game has been won
$(".restart-button").on("click", function() {
  window.location.reload();
});
