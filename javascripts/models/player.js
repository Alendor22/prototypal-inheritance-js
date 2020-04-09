class Player extends Actor {
  constructor(x, y, image, lives, attributes, name) {
    super(x, y, image, attributes, name);
    this.lives = lives;
  }

  action(move) {
    getDiv().innerText = 'Player is '
    super.action(move)
  }
}