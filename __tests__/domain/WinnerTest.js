import Winner from '../../src/domain/Winner.js';

describe('우승자를 가려내는 클래스 테스트', () => {
  test('자동차 전진 정보를 가지고 우승자를 가려낸다.', () => {
    // given
    const cars = new Map([
      ['람보르기니', 2],
      ['테슬라', 1],
      ['K5', 0],
      ['롤스로이스', 2],
      ['스피라', 1],
      ['토요타', 2],
    ]);
    const OUTPUT = ['람보르기니', '롤스로이스', '토요타'];

    // when
    const winner = new Winner(cars).getWinner();

    // then
    expect(winner).toEqual(OUTPUT);
  });
});
