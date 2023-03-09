const Character = require('../src/character');

class Battle {
  constructor(characters) {
    this.characters = characters;
    this.turnOrder = [];
    this.activeCharacterIndex = 0;
    this.initialize();
  }

  initialize() {
    this.generateTurnOrder();
  }
  

  generateTurnOrder() {
    let currentIndex = this.characters.length, temporaryValue, randomIndex;
    while (currentIndex > 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.characters[currentIndex];
      this.characters[currentIndex] = this.characters[randomIndex];
      this.characters[randomIndex] = temporaryValue;
    }

    this.turnOrder = this.characters;
  }

  nextTurn() {
    // increment activeCharacterIndex by one
    this.activeCharacterIndex = (this.activeCharacterIndex + 1) % this.turnOrder.length;

    // return next character in turnOrder
    return this.turnOrder[this.activeCharacterIndex];
  }

  isOver() {
    let aliveCharacters = 0;
    this.characters.forEach((character) => {
      if (character instanceof Character && character.isAlive()) {
        aliveCharacters += 1;
      }
    });
  
    return aliveCharacters === 1;
  }
  

  start() {
    while (!this.isOver()) {
      const activeCharacter = this.nextTurn();
      const target = this.selectTarget(activeCharacter);
      const damage = activeCharacter.attack(target);
    }

    const winner = this.characters.find((character) => character.isAlive());
  }

  selectTarget(activeCharacter) {
    const targets = this.characters.filter((character) => character !== activeCharacter && character.isAlive());
    const randomIndex = Math.floor(Math.random() * targets.length);
    return targets[randomIndex];
  }
}

module.exports = Battle;
