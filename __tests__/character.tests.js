const Character = require('./../src/character');

describe('Character', () => {
  test('should create a new character with the given name', () => {
    const character = new Character('Alice');
    expect(character.name).toEqual('Alice');
  });

  test('should create a new character with the given strength', () => {
    const character = new Character('Bob', 10);
    expect(character.strength).toEqual(10);
  });
});

  test('should create a new character with the given speed', () => {
  const character = new Character('Alice', 10, 5);
  expect(character.speed).toEqual(5);
});

test('should create a new character with the given health', () => {
  const character = new Character('Alice', 10, 5, 100);
  expect(character.health).toEqual(100);
});

test('should create a new character with the given charisma', () => {
  const character = new Character('Alice', 10, 5, 100, 10);
  expect(character.charisma).toEqual(10);
});

test('should create a new character with the given intelligence', () => {
  const character = new Character('Alice', 10, 5, 100, 10, 10);
  expect(character.intelligence).toEqual(10);
});