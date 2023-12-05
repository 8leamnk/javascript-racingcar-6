import MESSAGE from '../constants/message.js';

class Attempts {
  #number;

  constructor(answer) {
    this.#number = Number(answer);
    this.#validate();
  }

  #validate() {
    this.#valudateNumber();
    this.#validateRange();
  }

  #valudateNumber() {
    if (!Number.isSafeInteger(this.#number)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  }

  #validateRange() {
    if (this.#number <= 0) {
      throw new Error(MESSAGE.error.numberRange);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default Attempts;
