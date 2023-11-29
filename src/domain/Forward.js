import { Random } from '@woowacourse/mission-utils';

class Forward {
  #updatedCars = new Map();

  constructor(cars, number) {
    this.#updatedCars = cars;
    this.#moveCars(number);
  }

  #moveCars(number) {
    for (let i = 0; i < number; i += 1) {
      this.#updatedCars.forEach((moveNumber, carName) => {
        const integer = Random.pickNumberInRange(0, 9);

        if (integer >= 4) {
          this.#updatedCars.set(carName, moveNumber + 1);
        }
      });
    }
  }

  getUpdatedCars() {
    return this.#updatedCars;
  }
}

export default Forward;
