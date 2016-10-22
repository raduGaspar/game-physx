import { Keyboard } from '../';

let canvasInstance;

class CanvasSingleton {
  constructor() {
    if(!canvasInstance) {
      console.log('Canvas instance created');
      let canv = document.createElement('canvas');

      this.canvas = canv;
      this.ctx = canv.getContext('2d');
      document.body.appendChild(canv);
      window.addEventListener('resize', this.resize.bind(this));
      this.resize();

      canvasInstance = this;
    }

    return canvasInstance;
  }
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
};

export default class Canvas extends Keyboard {
  constructor() {
    super();
    canvasInstance = new CanvasSingleton();
    this.canvas = canvasInstance.canvas;
    this.ctx = canvasInstance.ctx;
  }
};
