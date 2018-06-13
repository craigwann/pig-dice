// business logic
function Player() {
  this.name = name;
  this.score = 0;
  this.currentRolls = [];
}

Player.prototype.rollDice = function(playerTurn) {
  var roll = Math.floor(Math.random() * 6) + 1;
  this.currentRolls.push(roll);
  return roll;
}

function getSum(total, num) {
  return total + num;
}

Player.prototype.hold = function() {
  this.currentRolls[0] = this.currentRolls.reduce(getSum);
  this.score += this.currentRolls[0];
  this.currentRolls = [];
  // 20
  // ['20']
}

// user logic
// shorthand option for document ready: $(function() {});
$(document).ready(function() {
  var playerTurn = 1;
  var playerOne = new Player;
  var playerTwo = new Player;

  var diceToString= ['one', 'two', 'three', 'four', 'five', 'six']

  var diceString;

  // var diceString = diceToString[playerOne.currentRolls() -1]

  console.log("playerTurn currently: " + playerTurn);
  $("#hold").attr("disabled", true);

  $("#roll").click(function() {

    $("#hold").attr("disabled", false);

    if(playerTurn === 1) {
      diceString = diceToString[playerOne.rollDice() - 1];
      console.log(playerOne.currentRolls);
      console.log(diceString);
      if(playerOne.currentRolls[playerOne.currentRolls.length - 1] === 1) {
        console.log("rolled a '1'");
        console.log("before wipe: " + playerOne.currentRolls);
        playerOne.currentRolls = [];
        console.log("after wipe: " + playerOne.currentRolls);
        console.log("Player one current score: " + playerOne.score);
        $("#hold").attr("disabled", true);

        if(playerTurn === 1) {
          playerTurn = 2;
        } else if(playerTurn === 2) {
          playerTurn = 1;
        }

        console.log("playerTurn currently: " + playerTurn);
      }

      if (playerOne.score >= 20) {
        console.log("Player One Wins");
        $("#hold").attr("disabled", true);
        $("#roll").attr("disabled", true);
      }

    }
    else {
      diceString = diceToString[playerTwo.rollDice() - 1];
      console.log(playerTwo.currentRolls);

      if(playerTwo.currentRolls[playerTwo.currentRolls.length - 1] === 1) {
          console.log("rolled a '1'");
          console.log("before wipe: " + playerTwo.currentRolls);
          playerTwo.currentRolls = [];
          console.log("after wipe: " + playerTwo.currentRolls);
          console.log("Player two current score: " + playerTwo.score);
          $("#hold").attr("disabled", true);

          if(playerTurn === 1) {
            playerTurn = 2;
          } else if(playerTurn === 2) {
            playerTurn = 1;
          }

          console.log("playerTurn currently: " + playerTurn);
      }

      if (playerTwo.score >= 20) {
        console.log("Player Two Wins");
        $("#hold").attr("disabled", true);
        $("#roll").attr("disabled", true);
      }

    }

    $("#dice").html("<i class='fas fa-dice-" + diceString + " fa-10x'></i>");

  });

  $("#hold").click(function() {
    $("#hold").attr("disabled", true);
    if (playerTurn === 1) {
      playerOne.hold()
      console.log("Player one current score: " + playerOne.score);
    } else if(playerTurn === 2) {
      playerTwo.hold();
      console.log("Player two current score: " + playerTwo.score);
    }
    if(playerTurn === 1) {
      playerTurn = 2;
    } else if(playerTurn === 2) {
      playerTurn = 1;
    }
    console.log("playerTurn currently: " + playerTurn);
  })


});
