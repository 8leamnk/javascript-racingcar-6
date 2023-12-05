import { Random } from '@woowacourse/mission-utils';
import Move from '../../src/domain/Move.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

describe('전진 클래스 테스트', () => {
  test('자동차 이름과 시도할 횟수를 가지고 전진하는 정보를 나타낸다.', () => {
    // given
    const CARS = ['nk', 'nj', 'rk'];
    const NUMBER = 2;
    const MOVE = 4;
    const STOP = 3;
    const randoms = [MOVE, STOP, STOP, MOVE, STOP, MOVE];
    const CARS_INFO = new Map([
      ['nk', 2],
      ['nj', 0],
      ['rk', 1],
    ]);
    const CARS_DETAILS = ['nk : -\nnj : \nrk : ', 'nk : --\nnj : \nrk : -'];

    mockRandoms([...randoms]);

    // when
    const move = new Move(CARS, NUMBER);
    const { carsInfo, carsDetails } = move.getCarsInfo();

    // then
    expect(carsInfo).toEqual(CARS_INFO);
    expect(carsDetails).toEqual(CARS_DETAILS);
  });
});
