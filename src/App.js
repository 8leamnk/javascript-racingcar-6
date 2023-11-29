import { Console } from '@woowacourse/mission-utils';
import Names from './domain/Names.js';
import Forward from './domain/Forward.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const carsAnswer = await InputView.readCars();
    const carsInfo = new Names(carsAnswer).getCarsInfo();

    const numberOfTriesAnswer =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    // 유효성 검사
    const NOT_NUMBER_REG_EXP = /[^0-9]/;
    if (NOT_NUMBER_REG_EXP.test(numberOfTriesAnswer)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }

    const numberOfTries = Number(numberOfTriesAnswer);

    if (numberOfTries < 1) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력해 주세요.');
    }

    const forward = new Forward(carsInfo, numberOfTries);
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
