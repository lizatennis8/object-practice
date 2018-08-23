var GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Bubbles":
        player = new Player(classType, 200, 0, 200, 100, 50)
        break;
      case "Johnny Bravo":
        player = new Player(classType, 100, 0, 100, 150, 200)
        break;
      case "Courage":
        player = new Player(classType, 80, 0, 50, 200, 50)
        break;
      case "Dexter":
        player = new Player(classType, 200, 0, 50, 200, 100)
        break;
    }
    var getInterface = document.querySelector(".interface");
    getInterface.innerHTML = "<img src='img/player/' + classType.toLowerCase() + '.png' class='img-avatar'><div><h3>' + classType + '</h3><p></p>Health: </";
  },
  setPreFight: function() {

  }
}
