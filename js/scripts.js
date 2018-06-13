// business logic
function Player(name, score) {
  this.name = name;
  this.score = score;
  this.currentRolls = [];
}

Player.prototype.rollDice = function(playerTurn) {
  var roll = Math.floor(Math.random() * 6) + 1;
  if(roll === 1) {
    this.currentRolls.push(0);
    return roll;
  }
  this.currentRolls.push(roll);
  return roll;
}

function getSum(total, num) {
  return total + num;
}

Player.prototype.hold = function() {
  this.currentRolls = this.currentRolls.reduce(getSum);
}


// user logic
// shorthand option for document ready: $(function() {});
$(document).ready(function() {
  var playerTurn = 1;
  var playerOne = new Player;
  var playerTwo = new Player;

  console.log("playerTurn currently: " + playerTurn);
  console.log(playerOne);

  $("#roll").click(function() {
    playerOne.rollDice();
    console.log(playerOne.currentRolls);
    // if(playerOne.currentRolls[playerOne.currentRolls.length - 1] === 0) {
    //   console.log("rolled a '1'");
    //   console.log("before wipe: " + playerOne.currentRolls);
    //   playerOne.currentRolls = [];
    //   console.log("after wipe: " + playerOne.currentRolls);
    if(currentPlayer.currentRolls === [])
      if(playerTurn === 1) {
        playerTurn = 2;
      } else if(playerTurn === 2) {
        playerTurn = 1;
      }
      console.log("playerTurn currently: " + playerTurn);
    }
  });

  $("#dice").append("<i class='fas fa-dice-six fa-10x'></i>");


});
