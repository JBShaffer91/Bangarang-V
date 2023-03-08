const Battle = require('./../src/battle');

describe('Battle', () => {
  let battle;

  beforeEach(() => {
    const participants = ['player1', 'player2', 'player3'];
    battle = new Battle(participants);
  });

  test('should initialize with an array of participants', () => {
    const participants = ['player1', 'player2', 'player3'];
    expect(battle.participants).toEqual(participants);
  });

  test('should generate a random turn order', () => {
    const participants = ['player1', 'player2', 'player3'];
    battle.generateTurnOrder();
    expect(battle.turnOrder.length).toBe(participants.length);
    expect(battle.turnOrder).toContain(participants[0]);
    expect(battle.turnOrder).toContain(participants[1]);
    expect(battle.turnOrder).toContain(participants[2]);
  });

  test('should keep the index of the currently active character in turnOrder', () => {
    const participants = ['player1', 'player2', 'player3'];
    expect(battle.activeCharacterIndex).toBe(0);
    expect(battle.nextTurn()).toEqual(participants[1]);
    expect(battle.activeCharacterIndex).toBe(1);
    expect(battle.nextTurn()).toEqual(participants[2]);
    expect(battle.activeCharacterIndex).toBe(2);
    expect(battle.nextTurn()).toEqual(participants[0]);
    expect(battle.activeCharacterIndex).toBe(0);
  });
  
});
