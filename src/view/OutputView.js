import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printExecutionResults(executionResults) {
    Console.print(MESSAGE.output.executionResults);
    Console.print(executionResults.join('\n'));
  },

  printWinner(winner) {
    Console.print(`${MESSAGE.output.winner}${winner.join(', ')}`);
  },
};

export default OutputView;
