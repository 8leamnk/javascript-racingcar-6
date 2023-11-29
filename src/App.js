import { Console } from '@woowacourse/mission-utils';
import Names from './domain/Names.js';
import NumberOfTries from './domain/NumberOfTries.js';
import Forward from './domain/Forward.js';
import Winner from './domain/Winner.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const carsAnswer = await InputView.readCars();
    const carsInfo = new Names(carsAnswer).getCarsInfo();
    const numberAnswer = await InputView.readNumberOfTries();
    const number = new NumberOfTries(numberAnswer).getNumber();
    const forward = new Forward(carsInfo, number);
    const cars = forward.getCars();
    const executionResults = forward.getExecutionResults();
    const winner = new Winner(cars).getWinner();

    OutputView.printExecutionResults(executionResults);

    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
