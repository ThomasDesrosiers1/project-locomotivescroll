import LocomotiveScroll from 'locomotive-scroll';

export default class {
  constructor(element) {
    element = this.element;

    this.init();
  }

  init() {
    console.log('locomotive');

    const locomotive = new LocomotiveScroll();
  }
}
