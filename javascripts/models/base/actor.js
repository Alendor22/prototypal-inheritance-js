class Actor {
  constructor(x, y, image, attributes, name) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.attributes = attributes;
    this.name = name;
  }

  action(move) {
    switch (move) {
      case "Attack":
        getDiv().innerText += ` attacking`
        break;
      case "Defend":
        getDiv().innerText += ' defending'
        break;
      default:
        getDiv().innerText += " idle"
        break;
    }
  }
}