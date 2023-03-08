export class Character {
  constructor(name, { strength = 10, speed = 10, dexterity = 10, constitution = 10, intelligence = 10, wisdom = 10, charisma = 10, health = 100, energy = 100, level = 1, luck = 10 } = {}) {
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
    this.health = health;
    this.energy = energy;
    this.level = level;
    this.luck = luck;
  }
}

module.exports = Character;
