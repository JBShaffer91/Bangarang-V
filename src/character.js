export class Character {
  constructor(name, strength, speed) {
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.health = 100;
    this.charisma = 10;
    this.intelligence = 10;
  }
}

module.exports = Character;
