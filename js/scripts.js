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
  } else {
    this.roundTotal += currentRoll;
  }
}

Players.prototype.totalingScore = function(roundTotal) {
  this.score += roundTotal;
  this.roundTotal = 0;
}

// UI logic

function enablePlay(buttonClick) {
  if(buttonClick === 2) {
    $("#play-btn").show();
  }
}

$(document).ready(function() {
  var oneDice = "img/fatpig.png"
  function diceImages (diceDisplayed) {
    if (diceDisplayed === 1) {
      $("#dice").html("<img src='img/fatpig.png'>");
    } else if (diceDisplayed === 2) {
      $("#dice").html("<img src='img/two.jpg'>");
    } else if (diceDisplayed === 3) {
      $("#dice").html("<img src='img/three.jpg'>");
    } else if (diceDisplayed === 4) {
      $("#dice").html("<img src='img/four.jpg'>");
    } else if (diceDisplayed === 5) {
      $("#dice").html("<img src='img/five.jpg'>");
    } else if (diceDisplayed === 6) {
      $("#dice").html("<img src='img/six.jpg'>");
    }
  }

  var player1Name;
  var player2Name;
  var player1;
  var player2;
  var buttonClick = 0;
  $("#player-input-1").submit(function(event) {
    event.preventDefault();

    buttonClick += 1;
    enablePlay(buttonClick);
    player1Name = $("#player-1").val();
    player1 = new Players(player1Name);
    console.log(player1);
    $("#player-input-1").hide();
  });

  $("#player-input-2").submit(function(event) {
    event.preventDefault();

    buttonClick += 1;
    enablePlay(buttonClick);
    player2Name = $("#player-2").val();
    player2 = new Players(player2Name);
    $("#player-input-2").hide();
  });

  $("#play-btn").click(function() {
      $(this).hide();
      $("#dice").show();
      $("#player-1-roll").show();
      $("#player-1-hold").show();
      $("#name1").text(player1Name + "'s score is: ");
      $("#name2").text(player2Name + "'s score is: ");
  });

  $("#player-1-hold").click(function() {
    $("#player-1-roll").hide();
    $("#player-1-hold").hide();
    $("#player-2-roll").show();
    $("#player-2-hold").show();
    player1.totalingScore(player1.roundTotal);
    $("#round-points-1").text("");
    $("#current-score-1").text(player1.score);
  });

  $("#player-2-hold").click(function() {
    $("#player-2-roll").hide();
    $("#player-2-hold").hide();
    $("#player-1-roll").show();
    $("#player-1-hold").show();
    player2.totalingScore(player2.roundTotal);
    $("#round-points-2").text("");
    $("#current-score-2").text(player2.score);
  });


  $("#player-1-roll").click(function() {
    var currentRoll = diceRoll();
    // $("#dice").text(currentRoll);
    diceImages(currentRoll);
    console.log(currentRoll);
    player1.totalingRoundPoints(currentRoll);
    $("#round-points-1").text(player1.roundTotal);
    // player1.totalingScore(player1.roundTotal);
    if(player1.roundTotal === 0) {
      $("#player-1-roll").hide();
      $("#player-1-hold").hide();
      $("#player-2-roll").show();
      $("#player-2-hold").show();
    }
    console.log("Total: "+player1.roundTotal);
    console.log("Score: "+player1.score);
    console.log(player1);
  });

  $("#player-2-roll").click(function() {
    var currentRoll = diceRoll();
    // $("#dice").text(currentRoll);
    diceImages(currentRoll);
    console.log(currentRoll);
    player2.totalingRoundPoints(currentRoll);
    $("#round-points-2").text(player2.roundTotal);
    // player1.totalingScore(player1.roundTotal);
    if(player2.roundTotal === 0) {
      $("#player-2-roll").hide();
      $("#player-2-hold").hide();
      $("#player-1-roll").show();
      $("#player-1-hold").show();
    }
    console.log("Total: "+player2.roundTotal);
    console.log("Score: "+player2.score);
    console.log(player2);
  });
});
