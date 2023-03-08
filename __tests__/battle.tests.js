describe('Battle', () => {
  test('should initialize with an array of participants', () => {
    const participants = ['player1', 'player2', 'player3'];
    const battle = new Battle(participants);
    expect(battle.participants).toEqual(participants);
  });

  test('should generate a random turn order', () => {
    const participants = ['player1', 'player2', 'player3'];
    const battle = new Battle(participants);
    expect(battle.turnOrder.length).toBe(participants.length);
    expect(battle.turnOrder).not.toEqual(participants);
  });

  test('should keep the index of the currently active character in turnOrder', () => {
    const participants = ['player1', 'player2', 'player3'];
    const battle = new Battle(participants);
    expect(battle.activeCharacterIndex).toBe(0);
    expect(battle.turnOrder[battle.activeCharacterIndex]).toEqual(participants[0]);
  });
});
