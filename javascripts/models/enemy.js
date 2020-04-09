class Enemy extends Actor {
  constructor(x, y, image, attributes, name, loot) {
    super(x, y, image, attributes, name);
    this.loot = loot;
  }

  action(move) {
    getDiv().innerText = 'Enemy is '
    super.action(move)
  }
}