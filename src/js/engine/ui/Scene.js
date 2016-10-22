import Canvas from './Canvas';

let sceneElements = [];

export default class Scene extends Canvas {
  constructor(x=0, y=0, width=0, height=0) {
    super();
    this.x = x;
    this.y = y;
    this.sWidth = width;
    this.sHeight = height;
  }
  add(elem) {
    if(elem.constructor === Array) {
      for(let e of elem) {
        elem.scene = this;
        sceneElements.push(elem);
      }
    } else {
      elem.scene = this;
      sceneElements.push(elem);
    }
  }
  remove(elem) {
    let idx = sceneElements.indexOf(elem);
    if(idx > -1) {
      sceneElements.splice(idx, 1);
    }
  }
  update() {
    this.width = this.sWidth || this.canvas.width;
    this.height = this.sHeight || this.canvas.height;

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
    for(let elem of sceneElements) {
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
    let halfWidth = (object.width || object.size) * 0.5;
    let halfHeight = (object.height || object.size) * 0.5;

    if(object.x > object.scene.width - object.x + halfWidth) {
      object.x = 0 - halfWidth;
    } else if (object.x < 0 - halfWidth) {
      object.x = object.scene.width - object.x + halfWidth;
    } else if(object.y > object.scene.height - object.y + halfHeight) {
      object.y = 0 - halfHeight;
    } else if (object.y < 0 - halfHeight) {
      object.y = object.scene.height - object.y + halfHeight;
    }
  }
};
