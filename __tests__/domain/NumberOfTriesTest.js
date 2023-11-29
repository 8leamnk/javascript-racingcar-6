import NumberOfTries from '../../src/domain/NumberOfTries.js';
import MESSAGE from '../../src/constants/message.js';

describe('시도할 횟수 클래스 테스트', () => {
  test('시도할 횟수를 올바르게 입력하면 숫자로 변환되어 반환된다.', () => {
    // given
    const INPUT = '3';
    const OUTPUT = 3;

    // when
    const number = new NumberOfTries(INPUT).getNumber();

    // then
    expect(number).toBe(OUTPUT);
  });

  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const numberOfTries = new NumberOfTries(INPUT);
      return numberOfTries;
    }).toThrow(MESSAGE.error.numberFormat);
  });

  test('1 미만의 숫자를 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '0';

    // then
    expect(() => {
      const numberOfTries = new NumberOfTries(INPUT);
      return numberOfTries;
    }).toThrow(MESSAGE.error.numberRange);
  });
});
