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

  attack(target) {
    let hitRoll = Math.floor(Math.random() * 20) + 1;
    let hitChance = hitRoll + this.dexterity;
    let dodgeRoll = Math.floor(Math.random() * 20) + 1;
    let dodgeChance = dodgeRoll + target.dexterity;

    if (hitChance >= dodgeChance) {
      let damage = Math.floor(Math.random() * this.strength) + 1;
      target.health -= damage;
      return `${this.name} hits ${target.name} for ${damage} damage!`;
    } else {
      return `${this.name} misses ${target.name}!`;
    }
  }
}

module.exports = Character;
