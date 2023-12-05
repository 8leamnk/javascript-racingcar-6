class Winner {
  #winner = [];

  constructor(carsInfo) {
    this.#findOutWinner(carsInfo);
  }

  #findOutWinner(carsInfo) {
    const max = Math.max(...carsInfo.values());

    carsInfo.forEach((count, name) => {
      if (count === max) {
        this.#winner.push(name);
      }
    });
  }

  getWinner() {
    return this.#winner.join(', ');
  }
}

export default Winner;
