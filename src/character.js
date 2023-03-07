export class Character {
  constructor(name, strength = 1, speed = 1, health = 100, charisma = 1, intelligence = 1, energy = 100, level = 1, luck = 1) {
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.health = health;
    this.charisma = charisma;
    this.intelligence = intelligence;
    this.energy = energy;
    this.level = level;
    this.luck = luck;
  }
}

module.exports = Character;
