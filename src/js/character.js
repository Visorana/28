export default class Character {
  constructor(attack) {
    this._attack = attack;
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return Math.round(this._attack);
  }

  set attack(distance) {
    if (distance <= 5) {
      let modifiedAttack = this._attack * (1 - (distance - 1) * 0.1);

      if (this._stoned) {
        modifiedAttack -= Math.log2(distance) * 5;
      }

      this._attack = modifiedAttack;
    } else {
      this._attack = 0;
    }
  }
}
