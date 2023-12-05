import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printExecution(carsDetails) {
    Console.print(MESSAGE.output.execution);

    carsDetails.forEach((details) => {
      Console.print(`${details}\n`);
    });
  },

  printWinner(winner) {
    Console.print(`${MESSAGE.output.winner} : ${winner}`);
  },
};

export default OutputView;
