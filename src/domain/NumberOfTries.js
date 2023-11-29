import MESSAGE from '../constants/message.js';

class NumberOfTries {
  #NOT_NUMBER_REG_EXP = /[^0-9]/;

  #MIN_RANGE = 1;

  #number = 0;

  constructor(answer) {
    this.#number = Number(answer);
    this.#validate(answer);
  }

  #validate(answer) {
    this.#validateNumber(answer);
    this.#validateRange();
  }

  #validateNumber(answer) {
    if (this.#NOT_NUMBER_REG_EXP.test(answer)) {
      throw new Error(MESSAGE.error.numberFormat);
    }
  }

  #validateRange() {
    if (this.#number < this.#MIN_RANGE) {
      throw new Error(MESSAGE.error.numberRange);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default NumberOfTries;
