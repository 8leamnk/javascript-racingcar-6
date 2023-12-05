import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readCars() {
    const answer = await Console.readLineAsync(MESSAGE.input.cars);

    return answer;
  },

  async readNumber() {
    const answer = await Console.readLineAsync(MESSAGE.input.number);

    return answer;
  },
};

export default InputView;
