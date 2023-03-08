export class Battle {
  constructor(participants) {
    this.participants = participants;
    this.turnOrder = [];
    this.activeCharacterIndex = 0;
    this.generateTurnOrder();
  }

  generateTurnOrder() {
    this.turnOrder = [...this.participants];
  }
  

  nextTurn() {
    this.activeCharacterIndex = (this.activeCharacterIndex + 1) % this.turnOrder.length;
    return this.turnOrder[this.activeCharacterIndex];
  }  
}

module.exports = Battle;
