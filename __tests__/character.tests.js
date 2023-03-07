const Character = require('./../src/character');

describe('Character', () => {
  test('should create a new character with the given name', () => {
    const character = new Character('Alice');
    expect(character.name).toEqual('Alice');
  });

  test('should create a new character with default stats if none are given', () => {
    const character = new Character('Bob');
    expect(character.strength).toEqual(10);
    expect(character.dexterity).toEqual(10);
    expect(character.constitution).toEqual(10);
    expect(character.intelligence).toEqual(10);
    expect(character.wisdom).toEqual(10);
    expect(character.charisma).toEqual(10);
    expect(character.health).toEqual(100);
    expect(character.energy).toEqual(100);
    expect(character.level).toEqual(1);
    expect(character.luck).toEqual(10);
  });

  test('should create a new character with the given strength', () => {
    const character = new Character('Bob', { strength: 15 });
    expect(character.strength).toEqual(15);
  });

  test('should create a new character with the given dexterity', () => {
    const character = new Character('Charlie', { dexterity: 20 });
    expect(character.dexterity).toEqual(20);
  });

  test('should create a new character with the given constitution', () => {
    const character = new Character('Dave', { constitution: 25 });
    expect(character.constitution).toEqual(25);
  });

  test('should create a new character with the given intelligence', () => {
    const character = new Character('Eve', { intelligence: 30 });
    expect(character.intelligence).toEqual(30);
  });

  test('should create a new character with the given wisdom', () => {
    const character = new Character('Frank', { wisdom: 35 });
    expect(character.wisdom).toEqual(35);
  });

  test('should create a new character with the given charisma', () => {
    const character = new Character('Grace', { charisma: 40 });
    expect(character.charisma).toEqual(40);
  });

  test('should create a new character with the given health', () => {
    const character = new Character('Henry', { health: 200 });
    expect(character.health).toEqual(200);
  });

  test('should create a new character with the given energy', () => {
    const character = new Character('Iris', { energy: 150 });
    expect(character.energy).toEqual(150);
  });

  test('should create a new character with the given level', () => {
    const character = new Character('Jack', { level: 10 });
    expect(character.level).toEqual(10);
  });

  test('should create a new character with the given luck', () => {
    const character = new Character('Kate', { luck: 50 });
    expect(character.luck).toEqual(50);
  });
});
