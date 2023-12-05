import Cars from './domain/Cars.js';
import Attempts from './domain/Attempts.js';
import Move from './domain/Move.js';
import Winner from './domain/Winner.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #carsDetails;

  #winner;

  async play() {
    await this.#startGame();
    this.#printResult();
  }

  async #startGame() {
    const carsAnswer = await InputView.readCars();
    const cars = new Cars(carsAnswer).getCars();
    const numberAnswer = await InputView.readNumber();
    const number = new Attempts(numberAnswer).getNumber();
    const move = new Move(cars, number);
    const { carsInfo, carsDetails } = move.getCarsInfo();
    const winner = new Winner(carsInfo).getWinner();

    this.#carsDetails = carsDetails;
    this.#winner = winner;
  }

  #printResult() {
    OutputView.printExecution(this.#carsDetails);
    OutputView.printWinner(this.#winner);
  }
}

export default App;
