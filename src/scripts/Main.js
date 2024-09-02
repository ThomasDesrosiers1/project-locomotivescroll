import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';

class Main {
  constructor() {
    this.init();
    this.initAtropos();
  }

  init() {
    Icons.load();

    document.documentElement.classList.add('has-js');

    new ComponentFactory();
  }
}
new Main();
