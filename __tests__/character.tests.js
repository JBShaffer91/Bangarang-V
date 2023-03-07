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