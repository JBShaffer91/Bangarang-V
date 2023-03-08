class Battle {
  constructor(participants) {
    this.participants = participants;
    this.turnOrder = [];
    this.activeCharacterIndex = 0;
    this.generateTurnOrder();
  }

  generateTurnOrder() {
    const shuffledParticipants = this.participants.sort(() => Math.random() - 0.5);
    this.turnOrder = [...shuffledParticipants];
  }
}

module.exports = Battle;
