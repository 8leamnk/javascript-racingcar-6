import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readCars() {
    const answer = await Console.readLineAsync(MESSAGE.input.cars);

    return answer;
  },

  async readNumberOfTries() {
    const answer = await Console.readLineAsync(MESSAGE.input.numberOfTries);

    return answer;
  },
};

export default InputView;
