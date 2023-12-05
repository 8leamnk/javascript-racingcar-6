import Cars from '../../src/domain/Cars';

describe('자동차 이름 테스트', () => {
  test('쉼표, 영문자, 한글, 숫자 외의 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '피아트!,토요타';

    // then
    expect(() => {
      const cars = new Cars(INPUT);
      return cars;
    }).toThrow('[ERROR]');
  });

  test.each([
    ['람보르기니,마세라티,롤스로이스,비엠더블유3시리즈'],
    [',피아트,토요타'],
  ])(
    '빈 문자열 혹은 5 글자 이상의 자동차 이름을 입력하면 예외가 발생한다.',
    (input) => {
      // then
      expect(() => {
        const cars = new Cars(input);
        return cars;
      }).toThrow('[ERROR]');
    },
  );

  test('올바른 자동차 이름을 입력하면 배열로 반환된다.', () => {
    // given
    const INPUT = '람보르기니,마세라티,롤스로이스';
    const OUTPUT = ['람보르기니', '마세라티', '롤스로이스'];

    // when
    const cars = new Cars(INPUT).getCars();

    // then
    expect(cars).toEqual(OUTPUT);
  });
});
