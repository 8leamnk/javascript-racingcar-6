import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printExecutionResults(executionResults) {
    Console.print(MESSAGE.output.executionResults);
    Console.print(executionResults.join('\n'));
  },
};

export default OutputView;
