import InputView from './view/InputView.js';

class App {
  async play() {
    const carsAnswer = await InputView.readCars();
    const numberAnswer = await InputView.readNumber();
  }
}

export default App;
