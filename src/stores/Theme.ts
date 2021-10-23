import { observable, action, makeObservable } from 'mobx';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable theme: string = 'dark';

  @action
  changeTheme(newTheme: string) {
    this.theme = newTheme;
  }
}

export default new Store();
