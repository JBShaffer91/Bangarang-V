const Battle = require('../src/battle');

describe('Battle', () => {
  test('should initialize with an array of participants', () => {
    const participants = ['player1', 'player2', 'player3'];
    const battle = new Battle(participants);
    expect(battle.participants).toEqual(participants);
  });
});
