import Winner from '../../src/domain/Winner.js';

describe('우승자 테스트', () => {
  test('모든 차수를 실행한 자동차 정보를 가지고 우승자를 가려낸다.', () => {
    // given
    const CARS_INFO = new Map([
      ['피아트', 1],
      ['롤스로이스', 3],
      ['람보르기니', 3],
    ]);
    const OUTPUT = '롤스로이스, 람보르기니';

    // when
    const winner = new Winner(CARS_INFO).getWinner();

    // then
    expect(winner).toBe(OUTPUT);
  });
});
