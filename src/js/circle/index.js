import { Game, Scene } from '../engine';

require('../../scss/styles.scss');

class Square extends Scene {
  constructor(x=0, y=0, size=40, color='#900') {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
  update() {
    this.x += 1;
    this.y += 1.5;
    Scene.wrap(this);
  }
  render() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.ctx.closePath();
    this.ctx.restore();
  }
};

let scene = new Scene(20, 33, 400, 200);
let game = new Game(scene);
let square = new Square();
scene.add(square);
