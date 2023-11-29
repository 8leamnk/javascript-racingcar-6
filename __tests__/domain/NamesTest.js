import Names from '../../src/domain/Names.js';
import MESSAGE from '../../src/constants/message.js';

describe('자동차 이름 클래스 테스트', () => {
  test('자동차 이름을 받아서 Map 객체로 반환한다.', () => {
    // given
    const INPUT = '람보르기니,롤스로이스,토요타';
    const output = new Map([
      ['람보르기니', 0],
      ['롤스로이스', 0],
      ['토요타', 0],
    ]);

    // when
    const carsInfo = new Names(INPUT).getCarsInfo();

    // then
    expect(carsInfo).toEqual(output);
  });

  test('쉼표, 반각영숫자, 한글 이외의 값을 입력하면 예외가 발생한다.', () => {
    const INPUT = 'BMW,그랜져,K-5';

    // then
    expect(() => {
      const names = new Names(INPUT);
      return names;
    }).toThrow(MESSAGE.error.carsFormat);
  });

  test('다섯글자가 넘는 자동차 이름이 있는 경우 예외가 발생한다.', () => {
    const INPUT = 'BMW,그랜져,K5,다섯글자넘는다';

    // then
    expect(() => {
      const names = new Names(INPUT);
      return names;
    }).toThrow(MESSAGE.error.nameLength);
  });
});
