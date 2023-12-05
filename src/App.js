import Cars from './domain/Cars.js';
import Attempts from './domain/Attempts.js';
import Move from './domain/Move.js';
import Winner from './domain/Winner.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const carsAnswer = await InputView.readCars();
    const cars = new Cars(carsAnswer).getCars();
    const numberAnswer = await InputView.readNumber();
    const number = new Attempts(numberAnswer).getNumber();
    const move = new Move(cars, number);
    const { carsInfo, carsDetails } = move.getCarsInfo();
    const winner = new Winner(carsInfo).getWinner();

    OutputView.printExecution(carsDetails);
    OutputView.printWinner(winner);
  }
}

export default App;
