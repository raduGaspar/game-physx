import { Scene, DisplayObject } from '../../engine';

export default class Rock extends DisplayObject {
  constructor(model) {
    super();

    this.model = model;
  }

  update() {
    if (!this.model.x) {
      this.model.x = Math.random() * this.scene.width;
    }
    if (!this.model.y) {
      this.model.y = Math.random() * this.scene.height;
    }
    this.model.scene = this.scene;
    this.model.update();
    Scene.wrap(this.model);
  }

  render() {
    const { x, y, angle, points, color } = this.model;

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(x, y);
    this.ctx.rotate(angle);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#111';
    this.ctx.fillStyle = color;

    for(let i=0; i<points.length; i++) {
      if(i === 0) {
        this.ctx.moveTo(points[i].x, points[i].y);
      } else {
        this.ctx.lineTo(points[i].x, points[i].y);
      }
    }

    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }
};
