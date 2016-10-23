import Canvas from './Canvas';

export default class Scene extends Canvas {
  constructor(x=0, y=0, width, height) {
    super();
    this.children = [];
    this.x = x;
    this.y = y;

    // store initial width and height
    this.initWidth = width;
    this.initHeight = height;
    this.width = width;
    this.height = height;
  }
  add(elem) {
    if(elem.constructor === Array) {
      for(let el of elem) {
        el.scene = this;
        this.children.push(el);
      }
    } else {
      elem.scene = this;
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
    // resize scene to fit canvas if no initial size was provided
    this.width = this.initWidth || this.canvas.width;
    this.height = this.initHeight || this.canvas.height;

    // clear screen
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

    // clip screen size
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
    this.ctx.clip();

    // translate canvas to screen x and y
    // to make all drawings' start positions, relative to this screen
    this.ctx.translate(this.x, this.y);

    // update and render all scene elements
    for(let elem of this.children) {
      if(elem.update) {
        elem.update();
      }
      if(elem.render) {
        elem.render();
      }
    }

    // close path opened for screen clip and restore
    this.ctx.closePath();
    this.ctx.restore();
  }

  static wrap(object) {
    let width = (object.width || object.size);
    let height = (object.height || object.size);

    if(object.x > object.scene.width) {
      object.x = -width;
    } else if (object.x < -width) {
      object.x = object.scene.width;
    } else if(object.y > object.scene.height) {
      object.y = -height;
    } else if (object.y < -height) {
      object.y = object.scene.height;
    }
  }
};
