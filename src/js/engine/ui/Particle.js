import DisplayObject from './DisplayObject';

export default class Particle extends DisplayObject {
  constructor(radius=10, color='#fff') {
    super();
    this.size = radius;
    this.color = color;
    this.width = this.height = radius*2;
  }
  render() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.closePath()
    this.ctx.restore();
  }
};
