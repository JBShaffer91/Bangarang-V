const Character = require('../src/character');
const Battle = require('../src/battle');

const characters = [
  new Character('Gandalf'),
  new Character('Aragorn'),
  new Character('Legolas'),
  new Character('Gimli'),
];

const battle = new Battle(characters);
battle.start();

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
  
  test('should return true when all participants are defeated except for one', () => {
    expect(battle.isOver()).toBe(false);
    battle.participants.forEach(participant => {
      battle.defeat(participant);
    });
    expect(battle.isOver()).toBe(true);
  });

  test('should initialize with an array of participants', () => {
    const participants = ['player1', 'player2', 'player3'];
    expect(battle.characters).toEqual(participants);
  });
  
  test('should initialize with an array of participants', () => {
    const participants = [
      new Character('player1', 10, 5),
      new Character('player2', 12, 4),
      new Character('player3', 8, 6),
    ];
    const battle = new Battle(participants);
    expect(battle.participants).toEqual(participants);
  });  
});
