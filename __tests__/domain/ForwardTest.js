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
  const FORWARD = 4;
  const STOP = 3;
  const cars = new Map([
    ['nk', 0],
    ['nj', 0],
    ['rk', 0],
  ]);
  const NUMBER = 2;
  const randoms = [FORWARD, STOP, STOP, FORWARD, STOP, FORWARD];

  test('전진하는 조건에 맞게 자동차 데이터가 제대로 업데이트 된다.', () => {
    // given
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

  test('시도할 횟수마다 전진하는 조건에 맞게 각 실행 결과가 반환된다.', () => {
    // given
    const output = ['nk : -\nnj : \nrk : \n', 'nk : --\nnj : \nrk : -\n'];

    mockRandoms([...randoms]);

    // when
    const executionResults = new Forward(cars, NUMBER).getExecutionResults();

    // then
    expect(executionResults).toEqual(output);
  });
});
