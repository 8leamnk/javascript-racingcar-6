import Attempts from './domain/Attempts.js';
import Cars from './domain/Cars.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const carsAnswer = await InputView.readCars();
    const cars = new Cars(carsAnswer).getCars();
    const numberAnswer = await InputView.readNumber();
    const number = new Attempts(numberAnswer).getNumber();
  }
}

export default App;
