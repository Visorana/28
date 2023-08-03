import Daemon from '../daemon';

describe('Daemon class tests', () => {
  test('should inherit attack and stoned properties from Character', () => {
    const daemon = new Daemon(100);
    expect(daemon._attack).toBe(100);
    expect(daemon._stoned).toBeFalsy();
    expect(daemon.attack).toBe(100);
    expect(daemon.stoned).toBeFalsy();
  });
});
