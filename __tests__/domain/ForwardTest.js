import { Random } from '@woowacourse/mission-utils';
import Forward from '../../src/domain/Forward.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

describe('Forward 클래스 테스트', () => {
  test('전진하는 조건에 맞게 자동차 데이터가 제대로 업데이트 된다.', () => {
    // given
    const FORWARD = 4;
    const STOP = 3;
    const cars = new Map([
      ['nk', 0],
      ['nj', 0],
      ['rk', 0],
    ]);
    const NUMBER = 2;
    const randoms = [FORWARD, STOP, STOP, FORWARD, STOP, FORWARD];
    const output = new Map([
      ['nk', 2],
      ['nj', 0],
      ['rk', 1],
    ]);

    mockRandoms([...randoms]);

    // when
    const updatedCars = new Forward(cars, NUMBER).getCars();

    // then
    expect(updatedCars).toEqual(output);
  });
});
