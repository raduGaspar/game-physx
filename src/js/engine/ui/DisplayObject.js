import Scene from './Scene';

export default class DisplayObject extends Scene {
  constructor(x=0, y=0) {
    super();
    this.x = x;
    this.y = y;
    this.children = [];
  }
  add(elem) {
    if(elem.constructor === Array) {
      for(let el of elem) {
        el.scene = this.scene;
        this.children.push(el);
      }
    } else {
      elem.scene = this.scene;
      this.children.push(elem);
    }
  }
  remove(elem) {
    let idx = this.children.indexOf(elem);
    if(idx > -1) {
      this.children.splice(idx, 1);
    }
  }
  update() {
    for(let el of this.children) {
      if(typeof el.update === 'function') {
        el.update();
      }
      if(typeof el.render === 'function') {
        el.render();
      }
    }
  }
};
