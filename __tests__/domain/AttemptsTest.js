import Attempts from '../../src/domain/Attempts.js';

describe('시도할 횟수 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const attempts = new Attempts(INPUT);
      return attempts;
    }).toThrow('[ERROR]');
  });

  test.each([['0'], ['-2']])(
    '0 이하의 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const attempts = new Attempts(input);
        return attempts;
      }).toThrow('[ERROR]');
    },
  );
});
