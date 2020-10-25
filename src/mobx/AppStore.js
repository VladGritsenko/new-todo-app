import {action, computed, observable} from 'mobx';

class App {
  @observable count = 0;

  @action handleIncrease = () => {
    this.count++;
  }

  @action handleDecrease = () => {
    if (this.count) {
      this.count--;
    }
  }

  @computed get newNumber () {
    return this.count + 5;
  }
}

const AppStore = new App();
export default AppStore;