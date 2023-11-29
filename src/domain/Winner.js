class Winner {
  #winner = [];

  constructor(cars) {
    this.#setWinner(cars);
  }

  #setWinner(cars) {
    const max = Math.max(...cars.values());

    cars.forEach((moveNumber, carName) => {
      if (moveNumber === max) {
        this.#winner.push(carName);
      }
    });
  }

  getWinner() {
    return this.#winner;
  }
}

export default Winner;
