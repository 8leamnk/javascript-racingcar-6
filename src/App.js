import { Console } from '@woowacourse/mission-utils';

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
  }
}

export default App;
