import MESSAGE from '../constants/message.js';

class Names {
  #REG_EXP = /[^0-9|가-힣|a-z|A-Z|,]/;

  #RANGE = {
    start: 1,
    end: 5,
  };

  #names = '';

  constructor(answer) {
    this.#names = answer;
    this.#validate();
  }

  #validate() {
    this.#validateFormat();
    this.#validateLength();
  }

  #validateFormat() {
    if (this.#REG_EXP.test(this.#names)) {
      throw new Error(MESSAGE.error.carsFormat);
    }
  }

  #validateLength() {
    const { start, end } = this.#RANGE;

    this.#names.split(',').forEach((name) => {
      if (name.length < start || name.length > end) {
        throw new Error(MESSAGE.error.nameLength);
      }
    });
  }

  getCarsInfo() {
    return new Map(this.#names.split(',').map((carName) => [carName, 0]));
  }
}

export default Names;
