import MESSAGE from '../constants/message.js';

class Cars {
  static #LIMITED_LENGTH = 5;

  #cars;

  constructor(answer) {
    this.#cars = answer.split(',');
    this.#validate(answer);
  }

  #validate(answer) {
    Cars.#validateFormat(answer);
    this.#validateLength();
  }

  static #validateFormat(answer) {
    const NOT_FORMAT = /[^a-z|A-Z|가-힣|0-9|,]/;

    if (NOT_FORMAT.test(answer)) {
      throw new Error(MESSAGE.error.carsFormat);
    }
  }

  #validateLength() {
    this.#cars.forEach((name) => {
      if (!name || name.length > Cars.#LIMITED_LENGTH) {
        throw new Error(MESSAGE.error.nameLength);
      }
    });
  }

  getCars() {
    return this.#cars;
  }
}

export default Cars;
