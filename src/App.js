import { Console } from '@woowacourse/mission-utils';
import Forward from './domain/Forward.js';

class App {
  async play() {
    const carsAnswer = await Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    // 유효성 검사
    const REG_EXP = /[^0-9|가-힣|a-z|A-Z|,]/;

    if (REG_EXP.test(carsAnswer)) {
      throw new Error(
        '[ERROR] 특수문자를 제외한 이름을 띄어쓰기 없이 쉼표로 구분해 주세요.',
      );
    }

    carsAnswer.split(',').forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error('[ERROR] 이름은 1글자 이상 5글자 이하만 가능합니다.');
      }
    });

    const numberOfTriesAnswer =
      await Console.print('시도할 횟수는 몇 회인가요?\n');

    // 유효성 검사
    const NOT_NUMBER_REG_EXP = /[^0-9]/;
    if (NOT_NUMBER_REG_EXP.test(numberOfTriesAnswer)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }

    const numberOfTries = Number(numberOfTriesAnswer);

    if (numberOfTries < 1) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력해 주세요.');
    }

    const forward = new Forward(carsAnswer, numberOfTries);
    const cars = forward.getUpdatedCars();
    const executionResults = forward.getExecutionResults();

    Console.print('실행 결과');
    Console.print(executionResults.join('\n'));
  }
}

export default App;
