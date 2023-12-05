import { Random } from '@woowacourse/mission-utils';

class Move {
  static #HYPEN = '-';

  static #RANDOM_RANGE = { start: 0, end: 9 };

  static #MOVE_CONDITION = 4;

  #carsInfo = new Map();

  #carsDetails = [];

  constructor(cars, number) {
    this.#createCarsInfo(cars);
    this.#moveCars(number);
  }

  #createCarsInfo(cars) {
    cars.forEach((name) => {
      this.#carsInfo.set(name, 0);
    });
  }

  #moveCars(number) {
    for (let i = 0; i < number; i += 1) {
      this.#moveOnce();
      this.#displayMoveDetails();
    }
  }

  #moveOnce() {
    this.#carsInfo.forEach((count, name) => {
      const { start, end } = Move.#RANDOM_RANGE;
      const random = Random.pickNumberInRange(start, end);

      if (random >= Move.#MOVE_CONDITION) {
        this.#carsInfo.set(name, count + 1);
      }
    });
  }

  #displayMoveDetails() {
    const details = [];

    this.#carsInfo.forEach((count, name) => {
      details.push(`${name} : ${Move.#HYPEN.repeat(count)}`);
    });

    this.#carsDetails.push(details.join('\n'));
  }

  getCarsInfo() {
    return {
      carsInfo: this.#carsInfo,
      carsDetails: this.#carsDetails,
    };
  }
}

export default Move;
