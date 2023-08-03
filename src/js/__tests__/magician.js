import Magician from '../magician';

describe('Magician class tests', () => {
  test('should inherit attack and stoned properties from Character', () => {
    const magician = new Magician(100);
    expect(magician._attack).toBe(100);
    expect(magician._stoned).toBeFalsy();
    expect(magician.attack).toBe(100);
    expect(magician.stoned).toBeFalsy();
  });
});
