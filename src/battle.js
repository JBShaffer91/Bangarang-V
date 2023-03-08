const Character = require('./character');

class Battle {
  constructor(participants) {
    if (!Array.isArray(participants)) {
      throw new Error('Invalid argument type');
    }
    this.participants = participants;
    this.turnOrder = null;
    this.activeCharacterIndex = null;
  }

  initialize() {
    this.participants.forEach((participant) => {
      if (!(participant instanceof Character)) {
        throw new Error('Participants must be instances of the Character class');
      }
    });
    this.generateTurnOrder();
    this.activeCharacterIndex = 0;
  }

  generateTurnOrder() {
    const shuffled = [...this.participants].sort(() => 0.5 - Math.random());
    this.turnOrder = shuffled;
  }

  nextTurn() {
    this.activeCharacterIndex = (this.activeCharacterIndex + 1) % this.turnOrder.length;
    return this.turnOrder[this.activeCharacterIndex];
  }

  isOver() {
    return this.participants.filter((participant) => participant.hp > 0).length <= 1;
  }

  defeat(participant) {
    if (!(participant instanceof Character)) {
      throw new Error('Participant must be an instance of the Character class');
    }
    participant.hp = 0;
  }
}

module.exports = Battle;
