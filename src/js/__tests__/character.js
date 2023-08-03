import Character from '../character';

describe('Character class tests', () => {
  let character;

  beforeEach(() => {
    character = new Character(100);
  });

  test.each([
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60],
    [6, 0],
    [10, 0],
  ])('for distance %d attack should be %d without being stoned', (distance, expectedAttack) => {
    character.attack = distance;
    expect(character.attack).toBe(expectedAttack);
  });

  test.each([
    [2, 85],
    [3, 72],
    [4, 60],
    [5, 48],
  ])('for distance %d attack should be %d when stoned', (distance, expectedAttack) => {
    character.stoned = true;
    character.attack = distance;
    expect(character.attack).toBe(expectedAttack);
  });
});
