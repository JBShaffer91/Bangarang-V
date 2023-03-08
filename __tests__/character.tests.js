const Character = require('./../src/character');

describe('Character', () => {
  test('should create a new character with the given name', () => {
    const character = new Character('Alice');
    expect(character.name).toBe('Alice');
  });

  test('should create a new character with default stats if none are given', () => {
    const character = new Character('Bob');
    expect(character.strength).toBe(10);
    expect(character.speed).toBe(10);
    expect(character.health).toBe(100);
    expect(character.charisma).toBe(10);
    expect(character.intelligence).toBe(10);
    expect(character.energy).toBe(100);
    expect(character.level).toBe(1);
    expect(character.luck).toBe(10);
  });

  test('should create a new character with the given strength', () => {
    const character = new Character('Bob', 10);
    expect(character.strength).toBe(10);
  });

  test('should create a new character with the given speed', () => {
    const character = new Character('Charlie', undefined, 10);
    expect(character.speed).toBe(10);
  });

  test('should create a new character with the given health', () => {
    const character = new Character('Eve', undefined, undefined, 100);
    expect(character.health).toBe(100);
  });

  test('should create a new character with the given charisma', () => {
    const character = new Character('Grace', undefined, undefined, undefined, 10);
    expect(character.charisma).toBe(10);
  });

  test('should create a new character with the given intelligence', () => {
    const character = new Character('Iris', undefined, undefined, undefined, undefined, 10);
    expect(character.intelligence).toBe(10);
  });

  test('should create a new character with the given energy', () => {
    const character = new Character('Jack', undefined, undefined, undefined, undefined, undefined, 100);
    expect(character.energy).toBe(100);
  });

  test('should create a new character with the given level', () => {
    const character = new Character('Kate', undefined, undefined, undefined, undefined, undefined, undefined, 1);
    expect(character.level).toBe(1);
  });

  test('should create a new character with the given luck', () => {
    const character = new Character('Lucas', undefined, undefined, undefined, undefined, undefined, undefined, undefined, 10);
    expect(character.luck).toBe(10);
  });
});

