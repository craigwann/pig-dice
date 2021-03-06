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
  var tempScore = 0

  $("#playerOneTurn").removeClass("bg-light").addClass("bg-success");

  // var diceString = diceToString[playerOne.currentRolls() -1]

  // console.log("playerTurn currently: " + playerTurn);
  $("#hold").attr("disabled", true);

  $("#roll").click(function() {

    $("#hold").attr("disabled", false);

    // player one

    if(playerTurn === 1) {
      diceString = diceToString[playerOne.rollDice() - 1];
      if (tempScore === 0) {
        tempScore = playerOne.score;
      }
      // console.log("initial tempScore: " + tempScore);
      tempScore += playerOne.currentRolls[playerOne.currentRolls.length - 1];
      // console.log("+roll tempScore: " + tempScore);
      // console.log(playerOne.currentRolls);
      // console.log(diceString);

      $("#playerOneScore").text(tempScore);
      $("#playerOneRolls").append("<i class='pr-1 fas fa-spin fa-dice-" + diceString + " '></i>");

      if(playerOne.currentRolls[playerOne.currentRolls.length - 1] === 1) {
        tempScore = 0;
        $("#playerOneScore").text(playerOne.score);
        // console.log("rolled a '1'");
        // console.log("before wipe: " + playerOne.currentRolls);
        playerOne.currentRolls = [];
        // console.log("after wipe: " + playerOne.currentRolls);
        // console.log("Player one current score: " + playerOne.score);
        $("#hold").attr("disabled", true);

        if(playerTurn === 1) {
          playerTurn = 2;
          $("#playerOneTurn").removeClass("bg-success").addClass("bg-light");
          $("#playerTwoTurn").removeClass("bg-light").addClass("bg-success");
        } else if(playerTurn === 2) {
          playerTurn = 1;
        }

        // console.log("playerTurn currently: " + playerTurn);
      }

      if (tempScore >= 100) {
        // console.log("Player One Wins");
        $("#hold").attr("disabled", true);
        $("#roll").attr("disabled", true);
      }

    }

    // player two's mirror

    else {
      diceString = diceToString[playerTwo.rollDice() - 1];
      if(tempScore === 0) {
        tempScore = playerTwo.score;
      }
      // console.log("initial tempScore: " + tempScore);
      tempScore += playerTwo.currentRolls[playerTwo.currentRolls.length -1];
      // console.log("+roll tempScore: " + tempScore);
      // console.log(playerTwo.currentRolls);

      $("#playerTwoScore").text(tempScore);
      $("#playerTwoRolls").append("<i class='pr-1 fas fa-spin fa-dice-" + diceString + " '></i>");

      if(playerTwo.currentRolls[playerTwo.currentRolls.length - 1] === 1) {
          tempScore = 0;
          $("#playerTwoScore").text(playerTwo.score);
          // console.log("rolled a '1'");
          // console.log("before wipe: " + playerTwo.currentRolls);
          playerTwo.currentRolls = [];
          // console.log("after wipe: " + playerTwo.currentRolls);
          // console.log("Player two current score: " + playerTwo.score);
          $("#hold").attr("disabled", true);

          if(playerTurn === 1) {
            playerTurn = 2;
          } else if(playerTurn === 2) {
            $("#playerTwoTurn").removeClass("bg-success").addClass("bg-light");
            $("#playerOneTurn").removeClass("bg-light").addClass("bg-success");
            playerTurn = 1;
          }

          // console.log("playerTurn currently: " + playerTurn);
      }

      if (tempScore >= 100) {
        // console.log("Player Two Wins");
        $("#hold").attr("disabled", true);
        $("#roll").attr("disabled", true);
      }

    }

    $("#dice").html("<i class='fas fa-dice-" + diceString + " fa-10x'></i>");

  });

  $("#hold").click(function() {
    tempScore = 0;
    $("#hold").attr("disabled", true);
    if (playerTurn === 1) {
      playerOne.hold()
      $("#playerOneTurn").removeClass("bg-success").addClass("bg-light");
      $("#playerTwoTurn").removeClass("bg-light").addClass("bg-success");
      $("#playerOneScore").text(playerOne.score);
      // console.log("Player one current score: " + playerOne.score);
    } else if(playerTurn === 2) {
      playerTwo.hold();
      $("#playerTwoTurn").removeClass("bg-success").addClass("bg-light");
      $("#playerOneTurn").removeClass("bg-light").addClass("bg-success");
      $("#playerTwoScore").text(playerTwo.score);
      // console.log("Player two current score: " + playerTwo.score);
    }
    if(playerTurn === 1) {
      playerTurn = 2;
    } else if(playerTurn === 2) {
      playerTurn = 1;
    }
    // console.log("playerTurn currently: " + playerTurn);
  })


});
