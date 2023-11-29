const MESSAGE = {
  input: {
    cars: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    numberOfTries: '시도할 횟수는 몇 회인가요?\n',
  },

  output: {
    executionResults: '실행 결과',
    winner: '최종 우승자 : ',
  },

  error: {
    carsFormat:
      '[ERROR] 특수문자를 제외한 이름을 띄어쓰기 없이 쉼표로 구분해 주세요.',
    nameLength: '[ERROR] 이름은 1글자 이상 5글자 이하만 가능합니다.',
    numberFormat: '[ERROR] 숫자를 입력해 주세요.',
    numberRange: '[ERROR] 1 이상의 숫자를 입력해 주세요.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
