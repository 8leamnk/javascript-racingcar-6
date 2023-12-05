const MESSAGE = {
  input: {
    cars: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    number: '시도할 횟수는 몇 회인가요?\n',
  },

  error: {
    carsFormat: '[ERROR] 유효하지 않은 자동차 이름입니다.',
    nameLength:
      '[ERROR] 자동차의 이름은 한 글자 이상 다섯 글자 이하로만 입력해 주세요.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
