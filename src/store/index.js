import {makeAutoObservable} from 'mobx';

class Timer {
  constructor() {
    makeAutoObservable(this);
  }
  secondsPassed = 0;
  name = 'longfeng';

  increaseTimer() {
    this.secondsPassed += 1;
  }

  changeName(name) {
    this.name = name;
  }
}

export default new Timer();
