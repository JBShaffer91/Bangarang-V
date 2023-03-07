export class Character {
  constructor(name, strength, speed) {
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.health = 100;
  }
}

module.exports = Character;
