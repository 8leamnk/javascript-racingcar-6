import { Random } from '@woowacourse/mission-utils';

class Forward {
  #cars = new Map();

  #executionResults = [];

  constructor(carsAnswer, number) {
    this.#convertToMap(carsAnswer);
    this.#moveCars(number);
  }

  #convertToMap(carsAnswer) {
    this.#cars = new Map(carsAnswer.split(',').map((carName) => [carName, 0]));
  }

  #moveOneTime() {
    this.#cars.forEach((moveNumber, carName) => {
      const integer = Random.pickNumberInRange(0, 9);

      if (integer >= 4) {
        this.#cars.set(carName, moveNumber + 1);
      }
    });
  }

  #recordOneTime() {
    let results = '';

    this.#cars.forEach((moveNumber, carName) => {
      results += `${carName}: ${'-'.repeat(moveNumber)}\n`;
    });

    this.#executionResults.push(results);
  }

  #moveCars(number) {
    for (let i = 0; i < number; i += 1) {
      this.#moveOneTime();
      this.#recordOneTime();
    }
  }

  getExecutionResults() {
    return this.#executionResults;
  }

  getCars() {
    return this.#cars;
  }
}

export default Forward;
