import { Console } from '@woowacourse/mission-utils';
import Names from './domain/Names.js';
import NumberOfTries from './domain/NumberOfTries.js';
import Forward from './domain/Forward.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const carsAnswer = await InputView.readCars();
    const carsInfo = new Names(carsAnswer).getCarsInfo();
    const numberAnswer = await InputView.readNumberOfTries();
    const number = new NumberOfTries(numberAnswer).getNumber();
    const forward = new Forward(carsInfo, number);
    const cars = forward.getCars();
    const executionResults = forward.getExecutionResults();

    Console.print('실행 결과');
    Console.print(executionResults.join('\n'));

    // 우승자를 가려내는 기능
    const winners = [];
    const max = Math.max(...cars.values());

    cars.forEach((moveNumber, carName) => {
      if (moveNumber === max) {
        winners.push(carName);
      }
    });

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
