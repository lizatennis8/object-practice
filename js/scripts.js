// Business logic
function Players(name) {
  this.name = name;
  this.roundTotal = 0;
  this.score = 0;
}

function diceRoll() {
  return currentDiceSide = Math.floor(Math.random() * 6) + 1;
}

Players.prototype.totalingRoundPoints = function(currentRoll) {
  if(currentRoll === 1) {
    this.roundTotal = 0;
    console.log("Done");
  } else {
    this.roundTotal += currentRoll;
  }
}

Players.prototype.totalingScore = function(roundTotal) {
  this.score += roundTotal;
  console.log("Round: " + this.roundTotal);
  console.log("Score: " + this.score);
}

// UI logic
$(document).ready(function() {
  var player1;
  var player2;
  $("#player-input-1").submit(function(event) {
    event.preventDefault();

    var player1Name = $("#player-1").val();
    player1 = new Players(player1Name);
    console.log(player1);
    $("#add-player-1-btn").hide();
    $("#player-1-roll").show();
    $("#player-1-hold").show();
  });

  $("#player-input-2").submit(function(event) {
    event.preventDefault();

    var player2Name = $("#player-2").val();
    player2 = new Players(player2Name);
    $("#add-player-2-btn").hide();
    $("#player-2-roll").show();
    $("#player-2-hold").show();
  });

  $("#play-btn").click(function() {
    $(this).hide();
    $("#dice").show();
  });

  $("#player-1-roll").click(function() {
    var currentRoll = diceRoll();
    $("#dice").text(currentRoll);
    player1.totalingRoundPoints(currentRoll);
    if(player1.roundTotal === 0) {
      $("#player-1-roll").hide();
    }
    console.log(player1.roundTotal);
  });
});
